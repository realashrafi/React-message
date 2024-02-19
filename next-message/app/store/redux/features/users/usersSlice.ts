//@ts-nocheck
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.ir/users';

const initialState = []
export const fetchUsers =
    createAsyncThunk('users/fetchUsers', async () => {
        try {
            const res = await axios.get(USERS_URL);
            return [...res.data];
        }catch (err){
            return err.message;
        }
    })
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(fetchUsers.fulfilled,(state, action)=>{
                return action.payload
            })
    }
})
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer