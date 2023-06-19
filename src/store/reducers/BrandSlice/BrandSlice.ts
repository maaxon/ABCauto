import {ICar} from "../../../models/ICars";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchBrands, fetchCar, fetchCars} from "../ActionCreators";

interface priceRange {
    min: number,
    max: number
}

interface CarsState {
   brands:string[]
}

const initialState: CarsState = {
    brands:[]
}

export const BrandsSlice = createSlice({
    name: "brands",
    initialState,
    reducers:{},
    extraReducers: {
        [fetchBrands.fulfilled.type]: (state, action: PayloadAction<string[]>) => {
            state.brands = action.payload
        },
    }
})

export default BrandsSlice.reducer


