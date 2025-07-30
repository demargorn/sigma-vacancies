import { createSlice, type Draft, type PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { IVacancy } from '@/interfaces/IVacancy.interface';

/** срез вакансий */

interface IVacancyState {
   items: Array<IVacancy>;
   vacancy: IVacancy;
   cacheVacancy: IVacancy;
   errors: Partial<Record<keyof IVacancy, string>>;
}

const patterns: Partial<Record<keyof IVacancy, RegExp>> = {
   title: /^[A-Za-zА-Яа-яЁё0-9-\/:;'"[\]{}+]{2,60}$/ /** валидация стоки */,
   contact_person_phone: /^\+?[0-9]{7,12}$/,
   recruiter_phone: /^\+?[0-9]{7,12}$/,
   recruiter_wa: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/[^\s]*)?$/,
   contact_person_email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
   contact_person_tg: /^@[a-zA-Z0-9_]{5,50}$/,
   vacancy_url: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/[^\s]*)?$/,
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
         case 'title':
            return 'введите название вакансии';
         case 'contact_person_phone':
            return 'телефон в формате +79991234567';
         case 'contact_person_email':
            return 'некорректный email';
         case 'contact_person_tg':
            return '@user_name (не менее 5 символов)';
         case 'recruiter_wa':
         case 'vacancy_url':
         case 'vacancy_img':
         case 'preview_img':
            return 'некорректный url';
      }
   }
   return '';
};

const initialVacancy: IVacancy = {
   id: uuidv4().slice(0, 6),
   title: '',
   required_employees: 1,
   position: '',
   short_description: '',
   requirements: '',
   responsibilities: '',
   benefits: '',
   status: 'активная',

   organization_name: '',
   organization_uuid: '',
   teams: '',
   customer_name: '',
   contact_person_name: '',
   organization_description: '',
   contact_person_phone: '',
   contact_person_email: '',
   contact_person_tg: '',

   country: '',
   region: '',
   city: '',
   work_format: '',
   employment_type: '',
   employment_basis: '',
   schedule: '',
   salary_from: '',
   salary_to: '',
   currency: '₽',
   taxes: false,
   salary_period: '',
   frequency: '',

   skills: [],
   education: '',
   experience_required: '',

   recruiter_name: '',
   recruiter_phone: '',
   recruiter_email: '',
   recruiter_tg: '',
   recruiter_wa: '',

   opened_date: '',
   deadline_date: '',
   budget_to: '',
   responsible: '',

   vacancy_url: '',
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
         let finalValue =
            field === 'contact_person_tg' && typeof value === 'string' && !value.startsWith('@')
               ? (('@' + value.replace(/@/g, '')) as IVacancy[K])
               : field === 'contact_person_phone' && typeof value === 'string' && !value.startsWith('+')
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
      setVacancyById: (state, action: PayloadAction<string>) => {
         const id = action.payload;
         const vacancy = state.items.find((v) => v.id === id);

         if (vacancy) {
            state.vacancy = { ...vacancy };
            state.cacheVacancy = { ...vacancy };
         } else {
            console.warn(`Вакансия с id=${id} не найдена`);
         }
      },
      resetVacancy: (state) => {
         state.vacancy = { ...initialVacancy, id: uuidv4().slice(0, 6) };
         state.cacheVacancy = { ...initialVacancy, id: uuidv4().slice(0, 6) };
      },

      setCacheVacancy: (state, { payload }: PayloadAction<IVacancy>) => {
         state.cacheVacancy = { ...payload };
      },

      addVacancySelectedSkills: (state, { payload }: PayloadAction<string>) => {
         const existed = state.vacancy.skills?.some((skill) => skill === payload); /** ищем совпадения по навыку */

         if (existed) {
            return; /** запрещаем добавление одикаковых навыков */
         }

         state.vacancy.skills?.push(payload);
      },
      deleteVacancySelectedSkills: (state, { payload }: PayloadAction<string>) => {
         state.vacancy.skills = state.vacancy.skills?.filter((skill) => skill !== payload);
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
