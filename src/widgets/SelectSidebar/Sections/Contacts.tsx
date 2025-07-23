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
            <label htmlFor="customer_contact_person" className={styles.input_label}>
               Контактное лицо
            </label>
            <select
               id="customer_contact_person"
               name="customer_contact_person"
               value={vacancy.customer_contact_person}
               className={styles.select_status}
               onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'customer_contact_person', value: target.value }))}
            >
               <option value="" defaultChecked hidden>
                  Выберите сотрудника из списка
               </option>
            </select>
         </div>

         <div className={styles.input_container}>
            <div className={styles.customer_tel}>
               <label htmlFor="customer_tel" className={styles.input_label}>
                  Номер телефона
               </label>
               <input
                  id="customer_tel"
                  type="tel"
                  name="customer_tel"
                  value={vacancy.customer_tel}
                  placeholder="+7 (___) ___-__-__"
                  title="введите номер телефона в формате +79991234567"
                  className={styles.input_text}
                  style={errors.customer_tel ? { border: '1px solid var(--error-color)' } : {}}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'customer_tel', value: target.value }))}
                  required
               />
               {errors.customer_tel && <p style={{ color: 'var(--error-color)' }}>{errors.customer_tel}</p>}
            </div>
            <div className={styles.customer_mail}>
               <label htmlFor="customer_mail" className={styles.input_label}>
                  Почта
               </label>
               <input
                  id="customer_mail"
                  type="text"
                  name="customer_mail"
                  value={vacancy.customer_mail}
                  placeholder="например, mail@mail.ru"
                  title="введите вашу электронную почту"
                  className={styles.input_text}
                  style={errors.customer_mail ? { border: '1px solid var(--error-color)' } : {}}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'customer_mail', value: target.value }))}
               />
               {errors.customer_mail && <p style={{ color: 'var(--error-color)' }}>{errors.customer_mail}</p>}
            </div>
         </div>

         <div className={styles.input_container}>
            <div className={styles.customer_telegram}>
               <label htmlFor="customer_telegram" className={styles.input_label}>
                  Telegram
               </label>
               <input
                  id="customer_telegram"
                  type="text"
                  name="customer_telegram"
                  value={vacancy.customer_telegram}
                  placeholder="@"
                  title="ник должен начинаться с @, содержать только латинские буквы, цифры или _, длиной от 5 до 32 символов"
                  className={styles.input_text}
                  style={errors.customer_telegram ? { border: '1px solid var(--error-color)' } : {}}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'customer_telegram', value: target.value }))}
               />
               {errors.customer_telegram && <p style={{ color: 'var(--error-color)' }}>{errors.customer_telegram}</p>}
            </div>
            <div className={styles.customer_whatsapp}>
               <label htmlFor="customer_whatsapp" className={styles.input_label}>
                  What's app
               </label>
               <input
                  id="customer_whatsapp"
                  type="text"
                  name="customer_whatsapp"
                  value={vacancy.customer_whatsapp}
                  placeholder="Введите URL"
                  className={styles.input_text}
                  style={errors.customer_whatsapp ? { border: '1px solid var(--error-color)' } : {}}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'customer_whatsapp', value: target.value }))}
               />
               {errors.customer_whatsapp && <p style={{ color: 'var(--error-color)' }}>{errors.customer_whatsapp}</p>}
            </div>
         </div>
      </article>
   );
};

export default Contacts;
