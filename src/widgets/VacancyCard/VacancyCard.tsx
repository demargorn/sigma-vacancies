import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import styles from './VacancyCard.module.css';

type TypeVacancyCardProps = {
   preview_img?: string;
   vacancy_name?: string;
   company_name?: string;
   salary_from?: string;
   salary_to?: string;
   period?: string;
   after_taxes?: boolean;
   places_qty?: number;
   experience?: string;
   format?: string;
   employment?: string;
};

const VacancyCard = (props: TypeVacancyCardProps) => {
   const { vacancy } = useVacancyForm();

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

   return (
      <article className={styles.container}>
         <img src={props.preview_img} alt="картинка вакансии" className={styles.preview_img} />

         <div className={styles.vacancy_title}>
            <h3 className={styles.title}>{props.vacancy_name}</h3>
            <p className={styles.company_name}>{props.company_name}</p>
         </div>

         <div className={styles.salary}>
            <span className={styles.salary_from}>от {props.salary_from} </span>
            <span className={styles.salary_to}>до {props.salary_to} </span>
            <span>{vacancy.currency}</span> / <span className={styles.period}>{shortPeriod(props.period)}</span>
            <span className={styles.after_taxes} style={props.after_taxes ? {} : { display: 'block', marginLeft: 0 }}>
               {props.after_taxes ? 'на руки' : 'до вычета налогов'}
            </span>
         </div>

         <div className={styles.parameters}>
            <span className={styles.places_count}>{declinePlace(props.places_qty)}</span>
            <span className={styles.experience}>{props.experience === 'без опыта' ? 'можно без опыта' : `опыт от ${vacancy.experience}`}</span>
            <span className={styles.format}>{props.format}</span>
            <span className={styles.employment}>{props.employment === 'стажировка' ? 'стажировка' : `${vacancy.employment} занятость`}</span>
         </div>

         <button className={styles.send} onClick={() => {}}>
            Откликнуться
         </button>
      </article>
   );
};

export default VacancyCard;
