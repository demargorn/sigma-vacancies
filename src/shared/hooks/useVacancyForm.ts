import type { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import { areVacanciesEqual } from '@/shared/utilities/utils';
import type { IVacancy } from '@/interfaces/IVacancy.interface';

const useVacancyForm = () => {
   const vacancy = useSelector((state: TypeRootState) => state.vacancies.vacancy); /** вакансия */
   const cacheVacancy = useSelector((state: TypeRootState) => state.vacancies.cacheVacancy); /** начальное состояние вакансии */
   const dispatch = useDispatch<TypeDispatch>();

   const handleFieldChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = target;

      let parsedValue: string | number | boolean = value;

      if (type === 'checkbox' && target instanceof HTMLInputElement) {
         parsedValue = target.checked;
      } else if (type === 'number') {
         parsedValue = Number(value);
      }

      dispatch(vacanciesActions.updateField({ field: name as keyof IVacancy, value: parsedValue }));
   };

   const handleSkillsFieldChange = (field: keyof IVacancy, values: string[]) => {
      dispatch(vacanciesActions.updateField({ field, value: values }));
   };

   const handleSubmitForm = () => {
      dispatch(vacanciesActions.setVacancy(vacancy));
      dispatch(vacanciesActions.resetCacheVacancy());
   };

   const handleResetForm = () => {
      dispatch(vacanciesActions.resetVacancy());
   };

   const isChanged = !areVacanciesEqual(vacancy, cacheVacancy);

   return {
      vacancy,
      cacheVacancy,
      handleFieldChange,
      handleSkillsFieldChange,
      handleSubmitForm,
      handleResetForm,
      isChanged
   };
};

export { useVacancyForm };
