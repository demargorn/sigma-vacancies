import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { templateEditActions } from '@/app/store/slices/templateEditSlice';
import type { Template, EditPollInfo } from '@/types/types';
import Toggle from '@/shared/UtilityParts/Toggle';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import styles from './Sections.module.css';

type Props = {
  templateInfo?: Template;
  pollInfo?: EditPollInfo;
  hasChanged: boolean;
};

const Greeting = (props: Props) => {
  const templateEditInfo = useSelector((s: TypeRootState) => s.templateEdit);
  const dispatch = useDispatch<TypeDispatch>();
  const [active, setActive] = useState(true);
  const [name, setName] = useState(
    templateEditInfo.pollName !== '' ? templateEditInfo.pollName : props.hasChanged ? '' : props.templateInfo ? props.templateInfo.templateName : props.pollInfo ? props.pollInfo.pollName : ''
  );
  const [description, setDescription] = useState(
    templateEditInfo.pollDescription !== ''
      ? templateEditInfo.pollDescription
      : props.hasChanged
      ? ''
      : props.templateInfo
      ? props.templateInfo.templateDescription
      : props.pollInfo
      ? props.pollInfo.pollDescription
      : ''
  );

  useEffect(() => {
    name === '' ? setActive(false) : {};
    dispatch(templateEditActions.addPollName({ pollName: name }));
  }, [name]);

  useEffect(() => {
    dispatch(templateEditActions.addPollDescription({ pollDescription: description }));
  }, [description]);

  useEffect(() => {
    !active ? dispatch(templateEditActions.addPollName({ pollName: '' })) : {};
  }, [active]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Приветствие – информация для респондентов</h2>
      <p className={styles.description}>Это шаблон текста для респондентов в шапке анкеты. Вы можете его отредактировать</p>
      <label className={styles.input_container}>
        <Toggle id="pollName" active={active} setActive={setActive} />
        <div className={styles.input_label}>Название</div>
        <input
          className={active ? `${styles.input_text}` : `${styles.input_text} ${styles.input_text_disabled}`}
          type="text"
          disabled={!active}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className={styles.input_container}>
        <div className={styles.input_label}>Описание</div>
        <textarea className={styles.input_textarea} value={description} onChange={(e) => setDescription(e.target.value)} rows={5} />
      </label>
    </div>
  );
};

export default Greeting;
