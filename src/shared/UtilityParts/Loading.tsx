import styles from './UtilityParts.module.css';

type Props = {
  text: string;
  whiteBackground: boolean;
};

const Loading = (props: Props) => {
  return (
    <div className={styles.loading_container}>
      <div className={styles.loading_svg} style={props.whiteBackground ? { backgroundImage: 'url(/imgs/icons/loading.svg)' } : {}}></div>
      <h6 className={styles.loading_text}>{props.text}</h6>
    </div>
  );
};

export default Loading;
