import { createSlice } from "@reduxjs/toolkit";

export interface IAuth {
  login: boolean;
  name: string;
}

const initialState: IAuth = {
  login: false,
  name: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    authLogin(state, action) {
      state.login = true;
      state.name = action.payload;
    }
  }
})

export default authSlice.reducer;
export const {authLogin} = authSlice.actions;