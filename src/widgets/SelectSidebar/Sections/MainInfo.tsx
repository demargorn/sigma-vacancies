import { type ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import type { TypeStatus } from '@/types/status.type';
import styles from './Sections.module.css';

/** Создание новой вакансии. Основная информация */

const MainInfo = () => {
  const vacancy = useSelector((s: TypeRootState) => s.vacancies.vacancy); /** вакансия */
  const dispatch = useDispatch<TypeDispatch>();

  const handleVacancyNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancyName(target.value));
  };

  const handleVacancyPlacesChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancyPlaces(Number(target.value)));
  };

  const handleVacancyDescriptionChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(vacanciesActions.addVacancyDescription(target.value));
  };

  const handleVacancyStatusChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    dispatch(vacanciesActions.addVacancyStatus(target.value as TypeStatus));
  };

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
          <input type="text" name="vacancy_name" value={vacancy.vacancy_name} placeholder="Введите текст" className={styles.input_text} onChange={handleVacancyNameChange} />
        </div>

        <div className={styles.input_vacancy_qty}>
          <div className={styles.input_label}>Количество мест</div>
          <input type="number" name="places_qty" value={vacancy.places_qty} min={1} className={styles.input_text} onChange={handleVacancyPlacesChange} />
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
          onChange={handleVacancyDescriptionChange}
        />
      </label>

      <label className={styles.select_status_container}>
        <div className={styles.input_label}>Статус вакансии</div>
        <select className={styles.select_status} name="status_select" value={vacancy.status} onChange={handleVacancyStatusChange}>
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
    </article>
  );
};

export default MainInfo;
