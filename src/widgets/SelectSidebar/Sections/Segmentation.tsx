import { templateEditActions } from '@/app/store/slices/templateEditSlice';
import type { SegmentationQuestion } from '@/types/types';
import Segment from './Segment';
import styles from './Sections.module.css';

type Props = {
  department: SegmentationQuestion;
  workPeriod: SegmentationQuestion;
  mode: string;
  setHasChanged: (arg: boolean) => void;
};

const Segmentation = (props: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Сегментация респондентов</h2>
      <p style={{ marginBottom: '40px' }} className={styles.description}>
        Для проведения эффективного анализа ответов рекомендуем выделить несколько (не больше двух для сохранения анонимности) сегментов сотрудников.
      </p>
      <Segment setHasChanged={props.setHasChanged} segmentNumber={1} info={props.department} mode={props.mode} setSegment={templateEditActions.changeSegmentTeams} />
      <Segment setHasChanged={props.setHasChanged} segmentNumber={2} info={props.workPeriod} mode={props.mode} setSegment={templateEditActions.changeSegmentExperience} />
    </div>
  );
};

export default Segmentation;
