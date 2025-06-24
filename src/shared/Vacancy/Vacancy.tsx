import cn from 'classnames';
import styles from './Vacancy.module.css';

export interface IVacancy {
  id?: number;
  vacancy_name: string;
  customer_name: string;
  recruter: string;
  created_date: string;
  deadline_date: string;
  status: 'активная' | 'на паузе' | 'черновик' | 'закрыта';
  responses_qty: number;
}

const Vacancy = ({ vacancy_name, customer_name, recruter, created_date, deadline_date, status, responses_qty }: IVacancy) => {
  let status_mode: string;

  /** функция выбора статуса вакансии */
  const style_mode = function getStatus(): string {
    switch (status) {
      case 'активная':
        status_mode = `${styles.vacancy_status__active}`;
        break;
      case 'на паузе':
        status_mode = `${styles.vacancy_status__paused}`;
        break;
      case 'черновик':
        status_mode = `${styles.vacancy_status__draft}`;
        break;
      case 'закрыта':
        status_mode = `${styles.vacancy_status__closed}`;
        break;
    }

    return status_mode;
  };

  return (
    <div className={styles.vacancy}>
      <div className={styles.vacancy_title}>
        <input type="checkbox" className={styles.vacancy_checkbox} />
        <div className={styles.vacancy_title__description}>
          <h5 className={styles.vacancy_title__name}>{vacancy_name}</h5>
          <p className={styles.vacancy_title__customer_name}>{customer_name}</p>
        </div>
      </div>
      <div className={styles.vacancy_recruter}>
        <span className={styles.vacancy_recruter__name}>{recruter}</span>
      </div>
      <div className={styles.vacancy_created}>
        <span className={styles.vacancy_created__date} title="дата создания">
          {created_date}
        </span>
      </div>
      <div className={styles.vacancy_deadline}>
        <span className={styles.vacancy_deadline__date} title="дата окончания">
          {deadline_date}
        </span>
      </div>
      <div className={styles.vacancy_status}>
        <span className={`${styles.vacancy_status__default} ${style_mode()}`}>{status}</span>
      </div>
      <div className={styles.vacancy_responses}>
        <span className={styles.vacancy_responses__quantity}>{responses_qty}</span>
      </div>

      <div className={styles.vacancy_buttons}>
        <button className={styles.vacancy_edit_btn} title="редактировать"></button>
        {responses_qty === 0 ? (
          <button className={cn(styles.vacancy_main_btn, styles.vacancy_main_btn__disabled)} disabled>
            Перейти к откликам
          </button>
        ) : (
          <button className={styles.vacancy_main_btn}>Перейти к откликам</button>
        )}
      </div>
    </div>
  );
};

export default Vacancy;
