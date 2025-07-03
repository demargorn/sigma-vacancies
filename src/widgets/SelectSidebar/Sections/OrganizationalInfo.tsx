import styles from './Sections.module.css';

const OrganizationalInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Организационная информация</h2>
      <p className={styles.description}>Эта информация только для внутреннего пользования. Она не будет опубликована на витрине вакансий</p>

      <label className={styles.input_container}>
        <div className={styles.salary}>
          <div className={styles.input_label}>Дата открытия вакансии</div>
          <input type="date" placeholder="дд.мм.гггг" className={styles.input_text} />
        </div>
        <div className={styles.salary}>
          <div className={styles.input_label}>Дата закрытия вакансии</div>
          <input type="date" placeholder="дд.мм.гггг" className={styles.input_text} />
        </div>
      </label>

      <label className={styles.schedule}>
        <div className={styles.input_label}>Бюджет на вакансию (до)</div>
        <input type="number" placeholder="0" className={styles.input_text} />
      </label>

      <label className={styles.schedule}>
        <div className={styles.input_label}>Ответственный</div>
        <select className={styles.select_status}>
          <option value="hr" defaultChecked>
            HR - Ермолина Е.В.
          </option>
          <option value="teamlead">TeamLead - Львов А.Н.</option>
        </select>
      </label>
    </div>
  );
};

export default OrganizationalInfo;
