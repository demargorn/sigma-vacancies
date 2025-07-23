import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IButtonMode {
   mode: string;
}

const initialState: IButtonMode = {
   mode: 'create'
};

const buttonSlice = createSlice({
   name: 'button',
   initialState,
   reducers: {
      setMode: (state, { payload }: PayloadAction<string>) => {
         state.mode = payload;
      }
   }
});

const buttonActions = buttonSlice.actions;

export { buttonActions };
export default buttonSlice.reducer;
