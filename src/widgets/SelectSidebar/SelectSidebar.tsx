import { editingConfig } from './config';
import cn from 'classnames';
import styles from './SelectSidebar.module.css';

type TypeSelectSidebarProps = {
   page: string;
   setPage: (arg: string) => void;
};

const SelectSidebar = (props: TypeSelectSidebarProps) => {
   const handleGetInfo = (item: string) => props.setPage(item);

   return (
      <div className={styles.sidebar_container}>
         <ul className={styles.sidebar_list}>
            {editingConfig.map((item, i) => (
               <li
                  key={item.section}
                  className={props.page === item.section ? cn(styles.sidebar_item, styles.sidebar_item_active) : `${styles.sidebar_item}`}
                  onClick={() => handleGetInfo(item.section)}
               >
                  {`${i + 1}. ${item.info.name}`}
                  <p className={props.page === item.section ? cn(styles.sidebar_description, styles.sidebar_description_active) : `${styles.sidebar_description}`}>{item.info.description}</p>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default SelectSidebar;
