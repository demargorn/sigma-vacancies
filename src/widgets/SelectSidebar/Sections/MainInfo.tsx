import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import styles from './Sections.module.css';

/** Создание новой вакансии. Основная информация */

const MainInfo = () => {
   const { vacancy, handleFieldChange } = useVacancyForm();

   return (
      <article className={styles.container}>
         <h2 className={styles.heading} style={{ marginBottom: '32px' }}>
            Основная информация о вакансии
         </h2>

         <div className={styles.input_container}>
            <div className={styles.input_vacancy_name}>
               <label htmlFor="vacancy_name" className={styles.input_label}>
                  Название вакансии<span style={{ color: '#EA7F8B' }}>*</span>
               </label>
               <input id="vacancy_name" type="text" name="vacancy_name" value={vacancy.vacancy_name} placeholder="Введите текст" className={styles.input_text} onChange={handleFieldChange} required />
            </div>

            <div className={styles.input_vacancy_qty}>
               <label htmlFor="places_qty" className={styles.input_label}>
                  Количество мест
               </label>
               <input id="places_qty" type="number" name="places_qty" value={vacancy.places_qty} min={1} className={styles.input_text} onChange={handleFieldChange} />
            </div>
         </div>

         <div className={styles.select_status_container}>
            <label htmlFor="status" className={styles.input_label}>
               Статус вакансии
            </label>
            <select id="status" className={styles.select_status} name="status" value={vacancy.status} onChange={handleFieldChange}>
               <option value="активная" defaultChecked>
                  Активная
               </option>
               <option value="черновик">Черновик</option>
               <option value="на паузе">На паузе</option>
               <option value="закрыта">Закрыта</option>
            </select>
         </div>

         <div className={styles.notice_container}>
            <p className={styles.notice_text}>
               Обратите внимание: вакансия будет опубликована на витрине вакансий только в статусе «Активная». Во всех остальных статусах вакансию можете просматривать и редактировать только вы.
            </p>
         </div>

         <h4 className={styles.input_title}>Описание вакансии</h4>

         <div className={styles.textarea_container}>
            <label htmlFor="vacancy_description" className={styles.input_label}>
               Краткое описание вакансии
            </label>
            <textarea
               id="vacancy_description"
               name="vacancy_description"
               value={vacancy.vacancy_description}
               rows={4}
               placeholder="Введите текст"
               className={styles.input_textarea}
               onChange={handleFieldChange}
            />
         </div>

         <div className={styles.textarea_container}>
            <label htmlFor="candidate_requirements" className={styles.input_label}>
               Требования к кандидату
            </label>
            <textarea
               id="candidate_requirements"
               name="candidate_requirements"
               value={vacancy.candidate_requirements}
               rows={4}
               placeholder="Опишите требования"
               className={styles.input_textarea}
               onChange={handleFieldChange}
            />
         </div>

         <div className={styles.textarea_container}>
            <label htmlFor="candidate_responsibilities" className={styles.input_label}>
               Обязанности будущие обязанности кандидата
            </label>
            <textarea
               id="candidate_responsibilities"
               name="candidate_responsibilities"
               value={vacancy.candidate_responsibilities}
               rows={4}
               placeholder="Опишите обязанности"
               className={styles.input_textarea}
               onChange={handleFieldChange}
            />
         </div>

         <div className={styles.textarea_container} style={{ marginBottom: '28px' }}>
            <label htmlFor="working_conditions" className={styles.input_label}>
               Условия работы
            </label>
            <textarea
               id="working_conditions"
               name="working_conditions"
               value={vacancy.working_conditions}
               rows={4}
               placeholder="Опишите условия и преимущества работы в компании"
               className={styles.input_textarea}
               onChange={handleFieldChange}
            />
         </div>
      </article>
   );
};

export default MainInfo;
