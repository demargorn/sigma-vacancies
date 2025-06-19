import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import cn from 'classnames';
import { Breadcrumb } from '@heathmont/moon-core-tw';
import { GenericHome } from '@heathmont/moon-icons-tw';
import Vacancy from '@/shared/Vacancy/Vacancy';
import type { IVacancy } from '@/shared/Vacancy/Vacancy';
import styles from './Vacancies.module.css';

/** моковый список вакансий */
const some_vacancies: Array<IVacancy> = [
  { vacancy_name: 'Frontend-разработчик', customer_name: 'Авито', recruter: 'Михайлова Э.Г.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'активная', responses_qty: 5 },
  { vacancy_name: 'Backend-разработчик', customer_name: 'HeadHunter', recruter: 'Попова Н.С.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'на паузе', responses_qty: 15 },
  { vacancy_name: 'Python-разработчик', customer_name: 'Ozon', recruter: 'Константинова В.Б.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'закрыта', responses_qty: 10 },
  { vacancy_name: 'Product Manager', customer_name: 'X5 Group', recruter: 'Андреева А.А.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'черновик', responses_qty: 0 },
  { vacancy_name: 'Product Manager', customer_name: 'X5 Group', recruter: 'Андреева А.А.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'черновик', responses_qty: 0 },
  { vacancy_name: 'Product Manager', customer_name: 'X5 Group', recruter: 'Андреева А.А.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'черновик', responses_qty: 0 }
];

const Vacancies = () => {
  const [vacancies, setVacancies] = useState<Array<IVacancy>>([]); /** массив вакансий */
  const [activeCategory, setActiveCategory] = useState<string>(''); /** активная категория */

  const baseBreadcrumbs = [
    <Link to="/" aria-label="Home" key="Home">
      <GenericHome className="text-moon-24" />
    </Link>,
    <Link to={`/vacancies`} style={{ marginRight: '8px', marginLeft: '8px' }} key="Page 1">
      Найм сотрудников
    </Link>,
    <span key="Current" style={{ marginLeft: '8px' }}>
      Вакансии
    </span>
  ];

  /** функция активации нужной категории */
  const handleSetCategory = (category: string) => {
    setActiveCategory(category);
  };

  // const handleFilterCategory = (status: string) => {
  //   return vacancies.filter((v) => v.status === status);
  // };

  useEffect(() => {
    setVacancies(some_vacancies);
    setActiveCategory('Все вакансии');
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.breadcrumbs}>
          <Breadcrumb breadcrumbs={baseBreadcrumbs} />
        </div>

        <div className={styles.input_container}>
          <input type="text" placeholder="Поиск" className={styles.input} />
          <button className={styles.input_button}></button>
        </div>
      </div>

      <div className={styles.text_container}>
        <h1 className={styles.h1}>Вакансии</h1>
        <span className={styles.qty}>{vacancies.length}</span>
      </div>

      <div className={styles.tabs}>
        <ul className={styles.chips}>
          <li className={activeCategory === 'Все вакансии' ? cn(styles.chip, styles.chip_active) : styles.chip} onClick={() => handleSetCategory('Все вакансии')}>
            Все вакансии
          </li>
          <li className={activeCategory === 'Активные' ? cn(styles.chip, styles.chip_active) : styles.chip} onClick={() => handleSetCategory('Активные')}>
            Активные
          </li>
          <li className={activeCategory === 'На паузе' ? cn(styles.chip, styles.chip_active) : styles.chip} onClick={() => handleSetCategory('На паузе')}>
            На паузе
          </li>
          <li className={activeCategory === 'Закрытые' ? cn(styles.chip, styles.chip_active) : styles.chip} onClick={() => handleSetCategory('Закрытые')}>
            Закрытые
          </li>
          <li className={activeCategory === 'Черновики' ? cn(styles.chip, styles.chip_active) : styles.chip} onClick={() => handleSetCategory('Черновики')}>
            Черновики
          </li>
        </ul>
        <div className={styles.actions}>
          <button className={`${styles.action} ${styles.action_filter}`} title="сортировать"></button>
          <button className={`${styles.action} ${styles.action_2}`} title="фильтровать"></button>
          <button className={`${styles.action} ${styles.action_add}`} title="добавить вакансию"></button>
          <button className={`${styles.action} ${styles.action_settings}`} title="параметры"></button>
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
          {vacancies.map((v) => (
            <Vacancy
              vacancy_name={v.vacancy_name}
              customer_name={v.customer_name}
              recruter={v.recruter}
              created_date={v.created_date}
              deadline_date={v.deadline_date}
              status={v.status}
              responses_qty={v.responses_qty}
            />
          ))}

          {/* <Vacancy
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
          /> */}
        </article>
      </main>
    </section>
  );
};

export default Vacancies;
