import {ICar} from "../../../models/ICars";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCar, fetchCars} from "../ActionCreators";
import {priceRange} from "../../../models/IPriceRange";



interface CarsState {
    cars: ICar[],
    filteredCars:ICar[],
    price: priceRange,
    brand: string,
    gearboxType: string,
    bodyType: string,
    car:ICar | undefined,
    isLoading:boolean
}

const initialState: CarsState = {
    cars: [],filteredCars:[], price: {min: 5, max: 100}, brand: '', gearboxType: '', bodyType: '',car:undefined,isLoading:true
}

export const CarsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        setPrice(state, action: PayloadAction<priceRange>) {
            state.price = action.payload
        },

        setGearboxType(state, action: PayloadAction<string>) {
            state.gearboxType = action.payload
        },

        setBodyType(state, action: PayloadAction<string>) {
            state.bodyType = action.payload
        },
        setBrand(state,action:PayloadAction<string>){
            state.brand = action.payload
        },
        setFilteredCars(state){
            let cars = state.cars.filter(car => car.price / 1000 >= state.price.min && car.price / 1000 <= state.price.max);
            if (state.brand != "") cars = cars.filter(car => car.brand === state.brand)
            if (state.gearboxType) {
                cars = cars.filter(car => {
                    let spec = car.spec.find(spec => spec.title === "Тип КПП")
                    if (spec) return spec.description === state.gearboxType
                })
            }
            if (state.bodyType) {
                cars = cars.filter(car => {
                    let spec = car.spec.find(spec => spec.title === "Тип кузова")
                    if (spec) return spec.description === state.bodyType
                })
            }
            state.filteredCars = cars
        }
    },
    extraReducers: {
        [fetchCars.fulfilled.type]: (state, action: PayloadAction<ICar[]>) => {
            state.cars = action.payload
        },
        [fetchCar.pending.type]:(state) => {
            state.isLoading = true
        },
        [fetchCar.fulfilled.type]: (state, action: PayloadAction<ICar>) => {
            state.car = action.payload
            state.isLoading = false
        },

    }
})

export default CarsSlice.reducer