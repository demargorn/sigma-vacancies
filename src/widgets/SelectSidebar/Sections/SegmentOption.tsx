import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { templateEditActions } from '@/app/store/slices/templateEditSlice';
import type { TypeRootState } from '@/app/store/store';
import type { SegmentationOptions } from '@/types/types';
import styles from './Sections.module.css';

type Props = {
  questionId: string | number;
  item: SegmentationOptions;
  active?: boolean;
  inFocus: boolean;
};

const SegmentOption = (props: Props) => {
  const [value, setValue] = useState(props.item.value);
  const savedInfo = useSelector((s: TypeRootState) => s.templateEdit.segmentationQuestions);
  const savedQuestion = useSelector((s: TypeRootState) => s.templateEdit.segmentationQuestions).filter((el) => el.id === props.questionId)[0];
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const questionIndex = savedInfo.indexOf(savedQuestion);
  const optionIndex = savedQuestion?.options?.indexOf(props.item);

  useEffect(() => {
    props.inFocus && inputRef.current ? inputRef.current.focus() : {};
  }, []);

  const deleteOption = () => {
    dispatch(templateEditActions.deleteSegmentationOption({ questionIndex: questionIndex, optionIndex: optionIndex }));
  };

  useEffect(() => {
    if (savedQuestion) dispatch(templateEditActions.changeSegmentationOption({ questionIndex: questionIndex, optionIndex: optionIndex, text: value }));
  }, [value]);

  return (
    <div className={styles.segment_option} key={props.item.id}>
      <div className={styles.segment_mock_radio}></div>
      <input ref={inputRef} type="text" value={value} className={styles.segment_input} disabled={!props.active} onChange={(e) => setValue(e.target.value)} />
      <button className={styles.segment_close_btn} disabled={!props.active} onClick={deleteOption}></button>
    </div>
  );
};

export default SegmentOption;
