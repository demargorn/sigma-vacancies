import { useDispatch, useSelector } from 'react-redux';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import type { IVacancy } from '@/interfaces/IVacancy.interface';
import { areVacanciesEqual } from '../utilities/compareVacancies';

export const useVacancyForm = () => {
  const vacancy = useSelector((state: TypeRootState) => state.vacancies.vacancy); /** вакансия */
  const cacheVacancy = useSelector((state: TypeRootState) => state.vacancies.cacheVacancy); /** начальное состояние вакансии */
  const dispatch = useDispatch<TypeDispatch>();

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const parsedValue = type === 'number' ? Number(value) : value;
    dispatch(vacanciesActions.updateField({ field: name as keyof IVacancy, value: parsedValue }));
  };

  const handleSetField = <K extends keyof IVacancy>(field: K, value: IVacancy[K]) => {
    dispatch(vacanciesActions.updateField({ field, value }));
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
    handleSetField,
    handleSkillsFieldChange,
    handleSubmitForm,
    handleResetForm,
    isChanged
  };
};
