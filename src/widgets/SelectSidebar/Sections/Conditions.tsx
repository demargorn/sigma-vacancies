import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import styles from './Sections.module.css';

/** Создание новой вакансии. Условия работы */

const Conditions = () => {
   const { vacancy, handleFieldChange } = useVacancyForm();

   return (
      <article className={styles.container}>
         <h2 className={styles.heading} style={{ marginBottom: '32px' }}>
            Условия работы
         </h2>

         <h4 className={styles.input_title}>О компании</h4>

         <div className={styles.input_container}>
            <div className={styles.country}>
               <label htmlFor="country" className={styles.input_label}>
                  Страна
               </label>
               <select id="country" name="country" value={vacancy.country} className={styles.input_text} onChange={handleFieldChange}>
                  <option value="russia" defaultChecked>
                     Россия
                  </option>
               </select>
            </div>
            <div className={styles.region}>
               <label htmlFor="region" className={styles.input_label}>
                  Регион
               </label>
               <select id="region" name="region" value={vacancy.region} className={styles.input_text} onChange={handleFieldChange}>
                  <option value="" hidden defaultChecked>
                     Выберите
                  </option>
               </select>
            </div>
            <div className={styles.city}>
               <label htmlFor="city" className={styles.input_label}>
                  Город
               </label>
               <select id="city" name="city" value={vacancy.city} className={styles.input_text} onChange={handleFieldChange}>
                  <option value="" hidden defaultChecked>
                     Выберите
                  </option>
               </select>
            </div>
         </div>

         <div className={styles.input_container} style={{ marginBottom: '0px' }}>
            <div className={styles.company}>
               <label htmlFor="company_name" className={styles.input_label}>
                  Название компании
               </label>
               <input id="company_name" type="text" name="company_name" value={vacancy.company_name} placeholder="Введите название" className={styles.input_text} onChange={handleFieldChange} />
            </div>
            <div className={styles.company_id}>
               <label htmlFor="company_id" className={styles.input_label}>
                  ID компании
               </label>
               <input id="company_id" type="text" name="company_id" value={vacancy.company_id} placeholder="Введите ID" className={styles.input_text} onChange={handleFieldChange} />
            </div>
         </div>

         <div className={styles.company_description} style={{ marginBottom: '32px' }}>
            <label htmlFor="company_description" className={styles.input_label}>
               Описание компании или проекта
            </label>
            <textarea id="company_description" name="company_description" value={vacancy.company_description} placeholder="Введите текст" className={styles.input_text} onChange={handleFieldChange} />
         </div>

         <h4 className={styles.input_title}>О должности</h4>

         <div className={styles.input_container}>
            <div className={styles.format}>
               <label htmlFor="format" className={styles.input_label}>
                  Формат работы
               </label>
               <select id="format" name="format" value={vacancy.format} className={styles.select_status} onChange={handleFieldChange}>
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
               <select id="employment" name="employment" value={vacancy.employment} className={styles.select_status} onChange={handleFieldChange}>
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

         <div className={styles.schedule}>
            <label htmlFor="schedule" className={styles.input_label}>
               График работы
            </label>
            <input id="schedule" type="text" name="schedule" value={vacancy.schedule} placeholder="Введите текст" className={styles.input_text} onChange={handleFieldChange} />
         </div>

         <h4 className={styles.input_title}>Заработная плата (в месяц)</h4>

         <div className={styles.input_container}>
            <div className={styles.salary}>
               <label htmlFor="salary_from" className={styles.input_label}>
                  от
               </label>
               <input id="salary_from" type="number" name="salary_from" value={vacancy.salary_from} min={0} placeholder="0" className={styles.input_text} onChange={handleFieldChange} />
            </div>
            <div className={styles.salary}>
               <label htmlFor="salary_to" className={styles.input_label}>
                  до
               </label>
               <input id="salary_to" type="number" name="salary_to" value={vacancy.salary_to} min={0} placeholder="все деньги мира" className={styles.input_text} onChange={handleFieldChange} />
            </div>
            <div className={styles.currency}>
               <label htmlFor="currency" className={styles.input_label}>
                  валюта
               </label>
               <select id="currency" name="currency" value={vacancy.currency} className={styles.select_status} onChange={handleFieldChange}>
                  <option value="rub">₽</option>
                  <option value="dollar">$</option>
                  <option value="euro">€</option>
               </select>
            </div>
            <div className={styles.taxes}>
               <input id="after_taxes" type="checkbox" name="after_taxes" checked={vacancy.after_taxes} className={styles.checkbox} onChange={handleFieldChange} />
               <label htmlFor="after_taxes" className={styles.input_label}>
                  на руки
               </label>
            </div>
         </div>
         <div className={styles.period}>
            <label htmlFor="period" className={styles.input_label}>
               Период выплат
            </label>
            <select id="period" name="period" value={vacancy.period} className={styles.select_status} onChange={handleFieldChange}>
               <option value="month" defaultChecked>
                  в месяц
               </option>
               <option value="hour">в час</option>
            </select>
         </div>
      </article>
   );
};

export default Conditions;
