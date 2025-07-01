import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { templateEditActions } from '@/app/store/slices/templateEditSlice';
import type { TypeRootState } from '@/app/store/store';
import Toggle from '@/shared/UtilityParts/Toggle';
import styles from './Sections.module.css';

type Props = {
  hasChanged: boolean;
};

const FinalEdit = (props: Props) => {
  const dispatch = useDispatch();
  const templateEditInfo = useSelector((s: TypeRootState) => s.templateEdit);

  const [active, setActive] = useState(true);
  const [name, setName] = useState(
    templateEditInfo.finalHeading !== '' ? templateEditInfo.finalHeading : props.hasChanged ? '' : 'Спасибо за участие в опросе. Нам было важно узнать ваше мнение. Страницу можно закрывать'
  );
  const [description, setDescription] = useState(
    templateEditInfo.finalDescription !== ''
      ? templateEditInfo.finalDescription
      : props.hasChanged
      ? ''
      : 'Вы можете принять участие в других опросах нашей компании. Для этого перейдите на доску “опросы” в таск-трекере и найдите опрос, в котором вы не принимали участие. С заботой о вас, команда HR-специалистов'
  );

  useEffect(() => {
    dispatch(templateEditActions.addFinalHeading({ finalHeading: name }));
  }, [name]);

  useEffect(() => {
    description === '' ? setActive(false) : {};
    dispatch(templateEditActions.addFinalDescription({ finalDescription: description }));
  }, [description]);

  useEffect(() => {
    !active ? dispatch(templateEditActions.addFinalDescription({ finalDescription: '' })) : {};
  }, [active]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Итоговая страница после заполнения опроса</h2>
      <p className={styles.description}>Это шаблон текста для респондентов после заполнения опроса. Вы можете его отредактировать</p>
      <label className={styles.input_container}>
        <div className={styles.input_label}>Заголовок для итоговой страницы</div>
        <input className={styles.input_text} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className={styles.input_container}>
        <Toggle id="finalDesc" active={active} setActive={setActive} />
        <div className={styles.input_label}>Описание итоговой страницы</div>
        <textarea
          className={active ? `${styles.input_textarea}` : `${styles.input_textarea} ${styles.input_textarea_disabled}`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          disabled={!active}
        />
      </label>
    </div>
  );
};

export default FinalEdit;
