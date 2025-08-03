import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import { buttonActions } from '@/app/store/slices/button.mods.slice';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import type { IVacancy } from '@/interfaces/IVacancy.interface';
import styles from './Vacancy.module.css';

/** Вакансия */

const Vacancy = (props: IVacancy) => {
   const { vacancy } = useVacancyForm();
   // const vacancy = useSelector((s: TypeRootState)=> s.vacancies.items);
   const navigate = useNavigate();
   const dispatch = useDispatch<TypeDispatch>();

   let status_mode: string;

   /** функция выбора статуса вакансии */
   const style_mode = function getStatus(): string {
      switch (props.vacancy_status) {
         case 'активная':
            status_mode = `${styles.vacancy_status__active}`;
            break;
         case 'на паузе':
            status_mode = `${styles.vacancy_status__paused}`;
            break;
         case 'черновик':
            status_mode = `${styles.vacancy_status__draft}`;
            break;
         case 'закрыта':
            status_mode = `${styles.vacancy_status__closed}`;
            break;
      }

      return status_mode;
   };

   return (
      <article className={styles.vacancy}>
         <div className={styles.vacancy_title}>
            <input type="checkbox" name="checkbox" className={styles.vacancy_checkbox} checked={props.checked} onChange={({ target }) => props.onChange?.(target.checked)} />
            <div className={styles.vacancy_title__description}>
               <h5 className={styles.vacancy_title__name}>{props.title}</h5>
               <p className={styles.vacancy_title__customer_name}>{props.organization_name}</p>
            </div>
         </div>
         <div className={styles.vacancy_recruter}>
            <span className={styles.vacancy_recruter__name}>{props.recruiter_name}</span>
         </div>
         <div className={styles.vacancy_created}>
            {/* <span className={styles.vacancy_created__date} title="дата создания">
               {props.opened_date ? new Date(vacancy.opened_date).toLocaleString('ru-Ru', { day: 'numeric', month: 'numeric', year: 'numeric' }) : new Date().toLocaleDateString('ru-Ru')}
            </span> */}
            <span className={styles.vacancy_created__date} title="дата создания">
               {props.opened_date ? vacancy.opened_date : new Date().toLocaleDateString('ru-Ru')}
            </span>
         </div>
         <div className={styles.vacancy_deadline}>
            {/* <span className={styles.vacancy_deadline__date} title="дата окончания">
               {props.deadline_date ? new Date(vacancy.deadline_date).toLocaleString('ru-Ru', { day: 'numeric', month: 'numeric', year: 'numeric' }) : 'нет'}
            </span> */}
            <span className={styles.vacancy_deadline__date} title="дата окончания">
               {props.deadline_date ? vacancy.deadline_date : 'нет'}
            </span>
         </div>
         <div className={styles.vacancy_status}>
            <span className={`${styles.vacancy_status__default} ${style_mode()}`}>{props.vacancy_status}</span>
         </div>
         <div className={styles.vacancy_responses}>
            <span className={styles.vacancy_responses__quantity}>{255}</span>
         </div>

         <div className={styles.vacancy_buttons}>
            <button title="копировать ссылку" className={props.vacancy_status === 'активная' ? `${styles.vacancy_copylink_btn}` : `${styles.vacancy_copylink_btn__disable}`}></button>
            <button
               title="редактировать"
               className={styles.vacancy_edit_btn}
               onClick={() => {
                  dispatch(buttonActions.setMode('edit'));
                  dispatch(vacanciesActions.setVacancyById(props.id!));
                  navigate(`/vacancies/edit/${props.id}`);
               }}
            ></button>

            {/* {responses_qty === 0 ? (
          <button className={cn(styles.vacancy_main_btn, styles.vacancy_main_btn__disabled)} disabled>
            Перейти к откликам
          </button>
        ) : (
          <button className={styles.vacancy_main_btn}>Перейти к откликам</button>
        )} */}

            <button className={styles.vacancy_main_btn}>Перейти к откликам</button>
         </div>
      </article>
   );
};

export default Vacancy;
