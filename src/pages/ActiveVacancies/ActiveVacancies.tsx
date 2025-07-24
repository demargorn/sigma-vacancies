import { useDispatch, useSelector } from 'react-redux';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import VacancyCard from '@/widgets/VacancyCard/VacancyCard';
import styles from './ActiveVacancies.module.css';

const ActiveVacancies = () => {
   const vacancies = useSelector((s: TypeRootState) => s.vacancies.items);
   const dispatch = useDispatch<TypeDispatch>();

   return (
      <section className={styles.container}>
         <h1 className={styles.main_title}>Активныe вакансии</h1>
         <div className={styles.vacancies_container}>
            {vacancies.map((v) => (
               <VacancyCard key={v.id} />
            ))}
         </div>
      </section>
   );
};

export default ActiveVacancies;
