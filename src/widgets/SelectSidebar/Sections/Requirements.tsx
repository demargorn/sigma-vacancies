import { useEffect, useState } from 'react';
import MultiSelect from '@/shared/MultiSelect/MultiSelect';
import styles from './Sections.module.css';

const Requirements = () => {
  const [options, setOptions] = useState<Array<string>>([]); /** список опций */
  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]); /** список выбранных опций */

  // const API = 'адрес реестра навыков';

  /**  запрашиваем навыки с реестра навыков */
  const handleFetchSkills = async () => {
    try {
      // const response = await fetch(API);
      // const data = await response.json();

      setOptions(['Программирование', 'Проектирование', 'Администрирование', 'Чтение', 'ООП']);
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

  const handleSelectionChange = (newOptions: Array<string>) => setSelectedOptions(newOptions);

  /**  очистить опции */
  const handleClear = () => setSelectedOptions([]);

  useEffect(() => {
    handleFetchSkills();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Требование к кандидату</h2>

      <div className={styles.multiselect_container}>
        <MultiSelect options={options} selectedOptions={selectedOptions} onSelectionChange={handleSelectionChange} />
      </div>

      <h2 className={styles.heading}>Требуемый опыт работы</h2>
      <select className={styles.select_status}>
        <option value="s" defaultChecked>
          1 - 3 года
        </option>
        <option value="none">Без опыта</option>
        <option value="m">3 - 6 лет</option>
        <option value="l">более 6 лет</option>
      </select>
    </div>
  );
};

export default Requirements;
