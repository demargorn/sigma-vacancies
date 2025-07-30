import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import { useDispatch, useSelector } from 'react-redux';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import styles from './Sections.module.css';

/** Создание новой вакансии. Основная информация */

const MainInfo = () => {
   const { vacancy, errors } = useSelector((state: TypeRootState) => state.vacancies);
   const { handleFieldChange } = useVacancyForm();
   const dispatch = useDispatch<TypeDispatch>();

   return (
      <article className={styles.container}>
         <h2 className={styles.heading} style={{ marginBottom: '32px' }}>
            Основная информация о вакансии
         </h2>

         <div className={styles.input_container}>
            <div className={styles.input_vacancy_name}>
               <label htmlFor="title" className={styles.input_label}>
                  Название вакансии<span style={{ color: '#EA7F8B' }}>*</span>
               </label>
               <input
                  id="title"
                  type="text"
                  name="title"
                  value={vacancy.title}
                  placeholder="Введите текст"
                  className={styles.input_text}
                  style={errors.title ? { border: '1px solid var(--error-color)' } : {}}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'title', value: target.value }))}
                  required
               />
               {errors.title && <p style={{ color: 'var(--error-color)' }}>{errors.title}</p>}
            </div>

            <div className={styles.input_vacancy_qty}>
               <label htmlFor="required_employees" className={styles.input_label}>
                  Количество мест
               </label>
               <input
                  id="required_employees"
                  type="number"
                  name="required_employees"
                  value={vacancy.required_employees}
                  min={1}
                  className={styles.input_text}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'required_employees', value: target.value }))}
               />
            </div>
         </div>

         <div className={styles.position}>
            <label htmlFor="position" className={styles.input_label}>
               Профессия
            </label>
            <select id="position" name="position" value={vacancy.position} className={styles.select_status} onChange={handleFieldChange}>
               <option value="" defaultChecked hidden>
                  Выберите
               </option>
            </select>
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
            <label htmlFor="short_description" className={styles.input_label}>
               Краткое описание вакансии
            </label>
            <textarea
               id="short_description"
               name="short_description"
               value={vacancy.short_description}
               rows={4}
               placeholder="Введите текст"
               className={styles.input_textarea}
               onChange={handleFieldChange}
            />
         </div>

         <div className={styles.textarea_container}>
            <label htmlFor="requirements" className={styles.input_label}>
               Требования к кандидату
            </label>
            <textarea
               id="requirements"
               name="requirements"
               value={vacancy.requirements}
               rows={4}
               placeholder="Опишите требования"
               className={styles.input_textarea}
               onChange={handleFieldChange}
            />
         </div>

         <div className={styles.textarea_container}>
            <label htmlFor="responsibilities" className={styles.input_label}>
               Будущие обязанности кандидата
            </label>
            <textarea
               id="responsibilities"
               name="responsibilities"
               value={vacancy.responsibilities}
               rows={4}
               placeholder="Опишите обязанности"
               className={styles.input_textarea}
               onChange={handleFieldChange}
            />
         </div>

         <div className={styles.textarea_container} style={{ marginBottom: '28px' }}>
            <label htmlFor="benefits" className={styles.input_label}>
               Условия работы
            </label>
            <textarea
               id="benefits"
               name="benefits"
               value={vacancy.benefits}
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
