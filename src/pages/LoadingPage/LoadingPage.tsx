import Loader from '@/shared/components/Loader/Loader';
import styles from './LoadingPage.module.css';

type Props = {
  height?: string;
};

const LoadingPage = (props: Props) => {
  return (
    <div className={styles.loading} style={{ height: props.height }}>
      <Loader color="var(--accent-color)" size="66px" />
    </div>
  );
};

export default LoadingPage;
