import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import styles from './Sections.module.css';

/** Создание новой вакансии. Дополнительно */

const Additionally = () => {
   const { vacancy, handleFieldChange } = useVacancyForm();

   return (
      <article className={styles.container}>
         <h2 className={styles.heading} style={{ marginBottom: '32px' }}>
            Дополнительно
         </h2>

         <div className={styles.details}>
            <label htmlFor="details" className={styles.input_label}>
               Детальная информация о вакансии
            </label>
            <input id="details" type="text" name="details" value={vacancy.details} placeholder="Встаьте URL " className={styles.input_text} onChange={handleFieldChange} />
         </div>

         <div className={styles.input_container}>
            <div className={styles.vacancy_img}>
               <label htmlFor="vacancy_img" className={styles.input_label}>
                  Картинка вакансии
               </label>
               <input id="vacancy_img" type="text" name="vacancy_img" value={vacancy.vacancy_img} placeholder="Вставьте URL" className={styles.input_text} onChange={handleFieldChange} />
            </div>
            <div className={styles.preview_img}>
               <label htmlFor="preview_img" className={styles.input_label}>
                  Картинка вакансии для превью
               </label>
               <input id="preview_img" type="text" name="preview_img" value={vacancy.preview_img} placeholder="Вставьте URL" className={styles.input_text} onChange={handleFieldChange} />
            </div>
         </div>
      </article>
   );
};

export default Additionally;
