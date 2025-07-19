import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '@/app/store/slices/login.slice';
import profileReducer from '@/app/store/slices/profile.slice';
import vacanciesReducer from '@/app/store/slices/vacancies.slice';
import templateEditRedcuer from '@/app/store/slices/templateEditSlice';

const store = configureStore({
   reducer: {
      login: loginReducer,
      profile: profileReducer,
      vacancies: vacanciesReducer,
      templateEdit: templateEditRedcuer
   }
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeDispatch = typeof store.dispatch;
export default store;
