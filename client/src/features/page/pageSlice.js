import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPage = createAsyncThunk('page/fetchPage', async (uri)=>{
    const response = await axios.get(`/api/public/pages/page/${uri}`)
    return response.data
})

const pageSlice = createSlice({
    name: 'page',
    initialState: {
        loading: 'idle',
        error: null,
        info: {}
    },
    reducers: {},
    extraReducers: {
        [fetchPage.fulfilled]: (state, action)=>{
            state.info = {...action.payload}
        }
    }
})

export default pageSlice.reducer