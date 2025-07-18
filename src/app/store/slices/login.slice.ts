import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ILoginState {
   token: string;
}

const initialState: ILoginState = {
   token: ''
};

const loginSlice = createSlice({
   name: 'login',
   initialState,
   reducers: {
      setToken: (state, { payload }: PayloadAction<string>) => {
         state.token = payload;
      }
   }
});

const loginActions = loginSlice.actions;

export { loginActions };
export default loginSlice.reducer;
