import { type ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import styles from './Sections.module.css';

/** Создание новой вакансии. Заказчик */

const CustomerInfo = () => {
  const vacancy = useSelector((s: TypeRootState) => s.vacancies.vacancy); /** вакансия */
  const dispatch = useDispatch<TypeDispatch>();

  const handleVacancyCompanyNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancyCompanyName(target.value));
  };

  const handleVacancyCustomerNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancyCustomerName(target.value));
  };

  const handleVacancyCustomerTelChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancyCustomerTel(target.value));
  };

  const handleVacancyCustomerMailChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancyCustomerMail(target.value));
  };

  const handleVacancyCustomerTelegramChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancyCustomerTelegram(target.value));
  };

  return (
    <article className={styles.container}>
      <h2 className={styles.heading}>Информация о заказчике</h2>
      <p className={styles.description}>Эта информация только для внутреннего пользования. Она не будет опубликована на витрине вакансий</p>

      <label className={styles.customer}>
        <div className={styles.input_label}>Заказчик</div>
        <input
          type="text"
          name="company_name"
          value={vacancy.company_name}
          placeholder="Название компании, команды или проекта, для которого открыта вакансия"
          className={styles.input_text}
          onChange={handleVacancyCompanyNameChange}
        />
      </label>

      <h4 className={styles.input_title}>Контакты заказчика</h4>

      <label className={styles.input_container}>
        <div className={styles.customer_name}>
          <div className={styles.input_label}>Контактное лицо</div>
          <input type="text" name="customer_name" value={vacancy.customer_name} placeholder="Введите имя" className={styles.input_text} onChange={handleVacancyCustomerNameChange} />
        </div>
        <div className={styles.customer_tel}>
          <div className={styles.input_label}>Номер телефона</div>
          <input
            type="string"
            name="customer_tel"
            value={vacancy.customer_tel}
            placeholder="+7 (___) ___-__-__"
            pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"
            title="введите номер телефона"
            className={styles.input_text}
            onChange={handleVacancyCustomerTelChange}
          />
        </div>
      </label>

      <label className={styles.input_container}>
        <div className={styles.customer_name}>
          <div className={styles.input_label}>Почта</div>
          <input type="text" name="customer_mail" value={vacancy.customer_mail} placeholder="например, mail@mail.ru" className={styles.input_text} onChange={handleVacancyCustomerMailChange} />
        </div>
        <div className={styles.customer_telegram}>
          <div className={styles.input_label}>Telegram</div>
          <input type="text" name="customer_telegram" value={vacancy.customer_telegram} placeholder="@" className={styles.input_text} onChange={handleVacancyCustomerTelegramChange} />
        </div>
      </label>
    </article>
  );
};

export default CustomerInfo;
