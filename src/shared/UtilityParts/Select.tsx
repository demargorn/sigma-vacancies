import styles from './UtilityParts.module.css';

type Option = {
  label: string;
  value: string;
};

type Props = {
  value?: Option;
  onChange: (value: Option | undefined) => void;
  options: Option[];
};

const Select = (props: Props) => {
  return (
    <div className={styles.select_container}>
      <span className={styles.select_value}>Value</span>
      <div className={styles.select_divider}></div>
      <div className={styles.select_caret}></div>
      <ul className={`${styles.select_options} ${styles.show}`}>
        {props.options.map((option) => (
          <li className={styles.select_option} key={option.value}>
            {option.label}
          </li>
        ))}
        <li className={styles.select_option}>
          <button className={styles.select_show_btn}>Показать</button>
        </li>
      </ul>
    </div>
  );
};

export default Select;
