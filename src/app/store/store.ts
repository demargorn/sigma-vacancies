import { configureStore } from '@reduxjs/toolkit';
import vacanciesReducer from '@/app/store/slices/vacancies.slice';

const store = configureStore({
  reducer: {
    vacancies: vacanciesReducer
  }
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeDispatch = typeof store.dispatch;
export default store;
