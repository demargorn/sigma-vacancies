import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IProfileState {
   profile_id: string;
   user_id: string;
   login: string;
   first_name: string;
   last_name: string;
}

const initialState: IProfileState = {
   profile_id: '',
   user_id: '',
   login: '',
   first_name: '',
   last_name: ''
};

const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      saveProfileId: (state, { payload }: PayloadAction<string>) => {
         state.profile_id = payload;
      },
      saveUserId: (state, { payload }: PayloadAction<string>) => {
         state.user_id = payload;
      },
      saveLogin: (state, { payload }: PayloadAction<string>) => {
         state.login = payload;
      },
      saveFirstName: (state, { payload }: PayloadAction<string>) => {
         state.first_name = payload;
      },
      saveLastName: (state, { payload }: PayloadAction<string>) => {
         state.last_name = payload;
      },
      clearProfile: (state) => {
         state = { ...initialState };
      }
   }
});

const profileActions = profileSlice.actions;

export { profileActions };
export default profileSlice.reducer;
