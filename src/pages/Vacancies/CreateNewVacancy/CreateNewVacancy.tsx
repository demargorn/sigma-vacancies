import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import cn from 'classnames';
import { editingConfig } from '@/widgets/SelectSidebar/config';
import { Breadcrumb } from '@heathmont/moon-core-tw';
import { GenericHome } from '@heathmont/moon-icons-tw';
import SelectSidebar from '@/widgets/SelectSidebar/SelectSidebar';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import type { EditPageInfo, EditPollInfo, Template } from '@/types/types';
import styles from './CreateNewVacancy.module.css';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';

type TypeCreateNewVacancyProps = {
  pollInfo?: EditPollInfo;
};

const CreateNewVacancy = ({ pollInfo }: TypeCreateNewVacancyProps) => {
  const vacancy = useSelector((s: TypeRootState) => s.vacancies.vacancy); /** вакансия */
  const dispatch = useDispatch<TypeDispatch>();
  const [clicked, setClicked] = useState<boolean>(false); /** нажата ли кнопка Сохранить */
  const [editPage, setEditPage] = useState<string>(editingConfig[0].section);
  const [pageInfo, setPageInfo] = useState<EditPageInfo>();

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

  /** функция сохранения вакансии в local storege */
  const handleSaveVacancy = () => {
    setClicked(true);
    dispatch(vacanciesActions.saveVacancyToLocalStorage());
  };

  /** функция вызова нового компонента */
  const callComponent = () => {
    if (!pageInfo) {
      return;
    }

    return pageInfo.info.page({ ...pollInfo });
  };

  useEffect(() => {
    const currentInfo = editingConfig.find((item) => item.section === editPage);
    if (!currentInfo) {
      return;
    }
    setPageInfo(currentInfo);
  }, [editPage]);

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.breadcrumbs}>
          <Breadcrumb breadcrumbs={breadcrumbs} />
        </div>

        <div className={styles.header_input_container}>
          <input type="text" placeholder="Поиск" className={styles.header_input} />
          <button className={styles.header_input_button}></button>
        </div>
      </header>

      <div className={styles.text_container}>
        <h1 className={styles.h1}>Создание новой вакансии</h1>
        <button className={clicked ? cn(styles.header_btn_clicked, styles.header_btn_save) : `${styles.header_btn_save}`} onClick={handleSaveVacancy}>
          {clicked ? 'Изменения сохранены' : 'Сохранить и опубликовать'}
        </button>
      </div>

      <main className={styles.main}>
        <div className={styles.selectSidebar_container}>
          <SelectSidebar page={editPage} setPage={setEditPage} />

          <form action="" className={styles.form}>
            {callComponent()}
          </form>
        </div>

        <div className={styles.btn_container}>
          <button className={!pageInfo?.info.prevLink ? `${styles.btn_display_none}` : `${styles.btn_prev}`} onClick={() => setEditPage(pageInfo!.info.prevLink)}>
            Назад
          </button>
          <button className={!pageInfo?.info.nextLink ? `${cn(styles.btn_next, styles.btn_next_save)}` : `${styles.btn_next}`} onClick={() => setEditPage(pageInfo!.info.nextLink)}>
            {!pageInfo?.info.nextLink ? 'Сохранить' : 'Далее'}
          </button>
        </div>
      </main>
    </section>
  );
};

export default CreateNewVacancy;
