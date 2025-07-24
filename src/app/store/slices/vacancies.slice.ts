import { createSlice, type Draft, type PayloadAction } from '@reduxjs/toolkit';
import type { IVacancy } from '@/interfaces/IVacancy.interface';

/** срез вакансий */

interface IVacancyState {
   items: Array<IVacancy>;
   vacancy: IVacancy;
   cacheVacancy: IVacancy;
   errors: Partial<Record<keyof IVacancy, string>>;
}

const patterns: Partial<Record<keyof IVacancy, RegExp>> = {
   vacancy_name: /^[A-Za-zА-Яа-яЁё0-9-\/:;'"[\]{}+]{2,60}$/ /** валидация стоки */,
   customer_tel: /^\+?[0-9]{7,12}$/,
   customer_whatsapp: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/[^\s]*)?$/,
   customer_mail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
   customer_telegram: /^@[a-zA-Z0-9_]{5,50}$/,
   details: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/[^\s]*)?$/,
   vacancy_img: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/[^\s]*)?$/,
   preview_img: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/[^\s]*)?$/
};

const validateField = (field: keyof IVacancy, value: string) => {
   if (!value) return 'обязательное поле';

   if (!patterns[field]) {
      return;
   }

   if (!patterns[field].test(value)) {
      switch (field) {
         case 'vacancy_name':
            return 'ведите название вакансии';
         case 'customer_tel':
            return 'телефон в формате +79991234567';
         case 'customer_mail':
            return 'некорректный email';
         case 'customer_telegram':
            return '@user_name (не менее 5 символов)';
         case 'customer_whatsapp':
         case 'details':
         case 'vacancy_img':
         case 'preview_img':
            return 'некорректный url';
      }
   }
   return '';
};

const initialVacancy: IVacancy = {
   id: '',
   vacancy_name: '',
   places_qty: 1,
   position: '',
   vacancy_description: '',
   candidate_requirements: '',
   candidate_responsibilities: '',
   working_conditions: '',
   status: 'активная',

   company_name: '',
   company_id: '',
   customer_name: '',
   customer_contact_person: '',
   company_description: '',
   customer_tel: '',
   customer_mail: '',
   customer_telegram: '',
   customer_whatsapp: '',

   country: '',
   region: '',
   city: '',
   format: '',
   employment: '',
   employment_form: '',
   schedule: '',
   salary_from: 0,
   salary_to: 0,
   currency: '₽',
   after_taxes: false,
   period: '',
   frequency: '',

   selectedSkills: [],
   education: '',
   experience: '',

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
   cacheVacancy: { ...initialVacancy },
   errors: {}
};

const vacanciesSlice = createSlice({
   name: 'vacancies',
   initialState,
   reducers: {
      /** добавляем новую вакансию */
      addVacancy: (state, { payload }: PayloadAction<IVacancy>) => {
         const existed = state.items.some((item) => item.id === state.vacancy.id);
         /** если не существует - добавляем новую */
         if (!existed) {
            state.items.push(payload);
         }
      },

      updateVacancyInList: (state, { payload }: PayloadAction<IVacancy>) => {
         const updated = payload;
         state.items = state.items.map((item) => (item.id === updated.id ? updated : item));
      },

      updateField: <K extends keyof IVacancy>(state: Draft<typeof initialState>, { payload }: PayloadAction<{ field: K; value: IVacancy[K] }>) => {
         const { field, value } = payload;

         /** автоподстановка @ для Telegram и + для телефона */
         const finalValue =
            field === 'customer_telegram' && typeof value === 'string' && !value.startsWith('@')
               ? (('@' + value.replace(/@/g, '')) as IVacancy[K])
               : field === 'customer_tel' && typeof value === 'string' && !value.startsWith('+')
               ? (('+' + value.replace(/\+/g, '')) as IVacancy[K])
               : value;

         state.vacancy[field] = finalValue;

         /** валидация */
         const errorMsg = validateField(field, String(finalValue));
         if (errorMsg) {
            state.errors[field] = errorMsg;
         } else {
            delete state.errors[field];
         }
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
