import Vacancy from '@/shared/Vacancy/Vacancy';
import styles from './Hiring.module.css';

const Hiring = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div>
          <a href="" className={styles.breadcrumbs}>
            Home
          </a>{' '}
          --{'>'}
          <a href="" className={styles.breadcrumbs}>
            {' '}
            Найм сотрудников
          </a>{' '}
          --{'>'}
          <a href="" className={styles.breadcrumbs}>
            {' '}
            Вакансии
          </a>
        </div>
        <div className={styles.input_container}>
          <input type="text" placeholder="Поиск" className={styles.input} />
          <button className={styles.input_button}></button>
        </div>
      </div>

      <div className={styles.text_container}>
        <h1 className={styles.h1}>Вакансии</h1>
        <span className={styles.qty}>4</span>
      </div>

      <div className={styles.tabs}>
        <div className={styles.chips}>
          <button className={`${styles.chip} ${styles.chip_active}`}>Все вакансии</button>
          <button className={styles.chip}>Активные</button>
          <button className={styles.chip}>На паузе</button>
          <button className={styles.chip}>Закрытые</button>
          <button className={styles.chip}>Черновики</button>
        </div>
        <div className={styles.actions}>
          <button className={`${styles.action} ${styles.action_1}`}></button>
          <button className={`${styles.action} ${styles.action_2}`}></button>
          <button className={`${styles.action} ${styles.action_3}`}></button>
          <button className={`${styles.action} ${styles.action_4}`}></button>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.main_top}>
          <input type="checkbox" className={styles.main_checkbox} />
          <span className={`${styles.span} ${styles.owner}`}>Вакансия и заказчик</span>
          <span className={`${styles.span} ${styles.recruter}`}>Рекрутер</span>
          <span className={`${styles.span} ${styles.created}`}>Создана</span>
          <span className={`${styles.span} ${styles.deadline}`}>Дедлайн</span>
          <span className={`${styles.span} ${styles.status}`}>Статус</span>
          <span className={`${styles.span} ${styles.responses}`}>Отклики</span>
        </div>

        <article className={styles.vacancies_container}>
          <Vacancy
            vacancy_name="Название вакансии"
            customer_name="Заказчик (ФИО или название команды)"
            recruter="Константинова М.П."
            created_date="12.05.25"
            deadline_date="12.06.25"
            status="активная"
            responses_qty={3}
          />

          <Vacancy
            vacancy_name="Название вакансии"
            customer_name="Заказчик (ФИО или название команды)"
            recruter="Еремеева П.Р."
            created_date="16.12.25"
            deadline_date="16.01.26"
            status="на паузе"
            responses_qty={10}
          />

          <Vacancy
            vacancy_name="Название вакансии"
            customer_name="Заказчик (ФИО или название команды)"
            recruter="Попова Ж.О."
            created_date="16.09.25"
            deadline_date="16.10.26"
            status="закрыта"
            responses_qty={15}
          />

          <Vacancy
            vacancy_name="Название вакансии"
            customer_name="Заказчик (ФИО или название команды)"
            recruter="Михайлова Г.А."
            created_date="07.12.25"
            deadline_date="07.01.26"
            status="черновик"
            responses_qty={0}
          />
        </article>
      </main>
    </section>
  );
};

export default Hiring;
