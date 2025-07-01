import { useEffect, useState } from 'react';
import Required from '@/shared/Questions/Required/Required';
import type { Question, Answers, Answer } from '@/types/types';
import styles from '@/shared/Questions.module.css';

type TypeTextAreaProps = {
  question: Question;
  disabled: boolean;
  setResponse: (arg: Array<Answers>) => void;
  response: Array<Answers>;
};

const TextArea = (props: TypeTextAreaProps) => {
  const item = props.question;
  const [value, setValue] = useState(item.defaultValue || '');
  const [id, setId] = useState('');
  const [answer, setAnswer] = useState<{
    questionId: string | number;
    text: string;
    answer: Array<Answer>;
  }>({ questionId: item.id, text: item.text, answer: [] });

  useEffect(() => {
    if (id) {
      addValue(id, value.trim());
    }
  }, [value]);

  const addValue = (id: string, value: string) => {
    if (value !== '') {
      setAnswer({ ...answer, answer: [{ id: id, value: value }] });
    } else {
      const filteredArray = props.response.filter((el: { questionId: string | number | undefined; text: string; answer: Array<Answer> }) => el.questionId !== answer.questionId);
      props.setResponse(filteredArray);
    }
  };

  useEffect(() => {
    const matchIndex = props.response.findIndex((el: { questionId: string | number | undefined; text: string; answer: Array<Answer> }) => el.questionId === answer.questionId);
    if (answer.answer.length > 0 && matchIndex < 0) {
      props.setResponse([...props.response, answer]);
    } else {
      const newResponse = props.response.map((el: { questionId: string | number | undefined; text: string; answer: Array<Answer> }) => {
        if (el.questionId === answer.questionId) {
          el = answer;
        }
        return el;
      });
      props.setResponse(newResponse);
    }
  }, [answer]);

  return (
    <label className={styles.question_container}>
      <span className={styles.question_label}>{item.text}</span>
      <Required required={item.required} decor={false} />
      <p className={styles.question_description} style={item.description ? {} : { display: 'none' }}>
        {item.description}
      </p>
      <textarea
        className={styles.textarea_input}
        placeholder={value || 'Введите текст'}
        rows={3}
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          setId(`${item.id}-1`);
        }}
        disabled={!props.disabled ? false : true}
      />
    </label>
  );
};

export default TextArea;
