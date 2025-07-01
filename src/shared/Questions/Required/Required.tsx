import styles from '@/shared/index.module.css';

type TypeRequiredProps = {
  required: boolean;
  decor: boolean;
};

const Required = (props: TypeRequiredProps) => {
  return (
    <div style={props.required && props.decor ? { position: 'static' } : props.required ? {} : { display: 'none' }} className={styles.required}>
      обязательный вопрос
    </div>
  );
};

export default Required;
