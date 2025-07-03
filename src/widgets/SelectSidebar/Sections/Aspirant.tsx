import styles from './Sections.module.css';

const Aspirant = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Контакты для кандидата</h2>
      <p className={styles.description}>Эти контакты будут опубликованы на витрине вакансии. Они нужны для связи кандидата с компанией</p>

      <label className={styles.customer}>
        <div className={styles.input_label}>Контактное лицо</div>
        <input className={styles.input_text} type="text" placeholder="Название компании, команды или проекта, для которого открыта вакансия" />
      </label>

      <label className={styles.input_container}>
        <div className={styles.customer_tel}>
          <div className={styles.input_label}>Номер телефона</div>
          <input type="texе" placeholder="+7 (___) ___-__-__" className={styles.input_text} />
        </div>
        <div className={styles.customer_name}>
          <div className={styles.input_label}>Почта</div>
          <input type="text" placeholder="например, mail@mail.ru" className={styles.input_text} />
        </div>
      </label>

      <label className={styles.input_container}>
        <div className={styles.customer_telegam}>
          <div className={styles.input_label}>Telegram</div>
          <input type="texе" placeholder="@" className={styles.input_text} />
        </div>
        <div className={styles.customer_whatsapp}>
          <div className={styles.input_label}>WhatsApp</div>
          <input type="text" placeholder="Вставьте ссылку" className={styles.input_text} />
        </div>
      </label>
    </div>
  );
};

export default Aspirant;
