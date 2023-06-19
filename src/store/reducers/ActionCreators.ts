import {ICar} from "../../models/ICars";
import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

const server = 'https://csrshop.onrender.com/api'

export const fetchCars = createAsyncThunk(
    'cars/fetchAll',
    async (_, thunkApi) => {
        const response = await axios.get<ICar[]>(`${server}/cars`)
        return response.data
    }
)


export const fetchCar = createAsyncThunk(
    'car/fetchOne',
    async (id:string, thunkApi) => {
        const response = await axios.get<ICar>(`${server}/cars/${id}`)
        return response.data
    }
)

export const fetchBrands = createAsyncThunk(
    'brands/fetchAll',
    async (_, thunkApi) => {
        const response = await axios.get<string[]>(`${server}/brands`)
        return response.data
    }
)

