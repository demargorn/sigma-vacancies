import styles from './Sections.module.css';

const CustomerInfo = () => {
  return (
    <article className={styles.container}>
      <h2 className={styles.heading}>Информация о заказчике</h2>
      <p className={styles.description}>Эта информация только для внутреннего пользования. Она не будет опубликована на витрине вакансий</p>

      <label className={styles.customer}>
        <div className={styles.input_label}>Заказчик</div>
        <input className={styles.input_text} type="text" placeholder="Название компании, команды или проекта, для которого открыта вакансия" />
      </label>

      <h4 className={styles.input_title}>Контакты заказчика</h4>

      <label className={styles.input_container}>
        <div className={styles.customer_name}>
          <div className={styles.input_label}>Контактное лицо</div>
          <input type="text" placeholder="Введите имя" className={styles.input_text} />
        </div>
        <div className={styles.customer_tel}>
          <div className={styles.input_label}>Номер телефона</div>
          <input type="texе" placeholder="+7 (___) ___-__-__" className={styles.input_text} />
        </div>
      </label>

      <label className={styles.input_container}>
        <div className={styles.customer_name}>
          <div className={styles.input_label}>Почта</div>
          <input type="text" placeholder="например, mail@mail.ru" className={styles.input_text} />
        </div>
        <div className={styles.customer_tel}>
          <div className={styles.input_label}>Telegram</div>
          <input type="texе" placeholder="@" className={styles.input_text} />
        </div>
      </label>
    </article>
  );
};

export default CustomerInfo;
