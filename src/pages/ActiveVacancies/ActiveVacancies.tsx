import { useSelector } from 'react-redux';
import type { TypeRootState } from '@/app/store/store';
import VacancyCard from '@/widgets/VacancyCard/VacancyCard';
import styles from './ActiveVacancies.module.css';

const ActiveVacancies = () => {
   const vacancies = useSelector((s: TypeRootState) => s.vacancies.items);

   return (
      <section className={styles.container}>
         <h1 className={styles.main_title}>Активныe вакансии</h1>
         <div className={styles.vacancies_container}>
            {vacancies.map((v) => (
               <VacancyCard
                  key={v.id}
                  preview_img={v.preview_img}
                  vacancy_name={v.vacancy_name}
                  company_name={v.company_name}
                  salary_from={v.salary_from}
                  salary_to={v.salary_to}
                  period={v.period}
                  after_taxes={v.after_taxes}
                  places_qty={v.places_qty}
                  experience={v.experience}
                  format={v.format}
                  employment={v.employment}
               />
            ))}
         </div>
      </section>
   );
};

export default ActiveVacancies;
