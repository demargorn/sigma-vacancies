import { createSlice, type Draft, type PayloadAction } from '@reduxjs/toolkit';
import type { IVacancy } from '@/interfaces/IVacancy.interface';

/** срез вакансий */

interface IVacancyState {
   items: Array<IVacancy>;
   vacancy: IVacancy;
   cacheVacancy: IVacancy;
}

const initialVacancy: IVacancy = {
   id: '',
   vacancy_name: '',
   places_qty: 1,
   vacancy_description: '',
   candidate_requirements: '',
   candidate_responsibilities: '',
   working_conditions: '',
   status: 'активная',

   company_name: '',
   company_id: '',
   customer_name: '',
   company_description: '',
   customer_tel: '',
   customer_mail: '',
   customer_telegram: '',
   customer_whatsapp: '',

   country: '',
   region: '',
   city: '',
   format: 'office',
   employment: 'full',
   employment_form: '',
   schedule: '',
   salary_from: 0,
   salary_to: 0,
   currency: 'rub',
   after_taxes: false,
   period: 'month',

   selectedSkills: [],
   experience: 'none',

   opened_date: '',
   closed_date: '',
   budget: 0,
   responsible: '',

   details: '',
   vacancy_img: '',
   preview_img: ''
};

const initialState: IVacancyState = {
   items: [
      // { id: '01', vacancy_name: 'HR Manager', company_name: 'Рога И Копыта', customer_name: 'Рожкина И.В.', opened_date: '10.12.25', closed_date: '10.01.26', status: 'активная' },
      // { id: '02', vacancy_name: 'Python Developer', company_name: 'Avito', customer_name: 'Рожкина И.В.', opened_date: '10.12.25', closed_date: '10.01.26', status: 'черновик' }
   ],
   vacancy: { ...initialVacancy },
   cacheVacancy: { ...initialVacancy }
};

const vacanciesSlice = createSlice({
   name: 'vacancies',
   initialState,
   reducers: {
      /** добавляем новую вакансию */
      addVacancy: (state) => {
         const existed = state.items.some((item) => item.id === state.vacancy.id);
         /** если не существует - добавляем новую */
         if (!existed) {
            state.items.push(state.vacancy);
         }
      },

      updateVacancyInList: (state, { payload }: PayloadAction<IVacancy>) => {
         const updated = payload;
         state.items = state.items.map((item) => (item.id === updated.id ? updated : item));
      },

      updateField: <K extends keyof IVacancy>(state: Draft<typeof initialState>, { payload }: PayloadAction<{ field: K; value: IVacancy[K] }>) => {
         const { field, value } = payload;
         state.vacancy[field] = value;
      },

      setVacancy: (state, { payload }: PayloadAction<IVacancy>) => {
         state.vacancy = { ...payload };
      },
      resetVacancy: (state) => {
         state.vacancy = { ...initialVacancy };
      },

      setCacheVacancy: (state, { payload }: PayloadAction<IVacancy>) => {
         state.cacheVacancy = { ...payload };
      },
      resetCacheVacancy: (state) => {
         state.cacheVacancy = { ...initialVacancy };
      },

      addVacancySelectedSkills: (state, { payload }: PayloadAction<string>) => {
         const existed = state.vacancy.selectedSkills?.some((skill) => skill === payload); /** ищем совпадения по навыку */

         if (existed) {
            return; /** запрещаем добавление одикаковых навыков */
         }

         state.vacancy.selectedSkills?.push(payload);
      },
      deleteVacancySelectedSkills: (state, { payload }: PayloadAction<string>) => {
         state.vacancy.selectedSkills = state.vacancy.selectedSkills?.filter((skill) => skill !== payload);
      },

      /** очищаем список вакансий */
      clearVacancies: (state) => {
         state.items = [];
      }
   }
});

const vacanciesActions = vacanciesSlice.actions;

export { vacanciesActions };
export { initialState };
export default vacanciesSlice.reducer;
