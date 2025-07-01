import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { templateEditActions } from '@/app/store/slices/templateEditSlice';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
// import { Checkbox } from '@/components/ElementWidgets/Elements';
import styles from './Sections.module.css';

const Participation = () => {
  const templateEdit = useSelector((s: TypeRootState) => s.templateEdit);
  const [anon, setAnon] = useState(templateEdit.private);
  const [single, setSingle] = useState(templateEdit.single_answer);
  const dispatch = useDispatch<TypeDispatch>();

  // useEffect(() => {
  //   console.log(templateEdit.private);
  // }, [templateEdit]);

  const options = [
    {
      label: 'Анонимный опрос (не сохранять данные об участнике)',
      value: 'private',
      marginBottom: '16px',
      checked: anon,
      setChecked: setAnon
    },
    {
      label: 'Запрет повторного участия в опросе',
      value: 'single_answer',
      marginBottom: '0',
      checked: single,
      setChecked: setSingle
    }
  ];

  useEffect(() => {
    console.log(anon);

    dispatch(templateEditActions.setPrivate(anon));
  }, [anon]);

  useEffect(() => {
    dispatch(templateEditActions.setSingleAnswer(single));
  }, [single]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading} style={{ marginBottom: '32px' }}>
        Участие респондентов
      </h2>
      {/* {options.map((el) => (
        <Checkbox label={el.label} value={el.value} marginBottom={el.marginBottom} isChecked={el.setChecked} checked={el.checked} />
      ))} */}
    </div>
  );
};

export default Participation;
