import { type ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import styles from './Sections.module.css';

/** Создание новой вакансии. Организационная информация */

const OrganizationalInfo = () => {
  const vacancy = useSelector((s: TypeRootState) => s.vacancies.vacancy); /** вакансия */
  const dispatch = useDispatch<TypeDispatch>();

  const handleVacancyOpenedDateChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancyOpened(target.value));
  };

  const handleVacancyClosedDateChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancyClosed(target.value));
  };

  const handleVacancyBudgetChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancyBudget(Number(target.value)));
  };

  const handleVacancyResponsibleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    dispatch(vacanciesActions.addVacancyResponsible(target.value));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Организационная информация</h2>
      <p className={styles.description}>Эта информация только для внутреннего пользования. Она не будет опубликована на витрине вакансий</p>

      <label className={styles.input_container}>
        <div className={styles.salary}>
          <div className={styles.input_label}>Дата открытия вакансии</div>
          <input type="date" name="opened_date" value={vacancy.opened_date} placeholder="дд.мм.гггг" className={styles.input_text} onChange={handleVacancyOpenedDateChange} />
        </div>
        <div className={styles.salary}>
          <div className={styles.input_label}>Дата закрытия вакансии</div>
          <input type="date" name="closed_date" value={vacancy.closed_date} placeholder="дд.мм.гггг" className={styles.input_text} onChange={handleVacancyClosedDateChange} />
        </div>
      </label>

      <label className={styles.schedule}>
        <div className={styles.input_label}>Бюджет на вакансию (до)</div>
        <input type="number" name="budget" value={vacancy.budget} placeholder="0" className={styles.input_text} onChange={handleVacancyBudgetChange} />
      </label>

      <label className={styles.schedule}>
        <div className={styles.input_label}>Ответственный</div>
        <select name="responsible" className={styles.select_status} onChange={handleVacancyResponsibleChange}>
          <option value="hr" defaultChecked>
            HR - Ермолина Е.В.
          </option>
          <option value="teamlead">TeamLead - Львов А.Н.</option>
        </select>
      </label>
    </div>
  );
};

export default OrganizationalInfo;
