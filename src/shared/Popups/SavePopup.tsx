import { useNavigate } from 'react-router';
import cn from 'classnames';

import styles from './Popups.module.css';

type TypeSavePopupProps = {
  active: boolean;
  setActive: (arg: boolean) => void;
};

const SavePopup = ({ active, setActive }: TypeSavePopupProps) => {
  const navigate = useNavigate();

  return (
    <div className={active ? cn(styles.container, styles.active) : `${styles.container}`} onClick={() => setActive(false)}>
      <div className={active ? cn(styles.content, styles.active) : `${styles.content}`} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.heading}>Сохранено</h3>
        <button className={styles.btn_cross} onClick={() => setActive(false)}></button>
        <div className={styles.btn_container_save}>
          <button className={cn(styles.btn_cancel, styles.btn_save)} onClick={() => setActive(false)}>
            Назад
          </button>
        </div>
      </div>
    </div>
  );
};
export default SavePopup;
