import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import styles from './Sections.module.css';

/** Создание новой вакансии. Организационная информация */

const OrganizationalInfo = () => {
  const { vacancy, handleFieldChange } = useVacancyForm(); /** вакансия */

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Организационная информация</h2>
      <p className={styles.description}>Эта информация только для внутреннего пользования. Она не будет опубликована на витрине вакансий</p>

      <label className={styles.input_container}>
        <div className={styles.salary}>
          <div className={styles.input_label}>Дата открытия вакансии</div>
          <input type="date" name="opened_date" value={vacancy.opened_date} placeholder="дд.мм.гггг" className={styles.input_text} onChange={handleFieldChange} />
        </div>
        <div className={styles.salary}>
          <div className={styles.input_label}>Дата закрытия вакансии</div>
          <input type="date" name="closed_date" value={vacancy.closed_date} placeholder="дд.мм.гггг" className={styles.input_text} onChange={handleFieldChange} />
        </div>
      </label>

      <label className={styles.schedule}>
        <div className={styles.input_label}>Бюджет на вакансию (до)</div>
        <input type="number" name="budget" value={vacancy.budget} placeholder="0" className={styles.input_text} onChange={handleFieldChange} />
      </label>

      <label className={styles.schedule}>
        <div className={styles.input_label}>Ответственный</div>
        <select name="responsible" className={styles.select_status} onChange={handleFieldChange}>
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
