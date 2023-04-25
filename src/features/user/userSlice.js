import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  loading: false,
  users: [],
  error: "",
};

//It generates promise lifecycle action types :  pending, fullfilled, rejected
 export const fetchUser = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios
     .get("http://localhost:8000/question");
   return response.data.map((user) => user);
});

export const StoreUser = createAsyncThunk("user/fetchUsers", async (question) => {
  const response = await axios
     .post("http://localhost:8000/question",question);
   return response.data.map((user) => user);
});
const userSlice = createSlice({
  name: "user",
  initialState,
  
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
//module.exports.fetchUser = fetchUser;
