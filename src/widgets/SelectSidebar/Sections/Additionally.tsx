import { useDispatch, useSelector } from 'react-redux';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import styles from './Sections.module.css';

/** Создание новой вакансии. Дополнительно */

const Additionally = () => {
   const { vacancy, errors } = useSelector((state: TypeRootState) => state.vacancies);
   const dispatch = useDispatch<TypeDispatch>();

   return (
      <article className={styles.container}>
         <h2 className={styles.heading} style={{ marginBottom: '32px' }}>
            Дополнительно
         </h2>

         <div className={styles.details}>
            <label htmlFor="details" className={styles.input_label}>
               Детальная информация о вакансии
            </label>
            <input
               id="details"
               type="text"
               name="details"
               value={vacancy.vacancy_url}
               placeholder="Вставьте URL"
               className={styles.input_text}
               style={errors.vacancy_url ? { border: '1px solid var(--error-color)' } : {}}
               onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'vacancy_url', value: target.value }))}
            />
            {errors.vacancy_url && <p style={{ color: 'var(--error-color)' }}>{errors.vacancy_url}</p>}
         </div>

         <div className={styles.input_container}>
            <div className={styles.vacancy_img}>
               <label htmlFor="vacancy_img" className={styles.input_label}>
                  Картинка вакансии
               </label>
               <input
                  id="vacancy_img"
                  type="text"
                  name="vacancy_img"
                  value={vacancy.vacancy_img}
                  placeholder="Вставьте URL"
                  className={styles.input_text}
                  style={errors.vacancy_img ? { border: '1px solid var(--error-color)' } : {}}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'vacancy_img', value: target.value }))}
               />
               {errors.vacancy_img && <p style={{ color: 'var(--error-color)' }}>{errors.vacancy_img}</p>}
            </div>
            <div className={styles.preview_img}>
               <label htmlFor="preview_img" className={styles.input_label}>
                  Картинка вакансии для превью
               </label>
               <input
                  id="preview_img"
                  type="text"
                  name="preview_img"
                  value={vacancy.preview_img}
                  placeholder="Вставьте URL"
                  className={styles.input_text}
                  style={errors.preview_img ? { border: '1px solid var(--error-color)' } : {}}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'preview_img', value: target.value }))}
               />
               {errors.preview_img && <p style={{ color: 'var(--error-color)' }}>{errors.preview_img}</p>}
            </div>
         </div>
      </article>
   );
};

export default Additionally;
