import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import cn from 'classnames';
import type { TypeDispatch } from '@/app/store/store';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import styles from './Popups.module.css';

type TypeExitPopupProps = {
  active: boolean;
  setActive: (arg: boolean) => void;
};

const ExitPopup = forwardRef<HTMLDivElement, TypeExitPopupProps>(({ active, setActive }, ref) => {
  const dispatch = useDispatch<TypeDispatch>();
  const navigate = useNavigate();

  const handleSaveVacancy = () => {
    dispatch(vacanciesActions.addVacancy());
    navigate('/vacancies');
  };

  const handleExitWithoutChanges = () => {
    setActive(false);
    navigate('/vacancies');
  };

  return (
    <div ref={ref} className={active ? cn(styles.container, styles.active) : `${styles.container}`} onClick={() => setActive(false)}>
      <div className={active ? cn(styles.content, styles.active) : `${styles.content}`} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.heading}>Подтверждение</h3>
        <button className={styles.btn_cross} onClick={() => setActive(false)}></button>
        <hr />
        <p className={styles.text}>Вы уверены, что хотите выйти? Внесенные данные не сохранятся</p>
        <div className={styles.btn_container}>
          <button className={styles.btn_cancel} onClick={handleExitWithoutChanges}>
            Выйти без сохранения
          </button>
          <button className={styles.btn_exit} onClick={handleSaveVacancy}>
            Сохранить черновик и выйти
          </button>
        </div>
      </div>
    </div>
  );
});

export default ExitPopup;
