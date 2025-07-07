import { type ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import styles from './Sections.module.css';

/** Создание новой вакансии. Контакты для кандидата*/

const Contacts = () => {
  const vacancy = useSelector((s: TypeRootState) => s.vacancies.vacancy); /** вакансия */
  const dispatch = useDispatch<TypeDispatch>();

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

  const handleVacancyCustomerWhatsappChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(vacanciesActions.addVacancyCustomerWhatsapp(target.value));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Контакты для кандидата</h2>
      <p className={styles.description}>Эти контакты будут опубликованы на витрине вакансии. Они нужны для связи кандидата с компанией</p>

      <label className={styles.customer}>
        <div className={styles.input_label}>Контактное лицо</div>
        <input
          type="text"
          name="customer_name"
          value={vacancy.customer_name}
          placeholder="Название компании, команды или проекта, для которого открыта вакансия"
          className={styles.input_text}
          onChange={handleVacancyCustomerNameChange}
        />
      </label>

      <label className={styles.input_container}>
        <div className={styles.customer_tel}>
          <div className={styles.input_label}>Номер телефона</div>
          <input type="tel" name="customer_tel" value={vacancy.customer_tel} placeholder="+7 (___) ___-__-__" className={styles.input_text} onChange={handleVacancyCustomerTelChange} />
        </div>
        <div className={styles.customer_mail}>
          <div className={styles.input_label}>Почта</div>
          <input type="text" name="customer_mail" value={vacancy.customer_mail} placeholder="например, mail@mail.ru" className={styles.input_text} onChange={handleVacancyCustomerMailChange} />
        </div>
      </label>

      <label className={styles.input_container}>
        <div className={styles.customer_telegram}>
          <div className={styles.input_label}>Telegram</div>
          <input type="text" name="customer_telegram" value={vacancy.customer_telegram} placeholder="@" className={styles.input_text} onChange={handleVacancyCustomerTelegramChange} />
        </div>
        <div className={styles.customer_whatsapp}>
          <div className={styles.input_label}>WhatsApp</div>
          <input type="text" name="customer_whatsapp" value={vacancy.customer_whatsapp} placeholder="Вставьте ссылку" className={styles.input_text} onChange={handleVacancyCustomerWhatsappChange} />
        </div>
      </label>
    </div>
  );
};

export default Contacts;
