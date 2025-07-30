import { useDispatch, useSelector } from 'react-redux';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import styles from './Sections.module.css';

/** Создание новой вакансии. Заказчик */

const CustomerInfo = () => {
   const { vacancy, errors } = useSelector((state: TypeRootState) => state.vacancies);
   const dispatch = useDispatch<TypeDispatch>();

   return (
      <article className={styles.container}>
         <h2 className={styles.heading}>Информация о заказчике</h2>
         <p className={styles.description}>Эта информация только для внутреннего пользования. Она не будет опубликована на витрине вакансий</p>

         <div className={styles.customer}>
            <label htmlFor="teams" className={styles.input_label}>
               Заказчик
            </label>
            <select
               id="teams"
               name="teams"
               value={vacancy.teams}
               className={styles.select_status}
               onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'teams', value: target.value }))}
            >
               <option value="" defaultChecked hidden>
                  Выберите
               </option>
            </select>
         </div>

         <h4 className={styles.input_title}>Контакты заказчика</h4>

         <div className={styles.input_container}>
            <div className={styles.customer_name}>
               <label htmlFor="contact_person_name" className={styles.input_label}>
                  Контактное лицо
               </label>
               <select
                  id="contact_person_name"
                  name="contact_person_name"
                  value={vacancy.contact_person_name}
                  title="выберите сотрудника из списка"
                  className={styles.select_status}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'contact_person_name', value: target.value }))}
               >
                  <option value="" defaultChecked hidden>
                     Выберите сотрудника из списка
                  </option>
               </select>
            </div>
            <div className={styles.customer_tel}>
               <label htmlFor="contact_person_phone" className={styles.input_label}>
                  Номер телефона
               </label>
               <input
                  id="contact_person_phone"
                  type="tel"
                  name="contact_person_phone"
                  value={vacancy.contact_person_phone}
                  placeholder="+7 (___) ___-__-__"
                  title="введите номер телефона в формате +79991234567"
                  className={styles.input_text}
                  style={errors.contact_person_phone ? { border: '1px solid var(--error-color)' } : {}}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'contact_person_phone', value: target.value }))}
               />
               {errors.contact_person_phone && <p style={{ color: 'var(--error-color)' }}>{errors.contact_person_phone}</p>}
            </div>
         </div>

         <div className={styles.input_container}>
            <div className={styles.customer_name}>
               <label htmlFor="contact_person_email" className={styles.input_label}>
                  Почта
               </label>
               <input
                  id="contact_person_email"
                  type="text"
                  name="contact_person_email"
                  value={vacancy.contact_person_email}
                  placeholder="например, mail@mail.ru"
                  title="введите вашу электронную почту"
                  className={styles.input_text}
                  style={errors.contact_person_email ? { border: '1px solid var(--error-color)' } : {}}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'contact_person_email', value: target.value }))}
               />
               {errors.contact_person_email && <p style={{ color: 'var(--error-color)' }}>{errors.contact_person_email}</p>}
            </div>
            <div className={styles.customer_telegram}>
               <label htmlFor="contact_person_tg" className={styles.input_label}>
                  Telegram
               </label>
               <input
                  id="contact_person_tg"
                  type="text"
                  name="contact_person_tg"
                  value={vacancy.contact_person_tg}
                  placeholder="@"
                  title="ник должен начинаться с @, содержать только латинские буквы, цифры или _, длиной от 5 до 32 символов"
                  className={styles.input_text}
                  style={errors.contact_person_tg ? { border: '1px solid var(--error-color)' } : {}}
                  onChange={({ target }) => dispatch(vacanciesActions.updateField({ field: 'contact_person_tg', value: target.value }))}
               />
               {errors.contact_person_tg && <p style={{ color: 'var(--error-color)' }}>{errors.contact_person_tg}</p>}
            </div>
         </div>
      </article>
   );
};

export default CustomerInfo;
