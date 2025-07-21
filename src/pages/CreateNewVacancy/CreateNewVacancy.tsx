import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router';
import cn from 'classnames';
import { editingConfig } from '@/widgets/SelectSidebar/config';
import { GenericHome } from '@heathmont/moon-icons-tw';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import type { TypeDispatch } from '@/app/store/store';
import type { EditPageInfo, EditPollInfo } from '@/types/types';
import Header from '@/widgets/Header/Header';
import SelectSidebar from '@/widgets/SelectSidebar/SelectSidebar';
import ExitPopup from '@/shared/components/Popups/ExitPopup';
import SavePopup from '@/shared/components/Popups/SavePopup';
import styles from './CreateNewVacancy.module.css';

type TypeCreateNewVacancyProps = {
   pollInfo?: EditPollInfo;
};

const CreateNewVacancy = ({ pollInfo }: TypeCreateNewVacancyProps) => {
   const { vacancy, handleSubmitForm, isChanged } = useVacancyForm();
   const [editPage, setEditPage] = useState<string>(editingConfig[0].section);
   const [pageInfo, setPageInfo] = useState<EditPageInfo>();
   const [clicked, setClicked] = useState<boolean>(true); /** нажата ли кнопка Сохранить */
   const [exitActive, setExitActive] = useState<boolean>(false); /** управление открытием exit-поп-апа */
   const [saveActive, setSaveActive] = useState<boolean>(true); /** управление открытием save-поп-апа */

   const windowRef = useRef<HTMLDivElement>(null); /** реф на окно основного контента  */
   const popupRef = useRef<HTMLDivElement>(null); /** реф на поп-ап */
   const dispatch = useDispatch<TypeDispatch>();

   const breadcrumbs = [
      <Link to="/" aria-label="Home" key="Home">
         <GenericHome className="text-moon-24" />
      </Link>,
      <span style={{ marginLeft: '8px' }} key="Page 1">
         ...
      </span>,
      <Link to={`/vacancies`} style={{ marginLeft: '8px' }} key="Page 2">
         Вакансии
      </Link>,
      <span key="Current" style={{ marginLeft: '8px' }}>
         Создание новой вакансии
      </span>
   ];

   /** функция сохранения вакансии в redux */
   const handleSaveVacancy = () => {
      setClicked(!clicked);
      dispatch(vacanciesActions.setCacheVacancy(vacancy));
      dispatch(vacanciesActions.addVacancy());
      dispatch(vacanciesActions.updateVacancyInList(vacancy));
   };

   /** функция вызова нового компонента */
   const callComponent = () => {
      if (!pageInfo) {
         return;
      }

      return pageInfo.info.page({ ...pollInfo });
   };

   /** показываем попап ExitPopup при клике вне окна */
   const handleClickOutside = useCallback((e: MouseEvent) => {
      if (windowRef.current && !windowRef.current.contains(e.target as Node)) {
         setExitActive(true);
      }
   }, []);

   /** показываем попап ExitPopup при попытке закрыть/перезагрузить страницу (плохо работает) */
   // const handleBeforeUnload = useCallback((e: BeforeUnloadEvent) => {
   //   setExitActive(true);
   //   e.preventDefault();
   //   return;
   // }, []);

   // useEffect(() => {
   //   window.addEventListener('beforeunload', handleBeforeUnload);

   //   return () => {
   //     window.removeEventListener('beforeunload', handleBeforeUnload);
   //   };
   // }, [exitActive]);

   useEffect(() => {
      const currentInfo = editingConfig.find((item) => item.section === editPage);
      if (!currentInfo) {
         return;
      }
      setPageInfo(currentInfo);
   }, [editPage]);

   useEffect(() => {
      window.addEventListener('mousedown', handleClickOutside);

      return () => {
         window.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <section ref={windowRef} className={styles.container}>
         {!clicked && <SavePopup active={saveActive} setActive={setSaveActive} />}
         {isChanged && exitActive && <ExitPopup active={exitActive} ref={popupRef} setActive={setExitActive} />}

         <Header breadcrumbs={breadcrumbs} />

         <div className={styles.text_container}>
            <h1 className={styles.h1}>Создание новой вакансии</h1>

            <button className={!isChanged ? cn(styles.header_btn_clicked, styles.header_btn_save) : `${styles.header_btn_save}`} onClick={handleSaveVacancy}>
               {isChanged ? (vacancy.status === 'активная' ? 'Сохранить и опубликовать' : ' Сохранить') : 'Изменения сохранены'}
            </button>
         </div>

         <main className={styles.main}>
            <div className={styles.selectSidebar_container}>
               <SelectSidebar page={editPage} setPage={setEditPage} />

               <form action="" className={styles.form} onSubmit={handleSubmitForm}>
                  {callComponent()}
               </form>
            </div>

            <div className={styles.btn_container}>
               <button className={!pageInfo?.info.prevLink ? `${styles.btn_display_none}` : `${styles.btn_prev}`} onClick={() => setEditPage(pageInfo!.info.prevLink)}>
                  Назад
               </button>
               <button
                  className={!pageInfo?.info.nextLink ? `${cn(styles.btn_next, styles.btn_next_save)}` : `${styles.btn_next}`}
                  onClick={!pageInfo?.info.nextLink ? handleSaveVacancy : () => setEditPage(pageInfo!.info.nextLink)}
               >
                  {!pageInfo?.info.nextLink ? 'Сохранить' : 'Далее'}
               </button>
            </div>
         </main>
      </section>
   );
};

export default CreateNewVacancy;
