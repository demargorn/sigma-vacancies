import styles from './UtilityParts.module.css';

type Props = {
  text: string;
  onClick: () => void;
  fontSize?: string;
  width?: string;
  // backgroundColor: string;
  // color: string;
  disabled?: boolean;
  center?: boolean;
};

const Button = (props: Props) => {
  return (
    <button
      className={styles.btn}
      onClick={props.onClick}
      style={{ fontSize: `${props.fontSize}`, width: `${props.width}`, textAlign: `${props.center ? 'center' : 'left'}` }}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;
