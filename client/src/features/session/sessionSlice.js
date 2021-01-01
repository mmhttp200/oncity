import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk('session/fetchUser', async (email, password, sessionIP)=>{
    const response = await axios.post('/api/public/accounts/login',
                                        {email, password, sessionIP},
                                        {headers: {'Content-Type': 'application/json'}})
    return response.data
})

const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        status: false,
        token: null
    },
    extraReducers: {
        [fetchUser.fulfilled]: (state, action)=>{
            state = {...action.payload}
        }
    }
})

export default sessionSlice.reducer