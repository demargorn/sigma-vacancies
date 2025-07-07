import { useState, type ChangeEvent } from 'react';
import styles from './Sections.module.css';

/** Создание новой вакансии. Организационная информация */

type TypeFormData = {
  opened_date: Date;
  closed_date: Date;
  budget: number;
  responsible: string;
};

const OrganizationalInfo = () => {
  const [formData, setFormData] = useState<TypeFormData>({
    opened_date: new Date(),
    closed_date: new Date(),
    budget: 0,
    responsible: ''
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
      <h2 className={styles.heading}>Организационная информация</h2>
      <p className={styles.description}>Эта информация только для внутреннего пользования. Она не будет опубликована на витрине вакансий</p>

      <label className={styles.input_container}>
        <div className={styles.salary}>
          <div className={styles.input_label}>Дата открытия вакансии</div>
          <input type="date" name="opened_date" placeholder="дд.мм.гггг" className={styles.input_text} onChange={handleInputChange} />
        </div>
        <div className={styles.salary}>
          <div className={styles.input_label}>Дата закрытия вакансии</div>
          <input type="date" name="closed_date" placeholder="дд.мм.гггг" className={styles.input_text} onChange={handleInputChange} />
        </div>
      </label>

      <label className={styles.schedule}>
        <div className={styles.input_label}>Бюджет на вакансию (до)</div>
        <input type="number" name="budget" placeholder="0" className={styles.input_text} onChange={handleInputChange} />
      </label>

      <label className={styles.schedule}>
        <div className={styles.input_label}>Ответственный</div>
        <select name="responsible" className={styles.select_status} onChange={handleInputChange}>
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
