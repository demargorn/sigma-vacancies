import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import styles from './Sections.module.css';

/** Создание новой вакансии. Контакты для кандидата*/

const Contacts = () => {
   const { vacancy, handleFieldChange } = useVacancyForm();

   return (
      <article className={styles.container}>
         <h2 className={styles.heading}>Контакты для кандидата</h2>
         <p className={styles.description}>Эти контакты будут опубликованы на витрине вакансии. Они нужны для связи кандидата с компанией</p>

         <div className={styles.customer}>
            <label htmlFor="customer_name" className={styles.input_label}>
               Контактное лицо
            </label>
            <input
               id="customer_name"
               type="text"
               name="customer_name"
               value={vacancy.customer_name}
               placeholder="Название компании, команды или проекта, для которого открыта вакансия"
               className={styles.input_text}
               onChange={handleFieldChange}
            />
         </div>

         <div className={styles.input_container}>
            <div className={styles.customer_tel}>
               <label htmlFor="customer_tel" className={styles.input_label}>
                  Номер телефона
               </label>
               <input id="customer_tel" type="tel" name="customer_tel" value={vacancy.customer_tel} placeholder="+7 (___) ___-__-__" className={styles.input_text} onChange={handleFieldChange} />
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
                  className={styles.input_text}
                  onChange={handleFieldChange}
               />
            </div>
         </div>

         <div className={styles.input_container}>
            <div className={styles.customer_telegram}>
               <label htmlFor="customer_telegram" className={styles.input_label}>
                  Telegram
               </label>
               <input id="customer_telegram" type="text" name="customer_telegram" value={vacancy.customer_telegram} placeholder="@" className={styles.input_text} onChange={handleFieldChange} />
            </div>
            <div className={styles.customer_whatsapp}>
               <label htmlFor="customer_whatsapp" className={styles.input_label}>
                  WhatsApp
               </label>
               <input
                  id="customer_whatsapp"
                  type="text"
                  name="customer_whatsapp"
                  value={vacancy.customer_whatsapp}
                  placeholder="Вставьте ссылку"
                  className={styles.input_text}
                  onChange={handleFieldChange}
               />
            </div>
         </div>
      </article>
   );
};

export default Contacts;
