import styles from './Sections.module.css';

const MainInfo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Основная информация о вакансии</h2>

      <label className={styles.input_container}>
        <div className={styles.input_vacancy_name}>
          <div className={styles.input_label}>
            Название вакансии<span style={{ color: '#EA7F8B' }}>*</span>
          </div>
          <input type="text" placeholder="Введите текст" className={styles.input_text} />
        </div>

        <div className={styles.input_vacancy_qty}>
          <div className={styles.input_label}>Количество мест</div>
          <input type="number" defaultValue={1} min={1} className={styles.input_text} />
        </div>
      </label>

      <label className={styles.input_textarea_container}>
        <div className={styles.input_label}>Описание</div>
        <textarea rows={4} placeholder="Вы можете подробно описать требования, условия и обязанности для будущего кандидата" className={styles.input_textarea} />
      </label>

      <label className={styles.select_status_container}>
        <div className={styles.input_label}>Статус вакансии</div>
        <select className={styles.select_status}>
          <option value="active" defaultChecked>
            Активная
          </option>
          <option value="draft">Черновик</option>
          <option value="paused">На паузе</option>
          <option value="closed">Закрыта</option>
        </select>
      </label>

      <div className={styles.notice_container}>
        <p className={styles.notice_text}>
          Обратите внимание: вакансия будет опубликована на витрине вакансий только в статусе «Активная». Во всех остальных статусах вакансию можете просматривать и редактировать только вы.
        </p>
      </div>
    </div>
  );
};

export default MainInfo;
