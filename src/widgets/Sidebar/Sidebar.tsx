import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import cn from 'classnames';
import { Tooltip } from '@heathmont/moon-core-tw';
import User from './User/User';
import UserMenu from './User/UserMenu';
import styles from './Sidebar.module.css';

const Sidebar = () => {
   const location = useLocation();
   const currentURL = location.pathname + location.search + location.hash;
   const access_token = localStorage.getItem('accessToken');

   const [small, setSmall] = useState<boolean>(false); /** большой/маленький интерфейс side-бара */
   const [currentMenu, setCurrentMenu] = useState<string>(''); /** текущий активный пункт меню */
   const [menuActive, setMenuActive] = useState<boolean>(false); /** показываем/скрываем меню пользователя */

   /** скрываем side-бар при логине */
   const style = !access_token ? { display: 'none' } : {};

   const config = {
      logo: {
         img: 'imgs/sidebar/logo.png',
         alt: 'сигма лого',
         link: '/'
      },
      setSmall: {
         btnIcon: 'imgs/sidebar/menu-arrow.png',
         onClick: () => setSmall(!small)
      },
      mainMenu: [
         {
            text: 'Главная',
            icon: 'imgs/sidebar/menu.svg',
            iconActive: 'imgs/sidebar/menu_active.svg',
            link: '/',
            expands: false
         },
         {
            text: 'Аналитика',
            icon: 'imgs/sidebar/analytics.svg',
            iconActive: 'imgs/sidebar/analytics-active.svg',
            expands: true,
            link: '/analytics',
            options: [
               {
                  text: 'Движение персонала',
                  link: 'staff'
               },
               {
                  text: 'Вовлеченность и лояльность',
                  link: 'engagement'
               },
               {
                  text: 'Компетентность',
                  link: '360'
               },
               {
                  text: 'Команда',
                  link: 'team'
               },
               {
                  text: 'Сравнение ОИВ',
                  link: 'departmentcomparison'
               }
            ]
         },
         {
            text: 'Орг. структура',
            icon: 'imgs/sidebar/orgs.svg',
            iconActive: 'imgs/sidebar/orgs-active.svg',
            link: '/departments',
            expands: false
         },
         {
            text: 'Сотрудники',
            icon: 'imgs/sidebar/employees.svg',
            iconActive: 'imgs/sidebar/employees-active.svg',
            link: '/employees',
            expands: false
         },
         {
            text: 'Найм сотрудников',
            icon: 'imgs/sidebar/star.svg',
            iconActive: 'imgs/sidebar/star-active.svg',
            link: '/vacancies',
            expands: false
         },
         {
            text: 'Опросы',
            icon: 'imgs/sidebar/polls.svg',
            iconActive: '/imgs/sidebar/polls-active.svg',
            options: [
               {
                  text: 'Создать опрос',
                  link: `/poll/templates`
               },
               {
                  text: 'Мои опросы',
                  link: `/polls/account`
               },
               {
                  text: 'Опросы организации',
                  link: `/polls/company-polls`
               }
            ]
         },
         {
            text: 'Поиск',
            icon: 'imgs/sidebar/search.svg',
            iconActive: 'imgs/sidebar/search-active.svg',
            expands: true,
            options: [
               {
                  text: 'По компетенциям',
                  link: '/search/skills/'
               },
               {
                  text: 'По личным данным',
                  link: '/search/profile/'
               }
            ]
         },

         {
            text: 'Справка',
            icon: 'imgs/sidebar/help.svg',
            iconActive: 'imgs/sidebar/help-active.svg',
            link: '/help',
            expands: false
         },
         {
            text: 'Уведомления',
            icon: 'imgs/sidebar/notifications.svg',
            iconActive: 'imgs/sidebar/notifications-active.svg',
            link: '/notifications',
            service: true
         },
         {
            text: 'Настройки',
            icon: 'imgs/sidebar/settings.svg',
            iconActive: 'imgs/sidebar/settings-active.svg',
            link: '/settings',
            service: true
         }
      ],
      accountInfo: {
         image: 'imgs/sidebar/avatar.png'
      }
   };

   useEffect(() => {
      if (currentURL.includes('/')) setCurrentMenu('Главная');
      if (currentURL.includes('analytics')) setCurrentMenu('Аналитика');
      if (currentURL.includes('departments')) setCurrentMenu('Орг. структура');
      if (currentURL.includes('employees')) setCurrentMenu('Сотрудники');
      if (currentURL.includes('vacancies')) setCurrentMenu('Найм сотрудников');
      if (currentURL.includes('polls') || currentURL.includes('poll')) setCurrentMenu('Опросы');
      if (currentURL === '/search/skills/') setCurrentMenu('Поиск');
      if (currentURL.includes('help')) setCurrentMenu('Справка');
      if (currentURL.includes('notifications')) setCurrentMenu('Уведомления');
      if (currentURL.includes('settings')) setCurrentMenu('Настройки');
   });

   return (
      <div className={!small ? `${styles.container}` : cn(styles.container, styles.container_small)} style={style}>
         <button onClick={() => config.setSmall.onClick()} className={!small ? `${styles.menu_btn}` : `${styles.menu_btn} ${styles.menu_btn_small}`}></button>
         <Link to="/" className={styles.logo}>
            <img src={config.logo.img} alt={config.logo.alt} />
         </Link>
         <nav className={styles.nav}>
            <ul className={styles.menu_list}>
               {config.mainMenu.map(
                  (item) =>
                     !item.service && (
                        <li key={item.text} className={styles.menu_list_item}>
                           {item.link ? (
                              <Tooltip>
                                 <Tooltip.Trigger>
                                    <Link
                                       to={item.link}
                                       className={small ? cn(styles.menu_list_link, styles.menu_list_link_small) : styles.menu_list_link}
                                       style={
                                          currentMenu === item.text
                                             ? { backgroundImage: `url(${item.iconActive})`, backgroundColor: 'var(--main-color)', color: '#fff' }
                                             : { backgroundImage: `url(${item.icon})` }
                                       }
                                    >
                                       {small ? '' : item.text}
                                    </Link>
                                 </Tooltip.Trigger>
                              </Tooltip>
                           ) : (
                              <div
                                 className={!small ? styles.menu_list_btn : cn(styles.menu_list_btn, styles.menu_list_btn_small)}
                                 style={small && item.options?.find((el) => currentURL.includes(el.link)) ? { backgroundImage: `url(${item.iconActive})` } : { backgroundImage: `url(${item.icon})` }}
                                 onClick={() => {
                                    currentURL !== item.text ? setCurrentMenu(item.text) : setCurrentMenu('');
                                 }}
                              >
                                 {!small ? item.text : ''}
                                 <div className={currentMenu === item.text ? cn(styles.menu_list_btn_arrow, styles.menu_list_btn_arrow_active) : `${styles.menu_list_btn_arrow}`}></div>
                              </div>
                           )}
                        </li>
                     )
               )}
            </ul>

            <div className={styles.divider}></div>

            <ul className={cn(styles.menu_list, styles.menu_list_service)}>
               {config.mainMenu.map(
                  (item) =>
                     item.service && (
                        <li key={item.text} className={styles.menu_list_item}>
                           <Tooltip>
                              <Tooltip.Trigger>
                                 <Link
                                    to={item.link}
                                    className={small ? cn(styles.menu_list_link, styles.menu_list_link_small) : styles.menu_list_link}
                                    style={
                                       currentMenu === item.text
                                          ? { backgroundImage: `url(${item.iconActive})`, backgroundColor: 'var(--main-color)', color: '#fff', fontWeight: 500 }
                                          : { backgroundImage: `url(${item.icon})` }
                                    }
                                 >
                                    {!small ? item.text : ''}
                                 </Link>
                              </Tooltip.Trigger>
                           </Tooltip>
                        </li>
                     )
               )}
            </ul>

            <div className={styles.divider}></div>

            <div className={styles.user_menu_container}>
               <User mode="sidebar" arrow={true} img={config.accountInfo.image} small={false} onClick={setMenuActive} menuActive={menuActive} />
               <UserMenu active={menuActive} setActive={setMenuActive} userPic={config.accountInfo.image} small={false} />
            </div>
         </nav>
      </div>
   );
};

export default Sidebar;
