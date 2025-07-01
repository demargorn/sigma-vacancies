import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { templateEditActions } from '@/app/store/slices/templateEditSlice';
import type { TypeRootState } from '@/app/store/store';
import styles from './Sections.module.css';

type Props = {
  mode: string;
};

const Dates = (props: Props) => {
  const templateEditInfo = useSelector((s: TypeRootState) => s.templateEdit);
  const [dateStart, setDateStart] = useState(templateEditInfo.dateStart !== null ? templateEditInfo.dateStart?.substring(0, 10) : null);
  const [dateEnd, setDateEnd] = useState(templateEditInfo.dateEnd !== null ? templateEditInfo.dateEnd?.substring(0, 10) : null);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dateStart) {
      dispatch(templateEditActions.addDateStart({ dateStart: null }));
      return;
    }
    dateEnd ? (new Date(dateEnd).getTime() < new Date(dateStart).getTime() ? setError(true) : setError(false)) : {};
    !error ? dispatch(templateEditActions.addDateStart({ dateStart: `${dateStart}T07:02:35.756000Z` })) : dispatch(templateEditActions.addDateStart({ dateStart: null }));
  }, [dateStart]);

  useEffect(() => {
    if (!dateEnd || !dateStart) return;
    new Date(dateEnd).getTime() < new Date(dateStart).getTime() || new Date(dateEnd).getTime() < new Date().getTime() ? setError(true) : setError(false);
    !error ? dispatch(templateEditActions.addDateEnd({ dateEnd: `${dateEnd}T07:02:35.756000Z` })) : dispatch(templateEditActions.addDateEnd({ dateEnd: null }));
  }, [dateEnd]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Даты проведения опроса</h2>
      <p className={styles.description}>
        Настройте даты старта и окончания опроса. Если вы не укажете даты старта и окончания, опрос будет сохранен в качестве черновика. Вы можете указать только дату старта опроса и он будет
        опубликован в общий доступ начиная с этой даты. Вы сможете изменить даты в любой момент из списка «Мои опросы»
      </p>
      <div className={styles.inputs_container}>
        <label className={styles.input_container_date}>
          <div className={styles.input_label_date}>Дата старта публикации</div>
          {/* <input className={styles.input_date} /> */}
          <input className={styles.input_date} value={dateStart || ''} type="date" onChange={(e) => setDateStart(e.target.value)} />
        </label>
        <label className={styles.input_container_date}>
          <div className={styles.input_label_date}>Дата окончания публикации</div>
          {/* <input /> */}
          <input className={styles.input_date} value={dateEnd || ''} type="date" onChange={(e) => setDateEnd(e.target.value)} />
        </label>
      </div>
      <div className={styles.warning} style={props.mode === 'create' ? { display: 'none' } : {}}>
        Обратите внимание, что изменение дат проведения опроса может повлиять на статус публикации. Опрос будет опубликован в указанный промежуток времени.
      </div>
      <div className={styles.error} style={error ? { marginTop: '40px' } : { display: 'none' }}>
        {'Дата окончания не может быть раньше даты старта'}
        {dateEnd ? (new Date(dateEnd).getTime() < new Date().getTime() ? 'Дата окончания не может быть раньше нынешней даты' : 'Дата окончания не может быть раньше даты старта') : ''}
      </div>
    </div>
  );
};

export default Dates;
