import { useEffect, useState } from 'react';
import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import axios from 'axios';
import { skills } from '@/shared/utilities/skills';
import type { ISkill } from '@/interfaces/ISkill.interface';
import MultiSelect from '@/shared/components/MultiSelect/MultiSelect';
import { PROJECT_ID } from '@/shared/utilities/constants';
import styles from './Sections.module.css';

/** Создание новой вакансии. Требования к кандидату */

const Requirements = () => {
   const { vacancy, handleFieldChange } = useVacancyForm(); /** вакансия */
   const [skillsArr, setSkillsArr] = useState<Array<ISkill>>([]); /** список навыков */
   const [selectedSkills, setSelectedSkills] = useState<Array<string>>([]); /** список выбранных навыков */

   // const API = 'https://goods.test.hashhedge.com/goods';

   /** запрашиваем навыки с сервиса навыков */
   // const handleFetchSkills = async () => {
   //    try {
   //       const { data } = await axios.get(API, {
   //          headers: {
   //             accept: 'application/json',
   //             PROJECT_ID: PROJECT_ID
   //          }
   //       });

   //       console.log(data);
   //    } catch (error) {
   //       console.error('Error fetching:', error);
   //    }
   // };

   const handleSelectionChange = (newOptions: Array<string>) => setSelectedSkills(newOptions);

   useEffect(() => {
      setSkillsArr(skills);
   }, []);

   return (
      <article className={styles.container}>
         <h2 className={styles.heading} style={{ marginBottom: '32px' }}>
            Требование к кандидату
         </h2>

         <div className={styles.skills_container}>
            <label htmlFor="skills" className={styles.input_label}>
               Навыки
            </label>
            <div id="skills" className={styles.multiselect_container}>
               <MultiSelect skills={skillsArr.map((skill) => skill.data.title)} selectedSkills={selectedSkills} onSelectionChange={handleSelectionChange} />
            </div>
         </div>

         <div className={styles.experience_container}>
            <label htmlFor="experience" className={styles.input_label}>
               Требуемый опыт работы
            </label>
            <select id="experience" name="experience" value={vacancy.experience} className={styles.select_status} onChange={handleFieldChange}>
               <option value="none" defaultChecked>
                  Без опыта
               </option>
               <option value="1-3">1 - 3 года</option>
               <option value="3-6">3 - 6 лет</option>
               <option value="over_6">более 6 лет</option>
            </select>
         </div>
      </article>
   );
};

export default Requirements;
