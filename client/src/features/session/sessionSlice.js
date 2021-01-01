import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk('session/fetchUser', async (token)=>{
    const response = await axios.get('/api/private/accounts/account-information', {headers: {
        'Content-Type': 'application/json',
        'token': token
    }})
    return response.data
})

const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        status: false,
        token: null
    },
    reducers: {
        updateSession: (state,action)=>{
            
        }
    },
    extraReducers: {
        [fetchUser.fulfilled]: (state, action)=>{
            if(action.payload.success){
                state.status = true
                state.accountStatus = action.payload.data.accountStatus
                state.token = action.meta.arg
                state.email = action.payload.data.email
                state.fullname = action.payload.data.fullname
                state.cellphone = action.payload.data.cellphone
                state.officialDocument = action.payload.data.officialDocument
                state.address = action.payload.data.address
                state.zipcode = action.payload.data.zipcode
                state.gender = action.payload.data.gender
                state.city_id = action.payload.data.city_id
            }
        }
    }
})

export const {updateSession} = sessionSlice.actions

export default sessionSlice.reducer