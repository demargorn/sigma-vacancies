import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';
import { Breadcrumb } from '@heathmont/moon-core-tw';
import { GenericHome } from '@heathmont/moon-icons-tw';
import { editingConfig } from '@/widgets/SelectSidebar/config';
import SelectSidebar from '@/widgets/SelectSidebar/SelectSidebar';
import type { TypeRootState } from '@/app/store/store';
import type { EditPageInfo, EditPollInfo, Template } from '@/types/types';
import styles from './CreateNewVacancy.module.css';

type TypeCreateNewVacancyProps = {
  mode?: string;
  templateInfo?: Template;
  pollInfo?: EditPollInfo;
};

const CreateNewVacancy = (props: TypeCreateNewVacancyProps) => {
  const templateEditInfo = useSelector((s: TypeRootState) => s.templateEdit);
  const [editPage, setEditPage] = useState<string>(editingConfig[0].section);
  const [pageInfo, setPageInfo] = useState<EditPageInfo>();
  const [error, setError] = useState<boolean>(false);

  const [hasChanged, setHasChanged] = useState<boolean>(false);
  const { mode } = useParams();

  const pollInfo = props.pollInfo;

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

  const callComponent = () => {
    if (!pageInfo) {
      return;
    }

    const props = {
      error,
      setError,
      hasChanged,
      setHasChanged,
      pollInfo,
      mode
    };

    return pageInfo.info.page({ ...props });
  };

  const checkIfError = () => {
    if (editPage === 'Info' && !templateEditInfo.adminHeading.replace(/\s+/g, '')) {
      return true;
    }
    return false;
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
        <button className={styles.header_btn_save} onClick={() => {}}>
          Сохранить
        </button>
      </div>

      <main className={styles.main}>
        <div className={styles.selectSidebar_container}>
          <SelectSidebar page={editPage} setPage={setEditPage} error={error} setError={setError} />

          <form action="" onChange={() => setHasChanged(true)} className={styles.form}>
            {callComponent()}
          </form>
        </div>

        <div className={styles.btn_container}>
          <button className={!pageInfo?.info.prevLink ? `${styles.btn_display_none}` : `${styles.btn_prev}`} onClick={() => setEditPage(pageInfo!.info.prevLink)}>
            Назад
          </button>
          <button className={!pageInfo?.info.nextLink ? `${styles.btn_display_none}` : `${styles.btn_next}`} onClick={() => setEditPage(pageInfo!.info.nextLink)}>
            Далeе
          </button>
        </div>
      </main>
    </section>
  );
};

export default CreateNewVacancy;
