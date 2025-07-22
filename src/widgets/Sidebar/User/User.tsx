import cn from 'classnames';
import styles from './User.module.css';

type Props = {
   img: string;
   small: boolean;
   onClick?: (arg: boolean) => void;
   menuActive?: boolean;
   arrow: boolean;
   mode: string;
};

const User = (props: Props) => {
   const userFirstName = localStorage.getItem('first_name');
   const userLastName = localStorage.getItem('last_name');
   const userLogin = localStorage.getItem('login');

   const handleOpenMenu = () => {
      if (props.onClick) {
         props.menuActive ? props.onClick(false) : props.onClick(true);
      } else {
         return;
      }
   };

   return (
      <div
         className={props.mode === 'popup' ? cn(styles.user, styles.user_popup) : props.menuActive ? cn(styles.user, styles.user_active) : `${styles.user}`}
         style={props.onClick ? { cursor: 'pointer' } : {}}
         onClick={handleOpenMenu}
      >
         <div className={styles.list_arrow} style={props.small || !props.arrow ? { display: 'none' } : { marginRight: '20px' }}></div>
         <img src={props.img} alt="user avatar" className={styles.user_pic} />
         <div className={styles.user_info}>
            <h6 className={styles.user_name} style={!props.small ? {} : { display: 'none' }}>
               {userFirstName} {userLastName}
            </h6>
            <div className={props.mode === 'popup' ? cn(styles.user_email, styles.popup) : `${styles.user_email}`} style={!props.small ? {} : { display: 'none' }}>
               {userLogin}
            </div>
         </div>
      </div>
   );
};

export default User;
