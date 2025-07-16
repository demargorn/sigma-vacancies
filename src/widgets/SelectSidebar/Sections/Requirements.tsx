import { useEffect, useState } from 'react';
import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import MultiSelect from '@/shared/components/MultiSelect/MultiSelect';
import styles from './Sections.module.css';

/** Создание новой вакансии. Требования к кандидату */

const Requirements = () => {
   const { vacancy, handleFieldChange } = useVacancyForm(); /** вакансия */
   const [skills, setSkills] = useState<Array<string>>([]); /** список навыков */
   const [selectedSkills, setSelectedSkills] = useState<Array<string>>([]); /** список выбранных навыков */

   // const API = 'адрес реестра навыков';

   /**  запрашиваем навыки с реестра навыков */
   const handleFetchSkills = async () => {
      try {
         // const response = await fetch(API);
         // const data = await response.json();

         setSkills(['Программирование', 'Проектирование', 'Администрирование', 'Чтение', 'ООП']);
      } catch (error) {
         console.error('Error fetching:', error);
      }
   };

   const handleSelectionChange = (newOptions: Array<string>) => setSelectedSkills(newOptions);

   useEffect(() => {
      handleFetchSkills();
   }, []);

   return (
      <div className={styles.container}>
         <h2 className={styles.heading} style={{ marginBottom: '32px' }}>
            Требование к кандидату
         </h2>

         <div className={styles.input_label}>Навыки</div>
         <div className={styles.multiselect_container}>
            <MultiSelect skills={skills} selectedSkills={selectedSkills} onSelectionChange={handleSelectionChange} />
         </div>

         <div className={styles.input_label}>Требуемый опыт работы</div>
         <select name="experience" value={vacancy.experience} className={styles.select_status} onChange={handleFieldChange}>
            <option value="none" defaultChecked>
               Без опыта
            </option>
            <option value="1-3">1 - 3 года</option>
            <option value="3-6">3 - 6 лет</option>
            <option value="over_6">более 6 лет</option>
         </select>
      </div>
   );
};

export default Requirements;
