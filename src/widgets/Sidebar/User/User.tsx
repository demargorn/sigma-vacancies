import styles from './User.module.css';

type Props = {
  img: string;
  name: string;
  email: string;
  small: boolean;
  onClick?: (arg: boolean) => void;
  menuActive?: boolean;
  arrow: boolean;
  mode: string;
};

const User = (props: Props) => {
  // const [name, setName] = useState(props.name);
  // const truncate = (str: string, max: number, suffix: string) => (str.length < max ? str : `${str.slice(0, str.slice(0, max - suffix.length).lastIndexOf(' '))}${suffix}`);

  const openMenu = () => {
    if (props.onClick) {
      props.menuActive ? props.onClick(false) : props.onClick(true);
    } else return;
  };
  return (
    <div
      className={props.mode === 'popup' ? `${styles.user} ${styles.user_popup}` : props.menuActive ? `${styles.user} ${styles.user_active}` : `${styles.user}`}
      onClick={openMenu}
      style={props.onClick ? { cursor: 'pointer' } : {}}
    >
      <div className={styles.list_arrow} style={props.small || !props.arrow ? { display: 'none' } : { marginRight: '20px' }}></div>
      <img src={props.img} alt="" className={styles.user_pic} />
      <div className={styles.user_info}>
        <h6 className={styles.user_name} style={!props.small ? {} : { display: 'none' }}>
          {props.name}
        </h6>
        <div className={props.mode === 'popup' ? `${styles.user_email} ${styles.popup}` : `${styles.user_email}`} style={!props.small ? {} : { display: 'none' }}>
          {props.email}
        </div>
      </div>
    </div>
  );
};

export default User;
