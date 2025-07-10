import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IVacancy } from '@/interfaces/IVacancy.interface';
import type { TypeStatus } from '@/types/status.type';
import Vacancies from '@/pages/Vacancies/Vacancies';

/** срез вакансий */

interface IVacancyState {
  items: Array<IVacancy>;
  vacancy: IVacancy;
}

const initialState: IVacancyState = {
  items: [
    // { id: 1, vacancy_name: 'Frontend-разработчик', company_name: 'Авито', customer_name: 'Михайлова Э.Г.', opened_date: new Date(), closed_date: new Date(), status: 'активная' }
    // { id: 2, vacancy_name: 'Backend-разработчик', customer_name: 'HeadHunter', recruter: 'Попова Н.С.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'на паузе', responses_qty: 115 },
    // { id: 3, vacancy_name: 'Python-разработчик', customer_name: 'Ozon', recruter: 'Константинова В.Б.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'закрыта', responses_qty: 10 },
    // { id: 4, vacancy_name: 'Product Manager', customer_name: 'X5 Group', recruter: 'Андреева А.А.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'черновик', responses_qty: 0 },
    // { id: 5, vacancy_name: 'HR Manager', customer_name: 'Рога И Копыта', recruter: 'Рожкина И.В.', created_date: '10.12.25', deadline_date: '10.01.26', status: 'активная', responses_qty: 15 }
  ],
  vacancy: {
    id: '',
    vacancy_name: '',
    places_qty: 1,
    vacancy_description: '',
    status: 'активная',

    company_name: '',
    customer_name: '',
    customer_tel: '',
    customer_mail: '',
    customer_telegram: '',
    customer_whatsapp: '',

    country: '',
    city: '',
    format: '',
    employment: '',
    schedule: '',
    salary_from: 0,
    salary_to: 0,

    selectedSkills: [],
    experience: '',

    opened_date: '',
    closed_date: '',
    budget: 0,
    responsible: ''
  }
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
        // return;
      }
    },
    addVacancyId: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.id = payload;
    },
    addVacancyName: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.vacancy_name = payload;
    },
    addVacancyPlaces: (state, { payload }: PayloadAction<number>) => {
      state.vacancy.places_qty = payload;
    },
    addVacancyDescription: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.vacancy_description = payload;
    },
    addVacancyStatus: (state, { payload }: PayloadAction<TypeStatus>) => {
      state.vacancy.status = payload;
    },
    addVacancyCompanyName: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.company_name = payload;
    },
    addVacancyCustomerName: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.customer_name = payload;
    },
    addVacancyCustomerTel: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.customer_tel = payload;
    },
    addVacancyCustomerMail: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.customer_mail = payload;
    },
    addVacancyCustomerTelegram: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.customer_telegram = payload;
    },
    addVacancyCustomerWhatsapp: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.customer_whatsapp = payload;
    },
    addVacancyCountry: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.country = payload;
    },
    addVacancyCity: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.city = payload;
    },
    addVacancyFormat: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.format = payload;
    },
    addVacancyEmployment: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.employment = payload;
    },
    addVacancySchedule: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.schedule = payload;
    },
    addVacancySalaryFrom: (state, { payload }: PayloadAction<number>) => {
      state.vacancy.salary_from = payload;
    },
    addVacancySalaryTo: (state, { payload }: PayloadAction<number>) => {
      state.vacancy.salary_to = payload;
    },
    addVacancySelectedSkills: (state, { payload }: PayloadAction<string>) => {
      const existed = state.vacancy.selectedSkills.some((skill) => skill === payload); /** ищем совпадения по навыку */

      if (existed) {
        return; /** запрещаем добавление одикаковых навыков */
      }

      state.vacancy.selectedSkills.push(payload);
    },
    deleteVacancySelectedSkills: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.selectedSkills = state.vacancy.selectedSkills.filter((skill) => skill !== payload);
    },
    addVacancyExperience: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.experience = payload;
    },
    addVacancyOpened: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.opened_date = payload;
    },
    addVacancyClosed: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.closed_date = payload;
    },
    addVacancyBudget: (state, { payload }: PayloadAction<number>) => {
      state.vacancy.budget = payload;
    },
    addVacancyResponsible: (state, { payload }: PayloadAction<string>) => {
      state.vacancy.responsible = payload;
    },

    /** очищаем поля ваканси */
    clearVacancyFields: (state) => {
      state.vacancy = {
        id: '',
        vacancy_name: '',
        places_qty: 1,
        vacancy_description: '',
        status: 'активная',

        company_name: '',
        customer_name: '',
        customer_tel: '',
        customer_mail: '',
        customer_telegram: '',
        customer_whatsapp: '',

        country: '',
        city: '',
        format: '',
        employment: '',
        schedule: '',
        salary_from: 0,
        salary_to: 0,

        selectedSkills: [],
        experience: '',

        opened_date: '',
        closed_date: '',
        budget: 0,
        responsible: ''
      };
    },
    /** очищаем список вакансий */
    clearVacancies: (state) => {
      state.items = [];
    }
  }
});

const vacanciesActions = vacanciesSlice.actions;

export { vacanciesActions };
export default vacanciesSlice.reducer;
