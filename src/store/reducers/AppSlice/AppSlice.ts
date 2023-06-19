import {createSlice} from "@reduxjs/toolkit";



interface AppState {
    mode:string,
    slideCount:number
}

const initialState: AppState = {
    mode:'desktop',
    slideCount:3
}

export const AppSlice = createSlice({
    name: "brands",
    initialState,
    reducers:{
        setMode(state) {
            const width = window.screen.width
            if (width <= 576) {
                state.mode = 'mobile'
                state.slideCount = 1
            }
            if (width <= 1100 && width > 576) {
                state.mode = 'tablet'
                state.slideCount = 2
            }
            if (width > 1100) {
                state.mode = 'desktop'
                state.slideCount = 3
            }
        }
    },
})

export default AppSlice.reducer


