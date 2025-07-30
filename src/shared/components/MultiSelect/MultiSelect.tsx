import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { useVacancyForm } from '@/shared/hooks/useVacancyForm';
import type { TypeDispatch } from '@/app/store/store';
import { vacanciesActions } from '@/app/store/slices/vacancies.slice';
import styles from '@/widgets/SelectSidebar/Sections/Sections.module.css';

type TypeMultiSelectProps = {
   skills: Array<string>;
   selectedSkills: Array<string>;
   onSelectionChange: (s: Array<string>) => void;
};

const MultiSelect = (props: TypeMultiSelectProps) => {
   const { vacancy } = useVacancyForm(); /** вакансия */
   const [isOpen, setIsOpen] = useState<boolean>(false); /** открыт/закрыт выпадающий список */
   const [query, setQuery] = useState<string>(''); /** поисковый запрос */

   const ref = useRef<HTMLDivElement>(null);
   const dispatch = useDispatch<TypeDispatch>();

   /** проверяем, если клик мимо выпадающего списка */
   const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (ref.current && target && !ref.current.contains(target)) {
         setIsOpen(false);
      }
   };

   const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => setQuery(target.value);

   /** открыть/закрыть выпадающий список */
   const handleToggleDropdown = () => setIsOpen((prev) => !prev);

   /** выбрать опцию */
   const handleOptionClick = (option: string) => {
      const isSelected = props.selectedSkills.some((skill) => skill === option);

      const newSelection = isSelected ? props.selectedSkills.filter((skill) => skill !== option) : [...props.selectedSkills, option];

      props.onSelectionChange(newSelection);
      newSelection.map((s) => dispatch(vacanciesActions.addVacancySelectedSkills(s)));
   };

   /** удалить опцию */
   const handleRemoveOption = (option: string) => {
      props.onSelectionChange(props.selectedSkills.filter((skill) => skill !== option));
      dispatch(vacanciesActions.deleteVacancySelectedSkills(option));
   };

   /** создаем отфильтрованный массив по поисковому слову */
   const filteredOptions = props.skills.filter((skill) => skill.toLowerCase().includes(query.toLowerCase()));

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
   });

   return (
      <div className={styles.label_container} ref={ref}>
         <div className={cn(styles.multiselect_checked_items_container, styles.select_status)} onClick={handleToggleDropdown}>
            {vacancy.skills?.length === 0 && <span className={styles.input_label}>Выберите навыки</span>}

            {vacancy.skills?.map((skill, i) => (
               <div key={i} className={styles.multiselect_checked_items_container}>
                  <span className={styles.multiselect_checked_items}>{skill}</span>
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                        handleRemoveOption(skill);
                     }}
                     title="удалить навык из списка"
                     className={styles.multiselect_item_close}
                  ></button>
               </div>
            ))}
         </div>

         {isOpen && (
            <div className={styles.dropdown_container}>
               <input type="text" placeholder="Введите навык" value={query} onChange={handleSearch} className={styles.input_text} />

               <div className={styles.multiselect_dropdown_items}>
                  {filteredOptions.length === 0 ? (
                     <div className={styles.multiselect_dropdown_item}>Ничего не найдено</div>
                  ) : (
                     filteredOptions.map((option) => {
                        return (
                           <div key={option} onClick={() => handleOptionClick(option)} className={styles.multiselect_dropdown_item}>
                              {option}
                              {/* <input type="checkbox" name="option_checkbox" className={styles.multiselect_dropdown_item_checkbox} /> */}
                           </div>
                        );
                     })
                  )}
               </div>
            </div>
         )}
      </div>
   );
};

export default MultiSelect;
