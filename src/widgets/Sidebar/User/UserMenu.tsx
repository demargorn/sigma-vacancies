import User from './User';
import styles from './UserMenu.module.css';

type Props = {
  active: boolean;
  setActive: (arg: boolean) => void;
  userName: string;
  userEmail: string;
  userPic: string;
  small: boolean;
};

const UserMenu = (props: Props) => {
  const logOut = {
    text: 'Выйти',
    icon: 'imgs/sidebar/log-out.svg',
    link: '/login'
  };

  return (
    <div className={props.active ? `${styles.container} ${styles.active}` : `${styles.container}`} onClick={() => props.setActive(false)}>
      <div className={props.active ? `${styles.content} ${styles.active}` : `${styles.content}`} onClick={(e) => e.stopPropagation()} style={props.small ? { left: '104px' } : {}}>
        <User mode="popup" arrow={false} name={props.userName} email={props.userEmail} img={props.userPic} small={false} />
        <div className={styles.divider}></div>
        <ul className={styles.link_list}>
          <li className={styles.link_item}>
            <button className={styles.link} style={{ backgroundImage: `url(${logOut.icon})`, marginBottom: 0 }}>
              {logOut.text}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
