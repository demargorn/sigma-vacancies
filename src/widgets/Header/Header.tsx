import type { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { Breadcrumb } from '@heathmont/moon-core-tw';
import styles from './Header.module.css';

type TypeBreadcrumbsProps = {
  breadcrumbs: Array<ReactNode>;
};

const Header = ({ breadcrumbs }: TypeBreadcrumbsProps) => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.breadcrumbs}>
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>

      <div className={styles.header_input_container}>
        <input type="text" placeholder="Поиск" className={styles.header_input} />
        <button className={styles.header_button_help} title="справка" onClick={() => navigate('/help')}></button>
      </div>
    </header>
  );
};

export default Header;
