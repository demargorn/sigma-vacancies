import { useSelector } from 'react-redux';
import type { TypeRootState } from '@/app/store/store';
import VacancyCard from '@/widgets/VacancyCard/VacancyCard';
import styles from './ActiveVacancies.module.css';
import { useState } from 'react';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';

const ActiveVacancies = () => {
   const vacancies = useSelector((s: TypeRootState) => s.vacancies.items);

   console.log(vacancies);

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
