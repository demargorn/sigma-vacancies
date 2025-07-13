import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import styles from './Sections.module.css';

/** Создание новой вакансии. Контакты для кандидата*/

const Contacts = () => {
  const { vacancy, handleFieldChange } = useVacancyForm();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Контакты для кандидата</h2>
      <p className={styles.description}>Эти контакты будут опубликованы на витрине вакансии. Они нужны для связи кандидата с компанией</p>

      <label className={styles.customer}>
        <div className={styles.input_label}>Контактное лицо</div>
        <input
          type="text"
          name="customer_name"
          value={vacancy.customer_name}
          placeholder="Название компании, команды или проекта, для которого открыта вакансия"
          className={styles.input_text}
          onChange={handleFieldChange}
        />
      </label>

      <label className={styles.input_container}>
        <div className={styles.customer_tel}>
          <div className={styles.input_label}>Номер телефона</div>
          <input type="tel" name="customer_tel" value={vacancy.customer_tel} placeholder="+7 (___) ___-__-__" className={styles.input_text} onChange={handleFieldChange} />
        </div>
        <div className={styles.customer_mail}>
          <div className={styles.input_label}>Почта</div>
          <input type="text" name="customer_mail" value={vacancy.customer_mail} placeholder="например, mail@mail.ru" className={styles.input_text} onChange={handleFieldChange} />
        </div>
      </label>

      <label className={styles.input_container}>
        <div className={styles.customer_telegram}>
          <div className={styles.input_label}>Telegram</div>
          <input type="text" name="customer_telegram" value={vacancy.customer_telegram} placeholder="@" className={styles.input_text} onChange={handleFieldChange} />
        </div>
        <div className={styles.customer_whatsapp}>
          <div className={styles.input_label}>WhatsApp</div>
          <input type="text" name="customer_whatsapp" value={vacancy.customer_whatsapp} placeholder="Вставьте ссылку" className={styles.input_text} onChange={handleFieldChange} />
        </div>
      </label>
    </div>
  );
};

export default Contacts;
