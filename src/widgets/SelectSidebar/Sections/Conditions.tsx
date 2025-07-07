import type { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import styles from './Sections.module.css';

/** Создание новой вакансии. Условия работы */

const Conditions = () => {
  const vacancy = useSelector((s: TypeRootState) => s.vacancies.vacancy); /** вакансия */
  const dispatch = useDispatch<TypeDispatch>();

  const handleVacancyCountryChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancyCountry(target.value));
  };

  const handleVacancyCityChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancyCity(target.value));
  };

  const handleVacancyCompanyNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancyCompanyName(target.value));
  };

  const handleVacancyFormatChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    dispatch(vacanciesActions.addVacancyFormat(target.value));
  };

  const handleVacancyEmploymentChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    dispatch(vacanciesActions.addVacancyEmployment(target.value));
  };

  const handleVacancyScheduleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancySchedule(target.value));
  };

  const handleVacancySalaryFromChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancySalaryFrom(Number(target.value)));
  };
  const handleVacancySalaryToChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancySalaryTo(Number(target.value)));
  };

  return (
    <article className={styles.container}>
      <h2 className={styles.heading} style={{ marginBottom: '32px' }}>
        Условия работы
      </h2>

      <h4 className={styles.input_title}>О компании</h4>

      <label className={styles.input_container}>
        <div className={styles.country}>
          <div className={styles.input_label}>Страна</div>
          <input type="text" name="country" value={vacancy.country} placeholder="Россия" className={styles.input_text} onChange={handleVacancyCountryChange} />
        </div>
        <div className={styles.city}>
          <div className={styles.input_label}>Город</div>
          <input type="text" name="city" value={vacancy.city} placeholder="Введите город" className={styles.input_text} onChange={handleVacancyCityChange} />
        </div>
      </label>

      <label className={styles.company}>
        <div className={styles.input_label}>Название компании</div>
        <input type="text" name="company_name" value={vacancy.company_name} placeholder="Введите название" className={styles.input_text} onChange={handleVacancyCompanyNameChange} />
      </label>

      <h4 className={styles.input_title}>О должности</h4>

      <label className={styles.input_container}>
        <div className={styles.format}>
          <div className={styles.input_label}>Формат работы</div>
          <select name="format" value={vacancy.format} className={styles.select_status} onChange={handleVacancyFormatChange}>
            <option value="office" defaultChecked>
              Офис
            </option>
            <option value="hibrid">Гибрид</option>
            <option value="distance">Удаленный формат</option>
            <option value="look-out">Вахта</option>
          </select>
        </div>
        <div className={styles.employment}>
          <div className={styles.input_label}>Занятость</div>
          <select name="employment" value={vacancy.employment} className={styles.select_status} onChange={handleVacancyEmploymentChange}>
            <option value="full" defaultChecked>
              Полная
            </option>
            <option value="partial">Частичная</option>
            <option value="flexible">Гибкий график</option>
            <option value="project">Проектная</option>
          </select>
        </div>
      </label>

      <label className={styles.schedule}>
        <div className={styles.input_label}>График работы</div>
        <input type="text" name="schedule" value={vacancy.schedule} placeholder="Введите текст" className={styles.input_text} onChange={handleVacancyScheduleChange} />
      </label>

      <h4 className={styles.input_title}>Заработная плата (в месяц)</h4>

      <label className={styles.input_container}>
        <div className={styles.salary}>
          <div className={styles.input_label}>от</div>
          <input type="number" name="salaty_from" value={vacancy.salary_from} min={0} placeholder="0" className={styles.input_text} onChange={handleVacancySalaryFromChange} />
        </div>
        <div className={styles.salary}>
          <div className={styles.input_label}>до</div>
          <input type="number" name="salaty_to" value={vacancy.salary_to} min={0} placeholder="все деньги мира" className={styles.input_text} onChange={handleVacancySalaryToChange} />
        </div>
      </label>
    </article>
  );
};

export default Conditions;
