import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import styles from './Sections.module.css';

/** Создание новой вакансии. О компании */

const Company = () => {
   const { vacancy, handleFieldChange } = useVacancyForm();

   return (
      <article className={styles.container}>
         <h2 className={styles.heading} style={{ marginBottom: '32px' }}>
            О компании
         </h2>

         <div className={styles.input_container}>
            <div className={styles.country}>
               <label htmlFor="country" className={styles.input_label}>
                  Страна
               </label>
               <select id="country" name="country" value={vacancy.country} className={styles.input_text} onChange={handleFieldChange}>
                  <option value="Россия" defaultChecked>
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

         <div className={styles.input_container}>
            <div className={styles.company}>
               <label htmlFor="organization_name" className={styles.input_label}>
                  Название компании
               </label>
               <input id="organization_name" type="text" name="organization_name" value={vacancy.organization_name} placeholder="Введите название" className={styles.input_text} onChange={handleFieldChange} />
            </div>
            <div className={styles.company_id}>
               <label htmlFor="organization_uuid" className={styles.input_label}>
                  ID компании
               </label>
               <input id="organization_uuid" type="text" name="organization_uuid" value={vacancy.organization_uuid} placeholder="Введите ID" className={styles.input_text} onChange={handleFieldChange} />
            </div>
         </div>

         <div className={styles.company_description} style={{ marginBottom: '32px' }}>
            <label htmlFor="organization_description" className={styles.input_label}>
               Описание компании или проекта
            </label>
            <textarea
               id="organization_description"
               name="organization_description"
               value={vacancy.organization_description}
               rows={4}
               placeholder="Введите текст"
               className={styles.input_text}
               onChange={handleFieldChange}
            />
         </div>
      </article>
   );
};

export default Company;
