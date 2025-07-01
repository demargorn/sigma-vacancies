import { useSelector } from 'react-redux';
import { editingConfig } from './config';
import type { TypeRootState } from '@/app/store/store';
import styles from './SelectSidebar.module.css';

type TypeSelectSidebarProps = {
  page: string;
  setPage: (arg: string) => void;
  setError: (arg: boolean) => void;
  error: boolean;
};

const SelectSidebar = (props: TypeSelectSidebarProps) => {
  const adminHeading = useSelector((s: TypeRootState) => s.templateEdit);

  const style = {
    height: props.page === 'Segmentation' || props.page === 'Preview' ? 'calc(100% - 175px)' : ''
  };

  const handleSetError = (item: string) => {
    if (!adminHeading && props.page === 'Info') {
      props.setError(true);
    } else {
      props.setPage(item);
    }
  };

  return (
    <div className={styles.sidebar_container} style={style}>
      <ul className={styles.sidebar_list}>
        {editingConfig.map((item, i) => {
          return (
            <li
              className={props.page === item.section ? `${styles.sidebar_item} ${styles.sidebar_item_active}` : `${styles.sidebar_item}`}
              key={item.section}
              onClick={() => handleSetError(item.section)}
            >
              {`${i + 1}. ${item.info.name}`}
              <p className={props.page === item.section ? `${styles.sidebar_description} ${styles.sidebar_description_active}` : `${styles.sidebar_description}`}>{item.info.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectSidebar;
