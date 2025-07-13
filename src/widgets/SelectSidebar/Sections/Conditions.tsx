import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import styles from './Sections.module.css';

/** Создание новой вакансии. Условия работы */

const Conditions = () => {
  const { vacancy, handleFieldChange } = useVacancyForm();

  return (
    <article className={styles.container}>
      <h2 className={styles.heading} style={{ marginBottom: '32px' }}>
        Условия работы
      </h2>

      <h4 className={styles.input_title}>О компании</h4>

      <label className={styles.input_container}>
        <div className={styles.country}>
          <div className={styles.input_label}>Страна</div>
          <input type="text" name="country" value={vacancy.country} placeholder="Россия" className={styles.input_text} onChange={handleFieldChange} />
        </div>
        <div className={styles.city}>
          <div className={styles.input_label}>Город</div>
          <input type="text" name="city" value={vacancy.city} placeholder="Введите город" className={styles.input_text} onChange={handleFieldChange} />
        </div>
      </label>

      <label className={styles.company}>
        <div className={styles.input_label}>Название компании</div>
        <input type="text" name="company_name" value={vacancy.company_name} placeholder="Введите название" className={styles.input_text} onChange={handleFieldChange} />
      </label>

      <h4 className={styles.input_title}>О должности</h4>

      <label className={styles.input_container}>
        <div className={styles.format}>
          <div className={styles.input_label}>Формат работы</div>
          <select name="format" value={vacancy.format} className={styles.select_status} onChange={handleFieldChange}>
            <option value="office" defaultChecked>
              Офис
            </option>
            <option value="hibrid">Гибрид</option>
            <option value="distance">Удаленный формат</option>
            <option value="look-out">Вахта</option>
          </select>
        </div>
        <div className={styles.employment}>
          <div className={styles.input_label}>Занятость</div>
          <select name="employment" value={vacancy.employment} className={styles.select_status} onChange={handleFieldChange}>
            <option value="full" defaultChecked>
              Полная
            </option>
            <option value="partial">Частичная</option>
            <option value="flexible">Гибкий график</option>
            <option value="project">Проектная</option>
          </select>
        </div>
      </label>

      <label className={styles.schedule}>
        <div className={styles.input_label}>График работы</div>
        <input type="text" name="schedule" value={vacancy.schedule} placeholder="Введите текст" className={styles.input_text} onChange={handleFieldChange} />
      </label>

      <h4 className={styles.input_title}>Заработная плата (в месяц)</h4>

      <label className={styles.input_container}>
        <div className={styles.salary}>
          <div className={styles.input_label}>от</div>
          <input type="number" name="salary_from" value={vacancy.salary_from} min={0} placeholder="0" className={styles.input_text} onChange={handleFieldChange} />
        </div>
        <div className={styles.salary}>
          <div className={styles.input_label}>до</div>
          <input type="number" name="salary_to" value={vacancy.salary_to} min={0} placeholder="все деньги мира" className={styles.input_text} onChange={handleFieldChange} />
        </div>
      </label>
    </article>
  );
};

export default Conditions;
