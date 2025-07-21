import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import type { TypeDispatch } from '@/app/store/store';
import { profileActions } from '@/app/store/slices/profile.slice';
import { clearUserProfile } from '@/shared/utilities/utils';
import User from './User';
import styles from './UserMenu.module.css';

type Props = {
   active: boolean;
   setActive: (arg: boolean) => void;
   userPic: string;
   small: boolean;
};

const UserMenu = (props: Props) => {
   const dispatch = useDispatch<TypeDispatch>();
   const navigate = useNavigate();

   const userData = {
      text: 'Мой профиль',
      icon: 'imgs/sidebar/user.svg',
      link: '/profile'
   };

   const logOut = {
      text: 'Выйти',
      icon: 'imgs/sidebar/log-out.svg',
      link: '/login'
   };

   /** выход из профиля */
   const handleLogOut = () => {
      clearUserProfile();
      dispatch(profileActions.clearProfile());
      navigate('/login');
   };

   return (
      <div className={props.active ? cn(styles.container, styles.active) : `${styles.container}`} onClick={() => props.setActive(false)}>
         <div className={props.active ? cn(styles.content, styles.active) : `${styles.content}`} onClick={(e) => e.stopPropagation()} style={props.small ? { left: '104px' } : {}}>
            <User mode="popup" arrow={false} img={props.userPic} small={false} />
            <div className={styles.divider}></div>
            <ul className={styles.link_list}>
               <li className={styles.link_item}>
                  <button className={styles.link} style={{ backgroundImage: `url(${userData.icon})` }}>
                     {userData.text}
                  </button>
               </li>
               <li className={styles.link_item}>
                  <button className={styles.link} style={{ backgroundImage: `url(${logOut.icon})` }} onClick={handleLogOut}>
                     {logOut.text}
                  </button>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default UserMenu;
