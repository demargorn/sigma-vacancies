import { useNavigate, useParams } from 'react-router';
import cn from 'classnames';
import type { IVacancy } from '@/interfaces/IVacancy.interface';
import styles from './VacancyCard.module.css';

const VacancyCard = (props: IVacancy) => {
   const { id } = useParams();
   const navigate = useNavigate();

   /** подставляем слово `места` правильно */
   const declinePlace = (count: number | undefined) => {
      const absCount = Math.abs(count!);
      const lastDigit = absCount % 10;
      const lastTwoDigits = absCount % 100;

      if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
         return `${count} мест`;
      }

      if (lastDigit === 1) {
         return `${count} место`;
      }

      if (lastDigit >= 2 && lastDigit <= 4) {
         return `${count} места`;
      }

      return `${count} мест`;
   };

   const shortPeriod = (period: string | undefined) => {
      switch (period) {
         case 'в месяц':
            return 'мес';
         case 'в час':
            return 'час';
         case 'за проект':
            return 'проект';
         case 'за смену':
            return 'смена';
      }
   };

   return id === props.id ? (
      <section className={styles.container_full}>
         <article className={styles.block}>
            <header className={styles.vacancy_title_full}>
               <div className={styles.headling}>
                  <h1 className={styles.vacancy_name_full}>{props.vacancy_name}</h1>
                  <button className={styles.response_btn}>Откликнуться</button>
               </div>
               <p className={styles.company}>
                  в <span className={styles.company_name_full}>{props.company_name}</span>
               </p>
            </header>

            <div className={styles.salary_full}>
               <span className={styles.salary_from_full}>от {props.salary_from} </span>
               <span className={styles.salary_to_full}>до {props.salary_to} </span>
               <span>{props.currency}</span> / <span className={styles.period}>{shortPeriod(props.period)}</span>
               <span className={styles.after_taxes}>{props.after_taxes ? 'на руки' : 'до вычета налогов'}</span>
            </div>

            <div className={styles.parameters_full}>
               <span className={styles.places_count}>{declinePlace(props.places_qty)}</span>
               <span className={styles.experience}>{props.experience === 'без опыта' ? 'можно без опыта' : `опыт от ${props.experience}`}</span>
               <span className={styles.format}>{props.format}</span>
               <span className={styles.employment}>{props.employment === 'стажировка' ? 'стажировка' : `${props.employment} занятость`}</span>
            </div>
         </article>

         <article className={cn(styles.block, styles.about_job)}>
            <span className={styles.job_setting}>
               Формат работы: <span>{props.format}</span>
            </span>
            <span className={styles.job_setting}>
               Занятость: <span>{props.employment}</span>
            </span>
            <span className={styles.job_setting}>
               Форма трудоустройства: <span>{props.employment_form}</span>
            </span>
            <span className={styles.job_setting}>График работы: {props.schedule}</span>
            <span className={styles.job_setting}>
               Частота выплат: <span>{props.frequency}</span>
            </span>
            <span className={styles.job_setting}>
               Профессия: <span>{props.position}</span>
            </span>
            <span className={styles.job_setting}>
               Требуемый опыт: <span>{props.experience}</span>
            </span>
            <span className={styles.job_setting}>
               Требуемое образование: <span>{props.education}</span>
            </span>
         </article>

         <article className={styles.block}>
            <h3 className={styles.vacancy_description_title}>Ключевые навыки</h3>
            <ul className={styles.skills}>
               {props.selectedSkills?.map((s) => (
                  <li className={styles.skill}>{s}</li>
               ))}
            </ul>
         </article>

         <article className={styles.block}>
            <p className={styles.vacancy_short_description}>{props.vacancy_description}</p>

            <h3 className={styles.vacancy_description_title}>Чем предстоит заниматься</h3>
            <p className={styles.candidate_responsibilities}>{props.candidate_responsibilities}</p>

            <h3 className={styles.vacancy_description_title}>Что для нас важно</h3>
            <p className={styles.candidate_responsibilities}>{props.candidate_requirements}</p>

            <h3 className={styles.vacancy_description_title}>Что мы предлагаем</h3>
            <p className={styles.candidate_responsibilities}>{props.working_conditions}</p>
         </article>

         <article className={cn(styles.block, styles.about_company)}>
            <h3 className={styles.company_title}>{props.company_name}</h3>
            <span className={styles.city_country}>
               {props.city}, {props.country}
            </span>

            <p className={styles.company_description}>{props.company_description}</p>
         </article>
      </section>
   ) : (
      <section className={styles.container} onClick={() => navigate(`/active-vacancies/${props.id}`)}>
         <img src={props.preview_img} alt="картинка вакансии" className={styles.preview_img} />

         <div className={styles.vacancy_title}>
            <h3 className={styles.title}>{props.vacancy_name}</h3>
            <p className={styles.company_name}>{props.company_name}</p>
         </div>

         <div className={styles.salary}>
            <span className={styles.salary_from}>от {props.salary_from} </span>
            <span className={styles.salary_to}>до {props.salary_to} </span>
            <span>{props.currency}</span> / <span className={styles.period}>{shortPeriod(props.period)}</span>
            <span className={styles.after_taxes} style={props.after_taxes ? {} : { display: 'block', marginLeft: 0 }}>
               {props.after_taxes ? 'на руки' : 'до вычета налогов'}
            </span>
         </div>

         <div className={styles.parameters}>
            <span className={styles.places_count}>{declinePlace(props.places_qty)}</span>
            <span className={styles.experience}>{props.experience === 'без опыта' ? 'можно без опыта' : `опыт от ${props.experience}`}</span>
            <span className={styles.format}>{props.format}</span>
            <span className={styles.employment}>{props.employment === 'стажировка' ? 'стажировка' : `${props.employment} занятость`}</span>
         </div>

         <button className={styles.response_btn} onClick={() => {}}>
            Откликнуться
         </button>
      </section>
   );
};

export default VacancyCard;
