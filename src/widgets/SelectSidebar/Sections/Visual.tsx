import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { templateEditActions } from '@/app/store/slices/templateEditSlice';
import type { TypeDispatch, TypeRootState } from '@/app/store/store';
import styles from './Sections.module.css';
// попросить вику добавить ошибку

const Visual = () => {
  const savedColor = useSelector((s: TypeRootState) => s.templateEdit.themeColor);
  const [color, setColor] = useState(savedColor || '#7589B1');
  const [preColor, setPreColor] = useState(color);
  const [err, setErr] = useState(false);
  const dispatch = useDispatch<TypeDispatch>();

  const changeColor = (color: string) => {
    const regex = /^#([A-Fa-f0-9]{6})$/;
    const match = regex.exec(color);

    if (match) {
      setColor(color);
    } else {
      setErr(true);
    }
  };

  useEffect(() => {
    preColor !== color ? setPreColor(color) : {};
    setErr(false);
    dispatch(templateEditActions.addThemeColor({ themeColor: color }));
  }, [color]);

  useEffect(() => {
    changeColor(preColor);
  }, [preColor]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Оформление страницы опроса</h2>
      <p className={styles.description}>Вы можете задать корпоративный цвет для страницы данного опроса</p>
      <label className={styles.input_container}>
        <div className={styles.input_label}>Цвет страницы опроса</div>
        <div className={styles.container_color}>
          <input className={styles.input_text_color} maxLength={7} type="text" value={preColor} onChange={(e) => setPreColor(e.target.value)} />
          <input className={styles.input_color} type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
      </label>
      <span className={styles.err} style={err ? {} : { display: 'none' }}>
        Вы ввели неправильный HEX код. HEX код должен начинаться с # и содержать 6 символов: это могут быть любые числа или следующие буквы латинского алфавита: A, B, C, В, E, F
      </span>
    </div>
  );
};

export default Visual;
