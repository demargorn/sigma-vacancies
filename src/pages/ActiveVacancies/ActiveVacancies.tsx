import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import type { TypeRootState } from '@/app/store/store';
import VacancyCard from '@/widgets/VacancyCard/VacancyCard';
import styles from './ActiveVacancies.module.css';

const ActiveVacancies = () => {
   const vacancies = useSelector((s: TypeRootState) => s.vacancies.items);
   const { id } = useParams();

   return (
      <section className={styles.container}>
         {id ? null : <h1 className={styles.main_title}>Активныe вакансии</h1>}
         <div className={styles.vacancies_container}>{id ? vacancies.map((v) => v.id === id && <VacancyCard {...v} key={v.id} />) : vacancies.map((v) => <VacancyCard {...v} key={v.id} />)}</div>

         {id && vacancies.length > 1 &&  (
            <>
               {<h3 className={styles.secondary_title}>Другие вакансии</h3>}
               <div className={styles.vacancies_container}>{vacancies.map((v) => v.id !== id && <VacancyCard {...v} key={v.id} />)}</div>
            </>
         )}
      </section>
   );
};

export default ActiveVacancies;
