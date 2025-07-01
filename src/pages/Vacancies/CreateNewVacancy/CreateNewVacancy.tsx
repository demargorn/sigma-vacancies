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
  const [pageInfo, setPageInfo] = useState<EditPageInfo | undefined>();
  const [error, setError] = useState<boolean>(false);

  const [hasChanged, setHasChanged] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);
  const { mode } = useParams();

  const templateInfo = props.templateInfo;
  const pollInfo = props.pollInfo;

  const breadcrumbs = [
    <Link to="/" aria-label="Home" key="Home">
      <GenericHome className="text-moon-24" />
    </Link>,
    <Link to={`/vacancies`} style={{ marginLeft: '8px' }} key="Page 1">
      Найм сотрудников
    </Link>,
    <span key="Current" style={{ marginLeft: '8px' }}>
      Создать новую вакансию
    </span>
  ];

  const callComponent = () => {
    if (!pageInfo) {
      return null;
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

        <div className={styles.input_container}>
          <input type="text" placeholder="Поиск" className={styles.input} />
          <button className={styles.input_button}></button>
        </div>
      </header>

      <div className={styles.text_container}>
        <h1 className={styles.h1}>Создать новую вакансию</h1>
      </div>

      <main className={styles.main} style={editPage === 'Segmentation' || editPage === 'Preview' ? { height: '100%' } : {}}>
        <SelectSidebar page={editPage} setPage={setEditPage} error={error} setError={setError} />
        <form action="" onChange={() => setHasChanged(true)} className={styles.form}>
          {callComponent()}
        </form>
        <div className={styles.btn_container}>
          {/* <button
            disabled={!pageInfo!.info?.prevLink}
            className={styles.header_btnNext}
            onClick={() => {
              setEditPage(pageInfo!.info.prevLink);
            }}
          >
            Назад
          </button> */}
          {/* <button
            disabled={!pageInfo!.info.nextLink}
            className={styles.header_btnNext}
            onClick={() => {
              const err = checkIfError();
              setError(err);
              if (!err) setEditPage(pageInfo!.info.nextLink);
            }}
          >
            Далeе
          </button> */}
        </div>
      </main>
    </section>
  );
};

export default CreateNewVacancy;
