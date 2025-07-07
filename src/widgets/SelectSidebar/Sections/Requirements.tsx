import { useEffect, useState, type ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import MultiSelect from '@/shared/MultiSelect/MultiSelect';
import styles from './Sections.module.css';

/** Создание новой вакансии. Требования к кандидату */

const Requirements = () => {
  const vacancy = useSelector((s: TypeRootState) => s.vacancies.vacancy); /** вакансия */
  const dispatch = useDispatch<TypeDispatch>();

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

  const handleVacancyExperienceChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    dispatch(vacanciesActions.addVacancyExperience(target.value));
  };

  const handleSelectionChange = (newOptions: Array<string>) => {
    setSelectedSkills(newOptions);
  };

  useEffect(() => {
    handleFetchSkills();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Требование к кандидату</h2>

      <div className={styles.multiselect_container}>
        <MultiSelect skills={skills} selectedSkills={selectedSkills} onSelectionChange={handleSelectionChange} />
      </div>

      <h2 className={styles.heading}>Требуемый опыт работы</h2>
      <select name="experience" value={vacancy.experience} className={styles.select_status} onChange={handleVacancyExperienceChange}>
        <option value="none" defaultChecked>
          Без опыта
        </option>
        <option value="s">1 - 3 года</option>
        <option value="m">3 - 6 лет</option>
        <option value="l">более 6 лет</option>
      </select>
    </div>
  );
};

export default Requirements;
