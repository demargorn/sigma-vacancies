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
  { id: 1, vacancy_name: 'Frontend-разработчик', customer_name: 'Авито', recruter: 'Михайлова Э.Г.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'активная', responses_qty: 235 },
  { id: 2, vacancy_name: 'Backend-разработчик', customer_name: 'HeadHunter', recruter: 'Попова Н.С.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'на паузе', responses_qty: 115 },
  { id: 3, vacancy_name: 'Python-разработчик', customer_name: 'Ozon', recruter: 'Константинова В.Б.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'закрыта', responses_qty: 10 },
  { id: 4, vacancy_name: 'Product Manager', customer_name: 'X5 Group', recruter: 'Андреева А.А.', created_date: '10.05.25', deadline_date: '10.06.25', status: 'черновик', responses_qty: 0 },
  { id: 5, vacancy_name: 'HR Manager', customer_name: 'Рога И Копыта', recruter: 'Рожкина И.В.', created_date: '10.12.25', deadline_date: '10.01.26', status: 'на паузе', responses_qty: 15 }
];

const Vacancies = () => {
  const [vacancies, setVacancies] = useState<Array<IVacancy>>([]); /** массив вакансий */
  const [activeCategory, setActiveCategory] = useState<string>(''); /** активная категория */

  const baseBreadcrumbs = [
    <Link to="/" aria-label="Home" key="Home">
      <GenericHome className="text-moon-24" />
    </Link>,
    <Link to={`/vacancies`} style={{ marginLeft: '8px' }} key="Page 1">
      Найм сотрудников
    </Link>,
    <span key="Current" style={{ marginLeft: '8px' }}>
      Вакансии
    </span>
  ];

  /** функция активации нужной категории */
  const handleSetCategory = (category: string) => setActiveCategory(category);

  /** функция фильтрации нужных вакансий */
  const handleFilterCategory = (activeCategory: string) => {
    switch (activeCategory) {
      case 'Все вакансии':
        return vacancies;
      case 'Активные':
        return vacancies.filter((v) => v.status === 'активная');
      case 'На паузе':
        return vacancies.filter((v) => v.status === 'на паузе');
      case 'Закрытые':
        return vacancies.filter((v) => v.status === 'закрыта');
      case 'Черновики':
        return vacancies.filter((v) => v.status === 'черновик');
      default:
        return vacancies;
    }
  };

  /** создаем массив отфильтрованных вакансий */
  const visibleVacancies = handleFilterCategory(activeCategory);

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
          <li
            className={activeCategory === 'На паузе' ? cn(styles.chip, styles.chip_active) : styles.chip}
            onClick={() => {
              handleSetCategory('На паузе');
              handleFilterCategory('на паузе');
            }}
          >
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
          <button className={`${styles.action} ${styles.action_sort}`} title="сортировать"></button>
          <button className={`${styles.action} ${styles.action_filter}`} title="фильтровать"></button>
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
          {vacancies.length > 0 &&
            visibleVacancies.map((v) => (
              <Vacancy
                key={v.id}
                vacancy_name={v.vacancy_name}
                customer_name={v.customer_name}
                recruter={v.recruter}
                created_date={v.created_date}
                deadline_date={v.deadline_date}
                status={v.status}
                responses_qty={v.responses_qty}
              />
            ))}
        </article>
      </main>

      {visibleVacancies.length >= 5 && (
        <footer className={styles.footer}>
          <button className={styles.previous_page}>
            <img src="imgs/vacancies/chevron-left.svg" alt="previous page" />
          </button>
          <div className={styles.pages}>
            <button className={cn(styles.page_number, styles.page_number__active)}>1</button>
            <button className={cn(styles.page_number, styles.page_2)}>2</button>
            <button className={cn(styles.page_number, styles.page_3)}>3</button>
          </div>
          <button className={styles.next_page}>
            <img src="imgs/vacancies/chevron-right.svg" alt="next page" />
          </button>
        </footer>
      )}
    </section>
  );
};

export default Vacancies;
