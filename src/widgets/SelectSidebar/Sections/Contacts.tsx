import { useDispatch, useSelector } from 'react-redux';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import styles from './Sections.module.css';

/** Создание новой вакансии. Контакты для кандидата*/

const Contacts = () => {
   const { vacancy, errors } = useSelector((state: TypeRootState) => state.vacancies);
   const dispatch = useDispatch<TypeDispatch>();

   return (
      <article className={styles.container}>
         <h2 className={styles.heading}>Контакты для кандидата</h2>
         <p className={styles.description}>Эти контакты будут опубликованы на витрине вакансии. Они нужны для связи кандидата с компанией</p>

         <div className={styles.customer}>
            <label htmlFor="recruiter_name" className={styles.input_label}>
               Контактное лицо
            </label>
            <select
               id="recruiter_name"
               name="recruiter_name"
               value={vacancy.recruiter_name}
               className={styles.select_status}
               onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'recruiter_name', value: target.value }))}
            >
               <option value="" defaultChecked hidden>
                  Выберите сотрудника из списка
               </option>
            </select>
         </div>

         <div className={styles.input_container}>
            <div className={styles.customer_tel}>
               <label htmlFor="recruiter_phone" className={styles.input_label}>
                  Номер телефона
               </label>
               <input
                  id="recruiter_phone"
                  type="tel"
                  name="recruiter_phone"
                  value={vacancy.recruiter_phone}
                  placeholder="+7 (___) ___-__-__"
                  title="введите номер телефона в формате +79991234567"
                  className={styles.input_text}
                  style={errors.recruiter_phone ? { border: '1px solid var(--error-color)' } : {}}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'recruiter_phone', value: target.value }))}
                  required
               />
               {errors.recruiter_phone && <p style={{ color: 'var(--error-color)' }}>{errors.recruiter_phone}</p>}
            </div>
            <div className={styles.customer_mail}>
               <label htmlFor="recruiter_email" className={styles.input_label}>
                  Почта
               </label>
               <input
                  id="recruiter_email"
                  type="text"
                  name="recruiter_email"
                  value={vacancy.recruiter_email}
                  placeholder="например, mail@mail.ru"
                  title="введите вашу электронную почту"
                  className={styles.input_text}
                  style={errors.recruiter_email ? { border: '1px solid var(--error-color)' } : {}}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'recruiter_email', value: target.value }))}
               />
               {errors.recruiter_email && <p style={{ color: 'var(--error-color)' }}>{errors.recruiter_email}</p>}
            </div>
         </div>

         <div className={styles.input_container}>
            <div className={styles.customer_telegram}>
               <label htmlFor="recruiter_tg" className={styles.input_label}>
                  Telegram
               </label>
               <input
                  id="recruiter_tg"
                  type="text"
                  name="recruiter_tg"
                  value={vacancy.recruiter_tg}
                  placeholder="@"
                  title="ник должен начинаться с @, содержать только латинские буквы, цифры или _, длиной от 5 до 32 символов"
                  className={styles.input_text}
                  style={errors.recruiter_tg ? { border: '1px solid var(--error-color)' } : {}}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'recruiter_tg', value: target.value }))}
               />
               {errors.recruiter_tg && <p style={{ color: 'var(--error-color)' }}>{errors.recruiter_tg}</p>}
            </div>
            <div className={styles.customer_whatsapp}>
               <label htmlFor="recruiter_wa" className={styles.input_label}>
                  What's app
               </label>
               <input
                  id="recruiter_wa"
                  type="text"
                  name="recruiter_wa"
                  value={vacancy.recruiter_wa}
                  placeholder="Введите URL"
                  className={styles.input_text}
                  style={errors.recruiter_wa ? { border: '1px solid var(--error-color)' } : {}}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'recruiter_wa', value: target.value }))}
               />
               {errors.recruiter_wa && <p style={{ color: 'var(--error-color)' }}>{errors.recruiter_wa}</p>}
            </div>
         </div>
      </article>
   );
};

export default Contacts;
