import { useNavigate } from 'react-router';
import cn from 'classnames';

import styles from './Popups.module.css';

type TypeSavePopupProps = {
  active: boolean;
  setActive: (arg: boolean) => void;
};

const SavePopup = (props: TypeSavePopupProps) => {
  const navigate = useNavigate();

  return (
    <div className={props.active ? cn(styles.container, styles.active) : `${styles.container}`} onClick={() => props.setActive(false)}>
      <div className={props.active ? cn(styles.content, styles.active) : `${styles.content}`} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.heading}>Сохранено</h3>
        <button className={styles.btn_cross} onClick={() => props.setActive(false)}></button>
        <div className={styles.btn_container}>
          <button className={styles.btn_cancel} onClick={() => props.setActive(false)}>
            Назад
          </button>
          <button
            className={styles.btn_exit}
            onClick={() => {
              navigate('/vacancies');
            }}
          >
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};
export default SavePopup;
