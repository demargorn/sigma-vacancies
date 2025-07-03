import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import cn from 'classnames';
import styles from '@/widgets/SelectSidebar/Sections/Sections.module.css';

type TypeMultiSelectProps = {
  options: Array<string>;
  selectedOptions: Array<string>;
  onSelectionChange: (s: Array<string>) => void;
};

const MultiSelect = (props: TypeMultiSelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); /** открыт/закрыт выпадающий список */
  const [query, setQuery] = useState<string>(''); /** поисковый запрос */

  const ref = useRef<HTMLDivElement>(null);

  // проверяем, что клик мимо выпадающего списка
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
    const isSelected = props.selectedOptions.some((item) => item === option);

    const newSelection = isSelected ? props.selectedOptions.filter((item) => item !== option) : [...props.selectedOptions, option];

    props.onSelectionChange(newSelection);
  };

  /** удалить опцию */
  const handleRemoveOption = (option: string) => props.onSelectionChange(props.selectedOptions.filter((item) => item !== option));

  /** очистить выбранные опции */
  const handleClearAll = () => props.onSelectionChange([]);

  /** создаем отфильтрованный массив по поисковому слову */
  const filteredOptions = props.options.filter((option) => option.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  });

  return (
    <div className={styles.label_container} ref={ref}>
      <div className={cn(styles.multiselect_checked_items_container, styles.select_status)} onClick={handleToggleDropdown}>
        {props.selectedOptions.length === 0 && <span className={styles.input_label}>Выберите навыки</span>}

        {props.selectedOptions.map((option, i) => (
          <div key={i} className={styles.multiselect_checked_items_container}>
            <span className={styles.multiselect_checked_items}>{option}</span>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleRemoveOption(option);
              }}
              title="удалить"
              className={styles.multiselect_item_close}
            ></button>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="w-full border rounded bg-white z-10">
          <input type="text" placeholder="Введите навык" value={query} onChange={handleSearch} className={styles.input_text} />

          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className={styles.multiselect_dropdown_items}>Ничего не найдено. Попробуйте другую формулировку</div>
            ) : (
              filteredOptions.map((option) => {
                return (
                  <div key={option} onClick={() => handleOptionClick(option)} className={styles.multiselect_dropdown_items}>
                    {option}
                  </div>
                );
              })
            )}
          </div>

          {/** кнопка очистки навыков если потребуется */}
          {/* {props.selectedOptions.length > 0 && (
            <div className="border-t p-2">
              <button onClick={handleClearAll} className="text-red-500 hover:text-red-700">
                Очистить
              </button>
            </div>
          )} */}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
