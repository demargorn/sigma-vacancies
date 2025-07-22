import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import styles from './Sections.module.css';

/** Создание новой вакансии. Организационная информация */

const OrganizationalInfo = () => {
   const { vacancy, handleFieldChange } = useVacancyForm(); /** вакансия */

   return (
      <article className={styles.container}>
         <h2 className={styles.heading}>Организационная информация</h2>
         <p className={styles.description}>Эта информация только для внутреннего пользования. Она не будет опубликована на витрине вакансий</p>

         <div className={styles.input_container}>
            <div className={styles.date}>
               <label htmlFor="opened_date" className={styles.input_label}>
                  Дата открытия вакансии
               </label>
               <input id="opened_date" type="date" name="opened_date" value={vacancy.opened_date} placeholder="дд.мм.гггг" className={styles.input_text} onChange={handleFieldChange} />
            </div>
            <div className={styles.date}>
               <label htmlFor="salary" className={styles.input_label}>
                  Дата закрытия вакансии
               </label>
               <input id="salary" type="date" name="closed_date" value={vacancy.closed_date} placeholder="дд.мм.гггг" className={styles.input_text} onChange={handleFieldChange} />
            </div>
         </div>

         <div className={styles.budget}>
            <label htmlFor="budget" className={styles.input_label}>
               Бюджет на вакансию (до)
            </label>
            <input id="budget" type="number" name="budget" value={vacancy.budget} placeholder="0" min={0} className={styles.input_text} onChange={handleFieldChange} />
         </div>

         <div className={styles.responsible}>
            <label htmlFor="responsible" className={styles.input_label}>
               Ответственный
            </label>
            <select id="responsible" name="responsible" className={styles.select_status} onChange={handleFieldChange}>
               <option value="" defaultChecked hidden>
                  Выберите
               </option>
            </select>
         </div>
      </article>
   );
};

export default OrganizationalInfo;
