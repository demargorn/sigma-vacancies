import styles from './Loader.module.css';

type Props = {
  color?: string;
  size?: string;
};

const Loader = (props: Props) => {
  const style = {
    background: `radial-gradient(farthest-side, ${props.color} 94%, #fff) top/3.8px 3.8px no-repeat, conic-gradient(#fff 30%, ${props.color})`,
    width: props.size,
    height: props.size
  };
  
  return <div className={styles.spinner} style={style}></div>;
};

export default Loader;
