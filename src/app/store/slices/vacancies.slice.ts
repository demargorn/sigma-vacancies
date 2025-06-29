import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IVacancy } from '@/shared/Vacancy/Vacancy';

/**
 *  срез вакансий
 */

interface IVacancyState {
  items: Array<IVacancy>;
}

const initialState: IVacancyState = {
  items: [
    { id: 1, vacancy_name: 'Frontend-разработчик', customer_name: 'Авито', recruter: 'Михайлова Э.Г.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'активная', responses_qty: 235 },
    { id: 2, vacancy_name: 'Backend-разработчик', customer_name: 'HeadHunter', recruter: 'Попова Н.С.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'на паузе', responses_qty: 115 },
    { id: 3, vacancy_name: 'Python-разработчик', customer_name: 'Ozon', recruter: 'Константинова В.Б.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'закрыта', responses_qty: 10 },
    { id: 4, vacancy_name: 'Product Manager', customer_name: 'X5 Group', recruter: 'Андреева А.А.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'черновик', responses_qty: 0 },
    { id: 5, vacancy_name: 'HR Manager', customer_name: 'Рога И Копыта', recruter: 'Рожкина И.В.', created_date: '10.12.25', deadline_date: '10.01.26', status: 'активная', responses_qty: 15 }
  ]
};

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    /** загружаем список вакансий */
    add: (state, { payload }: PayloadAction<IVacancy>) => {
      state.items.push(payload);
    }
    /** очищаем список вакансий */
    // clearVacancies: (state) => {
    //   state.vacancies = [];
    // }
  }
});

const vacanciesActions = vacanciesSlice.actions;

export { vacanciesActions };
export default vacanciesSlice.reducer;
