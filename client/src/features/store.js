import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./page/pageSlice"
import sessionReducer from "./session/sessionSlice"

const store = configureStore({reducer: {
    page: pageReducer,
    session: sessionReducer
}})

export default store