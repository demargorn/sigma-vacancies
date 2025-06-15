// import { useNavigate } from 'react-router';

// import { useAppDispatch } from '@/shared/hooks';
// import { resetSliceDep } from '@/app/store/slices/department.store';
// import { resetSliceEmp } from '@/app/store/slices/employee.store';
// import { resetSliceGov } from '@/app/store/slices/government.store';
// import { resetSliceUi } from '@/app//store/slices/ui.store';

// import Cookies from 'js-cookie';
import User from './User';
import styles from './UserMenu.module.css';

type Props = {
  active: boolean;
  setActive: (arg: boolean) => void;
  userName: string;
  userEmail: string;
  userPic: string;
  // sideBar: number;
  small: boolean;
};

// const linkList = [
//   {
//     text: 'Данные профиля',
//     icon: '/imgs/sidebar/menu_icon.svg',
//     link: '',
//     onClick: () => {}
//   }
// ];

const UserMenu = (props: Props) => {
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  // function get_parent_domain() {
  //   const host = window.location.host;
  //   const splitted_host = host.split('.');

  //   if (splitted_host.length == 2) {
  //     return '.' + host;
  //   }

  //   splitted_host[0] = '';

  //   return splitted_host.join('.');
  // }

  const logOut = {
    text: 'Выйти',
    icon: '/imgs/sidebar/log-out.svg',
    link: '/login'

    // onClick: () => {
    //   dispatch(resetSliceDep());
    //   dispatch(resetSliceEmp());
    //   dispatch(resetSliceGov());
    //   dispatch(resetSliceUi());
    //   Cookies.remove('_token');
    //   Cookies.remove('_companyId');
    //   Cookies.remove('_userId');
    //   Cookies.remove('_profileId');
    //   Cookies.remove('_userLogin');
    //   Cookies.remove('_userFirstName');
    //   Cookies.remove('_userLastName');
    //   localStorage.clear();

    //   const domain = get_parent_domain();

    //   Cookies.remove('_token', { domain: `${domain}` });
    //   Cookies.remove('_companyId', { domain: `${domain}` });
    //   Cookies.remove('_userId', { domain: `${domain}` });
    //   Cookies.remove('_profileId', { domain: `${domain}` });
    //   Cookies.remove('_userLogin', { domain: `${domain}` });
    //   Cookies.remove('_userFirstName', { domain: `${domain}` });
    //   Cookies.remove('_userLastName', { domain: `${domain}` });

    //   navigate('/login');
    // }
  };
  return (
    <div className={props.active ? `${styles.container} ${styles.active}` : `${styles.container}`} onClick={() => props.setActive(false)}>
      <div className={props.active ? `${styles.content} ${styles.active}` : `${styles.content}`} onClick={(e) => e.stopPropagation()} style={props.small ? { left: '104px' } : {}}>
        <User mode="popup" arrow={false} name={props.userName} email={props.userEmail} img={props.userPic} small={false} />
        <div className={styles.divider}></div>
        <ul className={styles.link_list}>
          {/* {linkList.map((item) => (
            <li className={styles.link_item} key={item.text}>
              <Link to={item.link} className={styles.link} style={{ backgroundImage: `url(${item.icon})` }}>
                {item.text}
              </Link>
            </li>
          ))} */}
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
