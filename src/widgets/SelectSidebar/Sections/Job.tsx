import { useDispatch } from 'react-redux';
import type { TypeDispatch } from '@/app/store/store';
import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import styles from './Sections.module.css';

/** Создание новой вакансии. О должности */

const Job = () => {
   const { vacancy, handleFieldChange } = useVacancyForm();
   const dispatch = useDispatch<TypeDispatch>();

   return (
      <article className={styles.container}>
         <h2 className={styles.heading} style={{ marginBottom: '32px' }}>
            О должности
         </h2>

         <div className={styles.input_container}>
            <div className={styles.format}>
               <label htmlFor="work_format" className={styles.input_label}>
                  Формат работы
               </label>
               <select id="work_format" name="work_format" value={vacancy.work_format} className={styles.select_status} onChange={handleFieldChange}>
                  <option value="" defaultChecked hidden>
                     Выберите
                  </option>
                  <option value="офис">Офис</option>
                  <option value="гибридный">Гибридный</option>
                  <option value="удаленно">Удаленно</option>
                  <option value="вахта">Вахта</option>
               </select>
            </div>
            <div className={styles.employment}>
               <label htmlFor="employment_type" className={styles.input_label}>
                  Занятость
               </label>
               <select id="employment_type" name="employment_type" value={vacancy.employment_type} className={styles.select_status} onChange={handleFieldChange}>
                  <option value="" defaultChecked hidden>
                     Выберите
                  </option>
                  <option value="полная">Полная</option>
                  <option value="частичная">Частичная</option>
                  <option value="проектная">Проектная</option>
                  <option value="стажировка">Стажировка</option>
               </select>
            </div>
         </div>

         <div className={styles.input_container}>
            <div className={styles.schedule}>
               <label htmlFor="schedule" className={styles.input_label}>
                  График работы
               </label>
               <input id="schedule" type="text" name="schedule" value={vacancy.schedule} placeholder="Введите текст" className={styles.input_text} onChange={handleFieldChange} />
            </div>
            <div className={styles.employment_form}>
               <label htmlFor="employment_basis" className={styles.input_label}>
                  Форма трудоустройства
               </label>
               <select id="employment_basis" name="employment_basis" value={vacancy.employment_basis} className={styles.select_status} onChange={handleFieldChange}>
                  <option value="" defaultChecked hidden>
                     Выберите
                  </option>
                  <option value="трудовой договор" defaultChecked>
                     Трудовой договор
                  </option>
                  <option value="договор ГПХ" defaultChecked>
                     Договор ГПХ
                  </option>
                  <option value="самозанятый" defaultChecked>
                     Самозанятый
                  </option>
               </select>
            </div>
         </div>

         <h4 className={styles.input_title}>Заработная плата (в месяц)</h4>

         <div className={styles.input_container}>
            <div className={styles.salary}>
               <label htmlFor="salary_from" className={styles.input_label}>
                  От
               </label>
               <input
                  id="salary_from"
                  type="text"
                  name="salary_from"
                  value={vacancy.salary_from === '0' ? '' : vacancy.salary_from}
                  placeholder="0"
                  className={styles.input_text}
                  onChange={({ target }) => {
                     let val = target.value;
                     val = val.replace(/\D/g, '');

                     if (val.length > 1 && val.startsWith('0')) {
                        val = val.replace(/^0+/, '');
                     }

                     dispatch(vacanciesActions.updateField({ field: 'salary_from', value: val === '' ? 0 : Number(val) }));
                  }}
               />
            </div>
            <div className={styles.salary}>
               <label htmlFor="salary_to" className={styles.input_label}>
                  До
               </label>
               <input
                  id="salary_to"
                  type="text"
                  name="salary_to"
                  value={vacancy.salary_to === '0' ? '' : vacancy.salary_to}
                  placeholder="0"
                  className={styles.input_text}
                  onChange={({ target }) => {
                     let val = target.value;
                     val = val.replace(/\D/g, '');

                     if (val.length > 1 && val.startsWith('0')) {
                        val = val.replace(/^0+/, '');
                     }

                     dispatch(vacanciesActions.updateField({ field: 'salary_to', value: val === '' ? 0 : Number(val) }));
                  }}
               />
            </div>
            <div className={styles.currency}>
               <label htmlFor="currency" className={styles.input_label}>
                  Валюта
               </label>
               <select id="currency" name="currency" value={vacancy.currency} className={styles.select_status} onChange={handleFieldChange}>
                  <option value="₽">₽</option>
                  <option value="$">$</option>
                  <option value="€">€</option>
               </select>
            </div>
            <div className={styles.taxes}>
               <input id="taxes" type="checkbox" name="taxes" checked={vacancy.taxes} className={styles.checkbox} onChange={handleFieldChange} />
               <label htmlFor="taxes" className={styles.input_label}>
                  на руки
               </label>
            </div>
         </div>

         <div className={styles.input_container}>
            <div className={styles.period}>
               <label htmlFor="salary_period" className={styles.input_label}>
                  Период оплаты
               </label>
               <select id="salary_period" name="salary_period" value={vacancy.salary_period} className={styles.select_status} onChange={handleFieldChange}>
                  <option value="" defaultChecked hidden>
                     Выберите
                  </option>
                  <option value="в месяц">в месяц</option>
                  <option value="в час">в час</option>
                  <option value="за смену">за смену</option>
                  <option value="за проект">за проект</option>
               </select>
            </div>
            <div className={styles.frequency}>
               <label htmlFor="frequency" className={styles.input_label}>
                  Частота выплат
               </label>
               <select id="frequency" name="frequency" value={vacancy.frequency} className={styles.select_status} onChange={handleFieldChange}>
                  <option value="" defaultChecked hidden>
                     Выберите
                  </option>
                  <option value="каждую неделю">каждую неделю</option>
                  <option value="раз в месяц">раз в месяц</option>
                  <option value="два раза в месяц">два раза в месяц</option>
               </select>
            </div>
         </div>
      </article>
   );
};

export default Job;
