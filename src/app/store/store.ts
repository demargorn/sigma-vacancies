import { configureStore } from '@reduxjs/toolkit';
import vacanciesReducer from '@/app/store/slices/vacancies.slice';
import templateEditRedcuer from '@/app/store/slices/templateEditSlice';

const store = configureStore({
  reducer: {
    vacancies: vacanciesReducer,
    templateEdit: templateEditRedcuer
  }
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeDispatch = typeof store.dispatch;
export default store;
