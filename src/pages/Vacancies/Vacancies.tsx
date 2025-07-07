import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import cn from 'classnames';
import { Breadcrumb } from '@heathmont/moon-core-tw';
import { GenericHome } from '@heathmont/moon-icons-tw';
import Vacancy from '@/widgets/Vacancy/Vacancy';
import type { TypeRootState } from '@/app/store/store';
import styles from './Vacancies.module.css';

const Vacancies = () => {
  const vacancies = useSelector((s: TypeRootState) => s.vacancies.items); /** массив вакансий */
  const vacancy = useSelector((s: TypeRootState) => s.vacancies.vacancy); /** вакансия */
  const [activeCategory, setActiveCategory] = useState<string>(''); /** активная категория */
  const [checkedStates, setCheckedStates] = useState<Array<boolean>>(() => vacancies.map(() => false)); /** состояние дочерних чекбоксов */

  const navigate = useNavigate();

  const parentRef = useRef<HTMLInputElement>(null); /** реф на главный чекбокс */
  const allChecked = checkedStates.every(Boolean); /** какие-то выбраны */
  const someChecked = checkedStates.some(Boolean); /** все выбраны */

  const breadcrumbs = [
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

  /** функция контроля главного чекбокса */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setCheckedStates(vacancies.map(() => checked));
  };

  /** функция контроля дочерних чекбоксов */
  const handleVacancyCheckboxChange = (index: number, checked: boolean) => {
    setCheckedStates((prev) => prev.map((val, i) => (i === index ? checked : val)));
  };

  /** создаем массив отфильтрованных вакансий */
  const visibleVacancies = handleFilterCategory(activeCategory);

  useEffect(() => {
    if (parentRef.current) {
      parentRef.current.indeterminate = !allChecked && someChecked;
    }
  }, [allChecked, someChecked]);

  useEffect(() => {
    setActiveCategory('Все вакансии');
  }, []);

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.breadcrumbs}>
          <Breadcrumb breadcrumbs={breadcrumbs} />
        </div>

        <div className={styles.input_container}>
          <input type="text" placeholder="Поиск" className={styles.input} />
          <button className={styles.input_button}></button>
        </div>
      </header>

      <div className={styles.text_container}>
        <h1 className={styles.h1}>Вакансии</h1>
        <span className={styles.qty}>{vacancies.length}</span>
      </div>

      <div className={styles.tabs}>
        <ul className={styles.chips}>
          {vacancies.length === 0 ? (
            <>
              <li className={cn(styles.chip, styles.chip_active, styles.chip_disable)}>Все вакансии</li>
              <li className={cn(styles.chip, styles.chip_disable)}>Активные</li>
              <li className={cn(styles.chip, styles.chip_disable)}>На паузе</li>
              <li className={cn(styles.chip, styles.chip_disable)}>Закрытые</li>
              <li className={cn(styles.chip, styles.chip_disable)}>Черновики</li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>

        <div className={styles.actions}>
          <button className={cn(styles.action, styles.action_add)} title="создать новую вакансию" onClick={() => navigate('/vacancies/create')}>
            Создать вакансию
          </button>
          <button className={cn(styles.action, styles.action_sort)} title="сортировать вакансии"></button>
          <button className={cn(styles.action, styles.action_filter)} title="фильтровать вакансии"></button>
          <button className={cn(styles.action, styles.action_settings)} title="параметры"></button>
        </div>
      </div>

      <table className={styles.main}>
        {vacancies.length > 0 ? (
          // <ul className={styles.main_top}>
          //   <li className={styles.owner}>
          //     <input type="checkbox" className={styles.main_checkbox} checked={allChecked} onChange={handleChange} />
          //     <p className={styles.owner_title}>Вакансия и заказчик</p>
          //   </li>
          //   <li className={styles.recruter}>Рекрутер</li>
          //   <li className={styles.created}>Создана</li>
          //   <li className={styles.deadline}>Дедлайн</li>
          //   <li className={styles.status}>Статус</li>
          //   <li className={styles.responses}>Отклики</li>
          // </ul>

          <thead className={styles.main_top}>
            <tr>
              <th scope="col" className={styles.owner}>
                <input type="checkbox" className={styles.main_checkbox} checked={allChecked} onChange={handleChange} />
                <p className={styles.owner_title}>Вакансия и заказчик</p>
              </th>
              <th scope="col" className={styles.recruter}>
                Рекрутер
              </th>
              <th scope="col" className={styles.created}>
                Создана
              </th>
              <th scope="col" className={styles.deadline}>
                Дедлайн
              </th>
              <th scope="col" className={styles.status}>
                Статус
              </th>
              <th scope="col" className={styles.responses}>
                Отклики
              </th>
            </tr>
          </thead>
        ) : null}

        <tbody className={styles.vacancies_container}>
          {vacancies.length > 0 ? (
            visibleVacancies.map((v, i) => (
              <Vacancy
                {...vacancy}
                key={v.id}
                vacancy_name={v.vacancy_name}
                company_name={v.company_name}
                customer_name={v.customer_name}
                opened_date={v.opened_date}
                closed_date={v.closed_date}
                status={v.status}
                checked={checkedStates[i]}
                onChange={(checked) => handleVacancyCheckboxChange(i, checked)}
              />
            ))
          ) : (
            <div className={styles.create_vacancy_container}>
              <img src="imgs/vacancies/empty.png" alt="в вакансиях пока пусто" className={styles.banner} />
              <div className={styles.empty_container__description}>
                <h3 className={styles.empty_container__title}>В Вакансиях пока пусто</h3>
                <span className={styles.empty_container__text}>Самое время это исправить.</span>
                <span className={styles.empty_container__text}>
                  Создайте свою первую вакансию, <br />
                  нажав на кнопку ниже
                </span>
              </div>
              <button className={styles.empty_container__btn} onClick={() => navigate('/vacancies/create')}>
                Создать вакансию
              </button>
            </div>
          )}
        </tbody>
      </table>

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
