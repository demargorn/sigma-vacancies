import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { templateEditActions } from '@/app/store/slices/templateEditSlice';
import type { TypeRootState } from '@/app/store/store';
import styles from './Sections.module.css';

type Props = {
  error: boolean;
  setError: (arg: boolean) => void;
  hasChanged: boolean;
};

const Info = (props: Props) => {
  const templateEditInfo = useSelector((s: TypeRootState) => s.templateEdit);
  const [name, setName] = useState(templateEditInfo.adminHeading);
  const [description, setDescription] = useState(templateEditInfo.adminDescription);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(templateEditActions.addAdminHeading({ adminHeading: name }));
    if (name.replace(/\s+/g, '').length > 0) {
      props.setError(false);
    } else if (props.hasChanged) {
      props.setError(true);
    }
  }, [name]);

  useEffect(() => {
    dispatch(templateEditActions.addAdminDescription({ adminDescription: description }));
  }, [description]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Информация об опросе – только для администраторов опроса</h2>
      <p className={styles.description}>Эта информация нужна только для внутреннего пользования. Назовите опрос таким образом, чтобы идентифицировать его в списке опросов компании.</p>

      <label className={styles.input_container}>
        <div className={styles.input_label}>
          Название <span style={{ color: '#EA7F8B' }}>*</span>
        </div>
        <input
          className={styles.input_text}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите текст"
          style={props.error ? { border: '1px solid #EA7F8B' } : {}}
        />
        <h6 className={styles.error} style={props.error ? {} : { display: 'none' }}>
          Необходимо заполнить обязательное поле
        </h6>
      </label>

      <label className={styles.input_container}>
        <div className={styles.input_label}>Описание</div>
        <textarea className={styles.input_textarea} value={description} onChange={(e) => setDescription(e.target.value)} rows={5} placeholder="Проводим с 1 по 20 ноября надо опросить всех. " />
      </label>
    </div>
  );
};

export default Info;
