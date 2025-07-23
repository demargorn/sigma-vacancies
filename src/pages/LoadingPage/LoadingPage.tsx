import Loader from '@/widgets/Loader/Loader';
import styles from './LoadingPage.module.css';

type Props = {
   height?: string;
};

const LoadingPage = (props: Props) => {
   return (
      <div className={styles.loading} style={{ height: props.height }}>
         <Loader color="var(--main-color)" size="66px" />
      </div>
   );
};

export default LoadingPage;
