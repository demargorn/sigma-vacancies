import styles from './Sections.module.css';

const Conditions = () => {
  return (
    <article className={styles.container}>
      <h2 className={styles.heading} style={{ marginBottom: '32px' }}>
        Условия работы
      </h2>

      <h4 className={styles.input_title}>О компании</h4>

      <label className={styles.input_container}>
        <div className={styles.country}>
          <div className={styles.input_label}>Страна</div>
          <input type="text" placeholder="Россия" className={styles.input_text} />
        </div>
        <div className={styles.city}>
          <div className={styles.input_label}>Город</div>
          <input type="text" placeholder="Введите город" className={styles.input_text} />
        </div>
      </label>

      <label className={styles.company}>
        <div className={styles.input_label}>Название компании</div>
        <input type="text" placeholder="Введите название" className={styles.input_text} />
      </label>

      <h4 className={styles.input_title}>О должности</h4>

      <label className={styles.input_container}>
        <div className={styles.format}>
          <div className={styles.input_label}>Формат работы</div>
          <select className={styles.select_status}>
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
          <select className={styles.select_status}>
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
        <input type="text" placeholder="Введите текст" className={styles.input_text} />
      </label>

      <h4 className={styles.input_title}>Заработная плата (в месяц)</h4>

      <label className={styles.input_container}>
        <div className={styles.salary}>
          <div className={styles.input_label}>от</div>
          <input type="number" placeholder="0" className={styles.input_text} />
        </div>
        <div className={styles.salary}>
          <div className={styles.input_label}>до</div>
          <input type="number" placeholder="все деньги мира" className={styles.input_text} />
        </div>
      </label>
    </article>
  );
};

export default Conditions;
