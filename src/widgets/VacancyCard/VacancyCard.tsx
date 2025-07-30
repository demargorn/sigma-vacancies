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
                  <h1 className={styles.vacancy_name_full}>{props.title}</h1>
                  <button className={styles.response_btn}>Откликнуться</button>
               </div>
               <p className={styles.company}>
                  в <span className={styles.company_name_full}>{props.organization_name}</span>
               </p>
            </header>

            <div className={styles.salary_full}>
               <span className={styles.salary_from_full}>от {props.salary_from} </span>
               <span className={styles.salary_to_full}>до {props.salary_to} </span>
               <span>{props.currency}</span> / <span className={styles.period}>{shortPeriod(props.salary_period)}</span>
               <span className={styles.after_taxes}>{props.taxes ? 'на руки' : 'до вычета налогов'}</span>
            </div>

            <div className={styles.parameters_full}>
               <span className={styles.places_count}>{declinePlace(props.required_employees)}</span>
               <span className={styles.experience}>{props.experience_required === 'без опыта' ? 'можно без опыта' : `опыт от ${props.experience_required}`}</span>
               <span className={styles.format}>{props.work_format}</span>
               <span className={styles.employment}>{props.employment_type === 'стажировка' ? 'стажировка' : `${props.employment_type} занятость`}</span>
            </div>
         </article>

         <article className={cn(styles.block, styles.about_job)}>
            <span className={styles.job_setting}>
               Формат работы: <span>{props.work_format}</span>
            </span>
            <span className={styles.job_setting}>
               Занятость: <span>{props.employment_type}</span>
            </span>
            <span className={styles.job_setting}>
               Форма трудоустройства: <span>{props.employment_basis}</span>
            </span>
            <span className={styles.job_setting}>График работы: {props.schedule}</span>
            <span className={styles.job_setting}>
               Частота выплат: <span>{props.frequency}</span>
            </span>
            <span className={styles.job_setting}>
               Профессия: <span>{props.position}</span>
            </span>
            <span className={styles.job_setting}>
               Требуемый опыт: <span>{props.experience_required}</span>
            </span>
            <span className={styles.job_setting}>
               Требуемое образование: <span>{props.education}</span>
            </span>
         </article>

         <article className={styles.block}>
            <h3 className={styles.vacancy_description_title}>Ключевые навыки</h3>
            <ul className={styles.skills}>
               {props.skills?.map((s) => (
                  <li className={styles.skill}>{s}</li>
               ))}
            </ul>
         </article>

         <article className={styles.block}>
            <p className={styles.vacancy_short_description}>{props.short_description}</p>

            <h3 className={styles.vacancy_description_title}>Чем предстоит заниматься</h3>
            <p className={styles.candidate_responsibilities}>{props.responsibilities}</p>

            <h3 className={styles.vacancy_description_title}>Что для нас важно</h3>
            <p className={styles.candidate_responsibilities}>{props.requirements}</p>

            <h3 className={styles.vacancy_description_title}>Что мы предлагаем</h3>
            <p className={styles.candidate_responsibilities}>{props.benefits}</p>
         </article>

         <article className={cn(styles.block, styles.about_company)}>
            <h3 className={styles.company_title}>{props.organization_name}</h3>
            <span className={styles.city_country}>
               {props.city}, {props.country}
            </span>

            <p className={styles.company_description}>{props.organization_description}</p>
         </article>
      </section>
   ) : (
      <section className={styles.container} onClick={() => navigate(`/active-vacancies/${props.id}`)}>
         <img src={props.preview_img} alt="картинка вакансии" className={styles.preview_img} />

         <div className={styles.vacancy_title}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.company_name}>{props.organization_name}</p>
         </div>

         <div className={styles.salary}>
            <span className={styles.salary_from}>от {props.salary_from} </span>
            <span className={styles.salary_to}>до {props.salary_to} </span>
            <span>{props.currency}</span> / <span className={styles.period}>{shortPeriod(props.salary_period)}</span>
            <span className={styles.after_taxes} style={props.taxes ? {} : { display: 'block', marginLeft: 0 }}>
               {props.taxes ? 'на руки' : 'до вычета налогов'}
            </span>
         </div>

         <div className={styles.parameters}>
            <span className={styles.places_count}>{declinePlace(props.required_employees)}</span>
            <span className={styles.experience}>{props.experience_required === 'без опыта' ? 'можно без опыта' : `опыт ${props.experience_required}`}</span>
            <span className={styles.format}>{props.work_format}</span>
            <span className={styles.employment}>{props.employment_type === 'стажировка' ? 'стажировка' : `${props.employment_type} занятость`}</span>
         </div>

         <button className={styles.response_btn} onClick={() => {}}>
            Откликнуться
         </button>
      </section>
   );
};

export default VacancyCard;
