import { useDispatch, useSelector } from 'react-redux';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import styles from './Sections.module.css';

/** Создание новой вакансии. О должности */

const Job = () => {
   const { vacancy } = useSelector((state: TypeRootState) => state.vacancies);
   const dispatch = useDispatch<TypeDispatch>();

   return (
      <article className={styles.container}>
         <h2 className={styles.heading} style={{ marginBottom: '32px' }}>
            О должности
         </h2>

         <div className={styles.input_container}>
            <div className={styles.format}>
               <label htmlFor="format" className={styles.input_label}>
                  Формат работы
               </label>
               <select
                  id="format"
                  name="format"
                  value={vacancy.format}
                  className={styles.select_status}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'format', value: target.value }))}
               >
                  <option value="office" defaultChecked>
                     Офис
                  </option>
                  <option value="hibrid">Гибрид</option>
                  <option value="distance">Удаленный формат</option>
                  <option value="look-out">Вахта</option>
               </select>
            </div>
            <div className={styles.employment}>
               <label htmlFor="employment" className={styles.input_label}>
                  Занятость
               </label>
               <select
                  id="employment"
                  name="employment"
                  value={vacancy.employment}
                  className={styles.select_status}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'employment', value: target.value }))}
               >
                  <option value="full" defaultChecked>
                     Полная
                  </option>
                  <option value="partial">Частичная</option>
                  <option value="flexible">Гибкий график</option>
                  <option value="project">Проектная</option>
                  <option value="internship">Стажировка</option>
               </select>
            </div>
         </div>

         <div className={styles.input_container}>
            <div className={styles.schedule}>
               <label htmlFor="schedule" className={styles.input_label}>
                  График работы
               </label>
               <input
                  id="schedule"
                  type="text"
                  name="schedule"
                  value={vacancy.schedule}
                  placeholder="Введите текст"
                  className={styles.input_text}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'schedule', value: target.value }))}
               />
            </div>
            <div className={styles.employment_form}>
               <label htmlFor="employment_form" className={styles.input_label}>
                  Форма трудоустройства
               </label>
               <select
                  id="employment_form"
                  name="employment_form"
                  value={vacancy.employment_form}
                  className={styles.select_status}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'employment_form', value: target.value }))}
               >
                  <option value="state" defaultChecked>
                     Трудовой договор
                  </option>
                  <option value="outsourcing" defaultChecked>
                     Договор ГПХ
                  </option>
                  <option value="self-employed" defaultChecked>
                     Самозанятый
                  </option>
               </select>
            </div>
         </div>

         <h4 className={styles.input_title}>Заработная плата (в месяц)</h4>

         <div className={styles.input_container}>
            <div className={styles.salary}>
               <label htmlFor="salary_from" className={styles.input_label}>
                  от
               </label>
               <input
                  id="salary_from"
                  type="number"
                  name="salary_from"
                  value={vacancy.salary_from}
                  min={0}
                  placeholder="0"
                  className={styles.input_text}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'salary_from', value: target.value }))}
               />
            </div>
            <div className={styles.salary}>
               <label htmlFor="salary_to" className={styles.input_label}>
                  до
               </label>
               <input
                  id="salary_to"
                  type="number"
                  name="salary_to"
                  value={vacancy.salary_to}
                  min={0}
                  placeholder="все деньги мира"
                  className={styles.input_text}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'salary_to', value: target.value }))}
               />
            </div>
            <div className={styles.currency}>
               <label htmlFor="currency" className={styles.input_label}>
                  валюта
               </label>
               <select
                  id="currency"
                  name="currency"
                  value={vacancy.currency}
                  className={styles.select_status}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'currency', value: target.value }))}
               >
                  <option value="rub">₽</option>
                  <option value="dollar">$</option>
                  <option value="euro">€</option>
               </select>
            </div>
            <div className={styles.taxes}>
               <input
                  id="after_taxes"
                  type="checkbox"
                  name="after_taxes"
                  checked={vacancy.after_taxes}
                  className={styles.checkbox}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'after_taxes', value: target.value }))}
               />
               <label htmlFor="after_taxes" className={styles.input_label}>
                  на руки
               </label>
            </div>
         </div>

         <div className={styles.period}>
            <label htmlFor="period" className={styles.input_label}>
               Период выплат
            </label>
            <select
               id="period"
               name="period"
               value={vacancy.period}
               className={styles.select_status}
               onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'period', value: target.value }))}
            >
               <option value="month" defaultChecked>
                  в месяц
               </option>
               <option value="hour">в час</option>
            </select>
         </div>
      </article>
   );
};

export default Job;
