import styles from './Vacancy.module.css';

interface IVacancyProps {
  vacancy_name: string;
  customer_name: string;
  recruter: string;
  created_date: string;
  deadline_date: string;
  status: string;
  responses_qty: number;
}

const Vacancy = ({ vacancy_name, customer_name, recruter, created_date, deadline_date, status, responses_qty }: IVacancyProps) => {
  let status_mode: string;

  const mode = function getStatus(): string {
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
    console.log(status_mode);
    return status_mode;
  };

  return (
    <div className={styles.vacancy}>
      <div className={styles.vacancy_title}>
        <input type="checkbox" className={styles.main_checkbox} />
        <div className={styles.vacancy_title__description}>
          <h5 className={styles.vacancy_title__name}>{vacancy_name}</h5>
          <p className={styles.vacancy_title__customer_name}>{customer_name}</p>
        </div>
      </div>

      <div className={styles.vacancy_recruter}>
        <span className={styles.vacancy_recruter__name}>{recruter}</span>
      </div>

      <div className={styles.vacancy_created}>
        <span className={styles.vacancy_created__date}>{created_date}</span>
      </div>
      <div className={styles.vacancy_deadline}>
        <span className={styles.vacancy_deadline__date}>{deadline_date}</span>
      </div>
      <div className={styles.vacancy_status}>
        <span className={`${styles.vacancy_status__default} ${mode()}`}>{status}</span>
      </div>
      <div className={styles.vacancy_responses}>
        <span className={styles.vacancy_responses__quantity}>{responses_qty}</span>
      </div>
      <button className={styles.vacancy_btn}>Перейти к откликам</button>
    </div>
  );
};

export default Vacancy;
