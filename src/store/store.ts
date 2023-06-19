import {combineReducers, configureStore} from "@reduxjs/toolkit";
import CarsReducer from './reducers/CarsSlice/CarsSlice'
import BrandReducer from './reducers/BrandSlice/BrandSlice'
import AppReducer from './reducers/AppSlice/AppSlice'

const rootReducer  = combineReducers({
    CarsReducer,
    BrandReducer,
    AppReducer
})

export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']