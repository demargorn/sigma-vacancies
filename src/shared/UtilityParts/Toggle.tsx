import styles from './UtilityParts.module.css';

type Props = {
  id: string | number;
  active: boolean;
  setActive: (a: boolean) => void;
  styleRight?: string;
};

const Toggle = (props: Props) => {
  const active = props.active;
  const setActive = props.setActive;

  const handleToggle = () => {
    // active ? setActive(false) : setActive(true);
    setActive(!active);
  };

  return (
    <div className={styles.toggle_container} style={props.styleRight ? { right: props.styleRight } : {}}>
      <input type="checkbox" id={props.id.toString()} className={styles.toggle_input} onChange={handleToggle} checked={active} />
      <label htmlFor={props.id.toString()} className={styles.toggle_label}></label>
    </div>
  );
};

export default Toggle;
