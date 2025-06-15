import { useState } from 'react';
import { Tooltip } from '@heathmont/moon-core-tw';
import User from './User/User';
import UserMenu from './User/UserMenu';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const currentPath = window.location.pathname;
  const [small, setSmall] = useState<boolean>(false);
  const [currentMenu, setCurrentMenu] = useState<string>('');

  const config = {
    logo: {
      img: '/imgs/sidebar/logo.png',
      alt: 'сигма лого',
      link: '/structure'
    },
    setSmall: {
      btnIcon: '/imgs/sidebar/menu-arrow.png',
      onClick: () => setSmall(!small)
    },
    mainMenu: [
      {
        text: 'Главная',
        icon: '/imgs/sidebar/menu_icon.svg',
        // iconActive: '/imgs/sidebar/menu_icon_active.svg',
        link: '/structure',
        expands: false
      },
      {
        text: 'Аналитика',
        icon: '/imgs/sidebar/analytics.svg',
        // iconActive: '/imgs/sidebar/analytics-active.svg',
        expands: true,
        link: '/analyticts',
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
        icon: '/imgs/sidebar/orgs.svg',
        // iconActive: '/imgs/sidebar/orgs-active.svg', // пока нет
        link: '/departments',
        expands: false
      },
      {
        text: 'Сотрудники',
        icon: '/imgs/sidebar/employees.svg',
        // iconActive: '/imgs/sidebar/employees-active.svg', // пока нет
        link: '/employees',
        expands: false
      },
      {
        text: 'Найм сотрудников',
        icon: '/imgs/sidebar/star.svg',
        // iconActive: '/imgs/sidebar/star-active.svg', // пока нет
        link: '/hiring',
        expands: false
      },
      {
        text: 'Опросы',
        icon: '/imgs/sidebar/polls.svg',
        // iconActive: '/imgs/sidebar/polls-active.svg', // пока нет
        options: [
          {
            text: 'Создать опрос',
            link: `/poll/templates`
          },
          {
            text: 'Все опросы',
            link: `/polls/account`
          }
        ]
      },
      {
        text: 'Поиск',
        icon: '/imgs/sidebar/search.svg',
        iconActive: '/imgs/sidebar/search-active.svg',
        expands: true,
        options: [
          {
            text: 'По компетенциям',
            link: '/search/skills/'
          }
        ]
      },

      {
        text: 'Справка',
        icon: '/imgs/sidebar/i-info.svg',
        // iconActive: '/imgs/main/i-info-active.svg', // пока нет
        link: '/help',
        expands: false
      },
      {
        text: 'Уведомления',
        icon: '/imgs/sidebar/notification.svg',
        // iconActive: '/imgs/sidebar/notification-active.svg', // пока нет
        link: '/notifications',
        service: true
      },
      {
        text: 'Настройки',
        icon: '/imgs/sidebar/settings.svg',
        link: '/settings',
        service: true
      }
    ],
    accountInfo: {
      name: 'Мария',
      email: localStorage.getItem('userLogin') || 'mail@mail.ru',
      image: '/imgs/sidebar/avatar.png'
    }
  };

  return (
    <div className={!small ? `${styles.container}` : `${styles.container} ${styles.container_small}`}>
      <button onClick={() => config.setSmall.onClick()} className={!small ? `${styles.menu_btn}` : `${styles.menu_btn} ${styles.menu_btn_small}`}></button>{' '}
      <a href="#" className={styles.logo}>
        <img src={config.logo.img} alt={config.logo.alt} />
      </a>
      <nav className={styles.nav}>
        <ul className={styles.menu_list}>
          {config.mainMenu.map(
            (item) =>
              !item.service && (
                <li key={item.text} className={styles.menu_list_item}>
                  {item.link ? (
                    <Tooltip>
                      <Tooltip.Trigger>
                        <a
                          className={!small ? `${styles.menu_list_link}` : `${styles.menu_list_link} ${styles.menu_list_link_small}`}
                          style={
                            currentMenu === item.text
                              ? { backgroundImage: `url(${item.iconActive})`, backgroundColor: 'var(--accent-color)', color: '#fff', fontWeight: 500 }
                              : { backgroundImage: `url(${item.icon})` }
                          }
                        >
                          {!small ? item.text : ''}
                        </a>
                      </Tooltip.Trigger>
                      <Tooltip.Content position="right" className="tooltip">
                        {item.text}
                        <Tooltip.Arrow />
                      </Tooltip.Content>
                    </Tooltip>
                  ) : (
                    <a
                      className={!small ? `${styles.menu_list_btn}` : `${styles.menu_list_btn} ${styles.menu_list_btn_small}`}
                      style={small && item.options?.find((el) => currentPath.includes(el.link)) ? { backgroundImage: `url(${item.iconActive})` } : { backgroundImage: `url(${item.icon})` }}
                    >
                      {!small ? item.text : ''}
                      <div className={currentMenu === item.text ? `${styles.menu_list_btn_arrow} ${styles.menu_list_btn_arrow_active}` : `${styles.menu_list_btn_arrow}`}></div>
                    </a>
                  )}
                </li>
              )
          )}
        </ul>

        <ul className={`${styles.menu_list} ${styles.menu_list_service}`}>
          {config.mainMenu.map(
            (item) =>
              item.service && (
                <li key={item.text} className={styles.menu_list_item}>
                  <Tooltip>
                    <Tooltip.Trigger>
                      <a
                        className={!small ? `${styles.menu_list_link}` : `${styles.menu_list_link} ${styles.menu_list_link_small}`}
                        style={
                          currentMenu === item.text
                            ? { backgroundImage: `url(${item.iconActive})`, backgroundColor: 'var(--accent-color)', color: '#fff', fontWeight: 500 }
                            : { backgroundImage: `url(${item.icon})` }
                        }
                      >
                        {!small ? item.text : ''}
                      </a>
                    </Tooltip.Trigger>
                    <Tooltip.Content position="right" className="tooltip">
                      {item.text}
                      <Tooltip.Arrow />
                    </Tooltip.Content>
                  </Tooltip>
                </li>
              )
          )}
        </ul>

        <div className={styles.user_menu_container}>
          <User mode="sidebar" arrow={true} name={config.accountInfo.name} email={config.accountInfo.email} img={config.accountInfo.image} small={false} />
          <UserMenu active={false} setActive={() => false} userName={config.accountInfo.name} userEmail={config.accountInfo.email} userPic={config.accountInfo.image} small={false} />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
