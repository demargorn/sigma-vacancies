import { useState, type ChangeEvent } from 'react';
import styles from './Sections.module.css';

/** Создание новой вакансии. Контакты */

type TypeFormData = {
  customer_name: string;
  customer_tel: string;
  customer_mail: string;
  customer_telegram: string;
  customer_whatsapp: string;
};

const Contacts = () => {
  const [formData, setFormData] = useState<TypeFormData>({
    customer_name: '',
    customer_tel: '',
    customer_mail: '',
    customer_telegram: '',
    customer_whatsapp: ''
  });

  /** универсальная функция-обработчик input */
  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Контакты для кандидата</h2>
      <p className={styles.description}>Эти контакты будут опубликованы на витрине вакансии. Они нужны для связи кандидата с компанией</p>

      <label className={styles.customer}>
        <div className={styles.input_label}>Контактное лицо</div>
        <input className={styles.input_text} type="text" name="customer_name" placeholder="Название компании, команды или проекта, для которого открыта вакансия" onChange={handleInputChange} />
      </label>

      <label className={styles.input_container}>
        <div className={styles.customer_tel}>
          <div className={styles.input_label}>Номер телефона</div>
          <input type="tel" name="customer_tel" placeholder="+7 (___) ___-__-__" className={styles.input_text} onChange={handleInputChange} />
        </div>
        <div className={styles.customer_mail}>
          <div className={styles.input_label}>Почта</div>
          <input type="text" name="customer_mail" placeholder="например, mail@mail.ru" className={styles.input_text} onChange={handleInputChange} />
        </div>
      </label>

      <label className={styles.input_container}>
        <div className={styles.customer_telegram}>
          <div className={styles.input_label}>Telegram</div>
          <input type="text" name="customer_telegram" placeholder="@" className={styles.input_text} onChange={handleInputChange} />
        </div>
        <div className={styles.customer_whatsapp}>
          <div className={styles.input_label}>WhatsApp</div>
          <input type="text" name="customer_whatsapp" placeholder="Вставьте ссылку" className={styles.input_text} onChange={handleInputChange} />
        </div>
      </label>
    </div>
  );
};

export default Contacts;
