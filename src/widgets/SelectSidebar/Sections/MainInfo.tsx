import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import styles from './Sections.module.css';

/** Создание новой вакансии. Основная информация */

const MainInfo = () => {
  const { vacancy, handleFieldChange } = useVacancyForm();

  return (
    <article className={styles.container}>
      <h2 className={styles.heading} style={{ marginBottom: '32px' }}>
        Основная информация о вакансии
      </h2>

      <label className={styles.input_container}>
        <div className={styles.input_vacancy_name}>
          <div className={styles.input_label}>
            Название вакансии<span style={{ color: '#EA7F8B' }}>*</span>
          </div>
          <input type="text" name="vacancy_name" value={vacancy.vacancy_name} placeholder="Введите текст" className={styles.input_text} onChange={handleFieldChange} required/>
        </div>

        <div className={styles.input_vacancy_qty}>
          <div className={styles.input_label}>Количество мест</div>
          <input type="number" name="places_qty" value={vacancy.places_qty} min={1} className={styles.input_text} onChange={handleFieldChange} />
        </div>
      </label>

      <label className={styles.input_textarea_container}>
        <div className={styles.input_label}>Описание</div>
        <textarea
          name="vacancy_description"
          value={vacancy.vacancy_description}
          rows={4}
          placeholder="Вы можете подробно описать требования, условия и обязанности для будущего кандидата"
          className={styles.input_textarea}
          onChange={handleFieldChange}
        />
      </label>

      <label className={styles.select_status_container}>
        <div className={styles.input_label}>Статус вакансии</div>
        <select className={styles.select_status} name="status" value={vacancy.status} onChange={handleFieldChange}>
          <option value="активная" defaultChecked>
            Активная
          </option>
          <option value="черновик">Черновик</option>
          <option value="на паузе">На паузе</option>
          <option value="закрыта">Закрыта</option>
        </select>
      </label>

      <div className={styles.notice_container}>
        <p className={styles.notice_text}>
          Обратите внимание: вакансия будет опубликована на витрине вакансий только в статусе «Активная». Во всех остальных статусах вакансию можете просматривать и редактировать только вы.
        </p>
      </div>
    </article>
  );
};

export default MainInfo;
