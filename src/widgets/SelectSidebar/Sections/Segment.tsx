import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { templateEditActions } from '@/app/store/slices/templateEditSlice';
import type { TypeRootState } from '@/app/store/store';
import type { SegmentationQuestion } from '@/types/types';
import Toggle from '@/shared/UtilityParts/Toggle';
import SegmentOption from './SegmentOption';
import styles from './Sections.module.css';

type Props = {
  segmentNumber: number;
  info: SegmentationQuestion;
  mode: string;
  setHasChanged: (arg: boolean) => void;
  // addOption: (arg: { option: SegmentationOptions; questionIndex: number }) => void;
  setSegment: (arg: boolean) => void;
};

const Segment = (props: Props) => {
  const dispatch = useDispatch();
  const savedInfo = useSelector((s: TypeRootState) => s.templateEdit.segmentationQuestions);
  const savedQuestion = useSelector((s: TypeRootState) => s.templateEdit.segmentationQuestions).filter((item) => item.id === props.info.id)[0];
  const questionIndex = savedInfo.indexOf(savedQuestion);
  const [index, _setIndex] = useState<number>();
  const [active, setActive] = useState(true);
  const [inFocus, setInfocus] = useState(false);
  const hasPageBeenRended = useRef(false);

  const addOption = () => {
    console.log(savedQuestion);

    if (savedQuestion) {
      // props.addOption({
      //     questionIndex: questionIndex,
      //     option: { value: '', id: `${savedQuestion.id}-${savedQuestion.options.length + 10}` }
      // });
      dispatch(templateEditActions.addSegmentationOption({ questionIndex: questionIndex, option: { value: '', id: `${savedQuestion.id}-${savedQuestion.options.length + 10}` } }));
      setInfocus(true);
    }
  };

  useEffect(() => {
    index ? setActive(index < 0 ? false : true) : {};
  }, [index]);

  useEffect(() => {
    console.log(savedInfo, props.info.id);

    if (hasPageBeenRended.current) {
      props.setHasChanged(true);
      return;
    }
    hasPageBeenRended.current = true;
    _setIndex(savedInfo.findIndex((el) => el.id === props.info.id));
  }, [savedInfo]);

  useEffect(() => {
    if (!active) {
      props.setSegment(false);
      // props.segmentNumber === 1 ? dispatch(changeSegmentTeams({ segmentTeams: false })) : dispatch(changeSegmentExperience({ segmentExperience: false }));
    } else if (index && index < 0) {
      console.log('ehhehe');

      props.setSegment(true);
    }
  }, [active]);

  return (
    <div className={styles.segment_container} style={active ? {} : { opacity: '0.55' }}>
      <Toggle styleRight="20px" active={active} setActive={setActive} id={props.info.id} />
      <h3 className={styles.segment_heading} style={{ opacity: '1' }}>{`Сегмент ${props.segmentNumber} "${props.info.text.split(' ').slice(-1)[0]}"`}</h3>
      <h5 className={styles.segment_subheading}>Вопрос:</h5>
      <h4 className={styles.segment_question_heading}>{props.info.text}</h4>
      <h5 className={styles.segment_subheading}>Варианты ответа:</h5>
      {active ? (
        savedQuestion?.options?.map((item, index) => {
          return (
            <SegmentOption
              questionId={props.info.id}
              item={item}
              active={active !== undefined ? active : false}
              key={item.id}
              inFocus={index === savedQuestion.options.length - 1 && inFocus ? true : false}
            />
          );
        })
      ) : (
        <div></div>
      )}

      {/* {active !== undefined ? (
                savedQuestion?.options?.map((item) => <SegmentOption inFocus={inFocus} questionId={props.info.id} item={item} active={active !== undefined ? active : false} key={item.id} />)
            ) : (
                <div></div>
            )} */}
      <div className={styles.segment_option}>
        <div className={styles.segment_mock_radio}></div>
        {/* <button className={styles.segment_add_option} disabled={!active} type="button"> */}
        <button className={styles.segment_add_option} disabled={!active} onClick={addOption} type="button">
          Добавить вариант ответа
        </button>
      </div>
    </div>
  );
};

export default Segment;
