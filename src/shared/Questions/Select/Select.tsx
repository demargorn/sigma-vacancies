import { useState, useEffect } from 'react';
import Required from '@/shared/Questions/Required/Required';
import type { Options, Question, Answers, Answer } from '@/types/types';
import styles from '@/shared/Questions.module.css';

type TypeSelectProps = {
  question: Question;
  disabled: boolean;
  setResponse: (arg: Array<Answers>) => void;
  response: Array<Answers>;
};

const Select = (props: TypeSelectProps) => {
  const item = props.question;

  const [answerId, setAnswerId] = useState<string>('');
  const [answerValue, setAnswerValue] = useState<string>('');
  const [answer, setAnswer] = useState<{
    questionId: string | number;
    text: string;
    answer: Array<Answer>;
  }>({ questionId: item.id, text: item.text, answer: [] });

  useEffect(() => {
    if (answerId === `${item.id}-0`) {
      setAnswerValue('');
      return;
    }
    if (answerId !== '') {
      const value = item.options?.filter((el) => el.id === answerId)[0].value;
      if (value) setAnswerValue(value);
    }
  }, [answerId]);

  useEffect(() => {
    if (answerValue !== '') {
      setAnswer({ ...answer, answer: [{ value: answerValue, id: answerId }] });
    } else {
      setAnswer({ ...answer, answer: [] });
    }
  }, [answerValue]);

  useEffect(() => {
    const matchIndex = props.response.findIndex((el: { questionId: string | number | undefined; text: string; answer: Array<Answer> }) => el.questionId === answer.questionId);
    if (answer.answer.length > 0) {
      if (props.response.length === 0 || matchIndex < 0) {
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
    } else {
      if (props.response.length !== 0 || matchIndex > 0) {
        const filteredArray = props.response.filter((el: { questionId: string | number | undefined; text: string; answer: Array<Answer> }) => el.questionId !== answer.questionId);
        props.setResponse(filteredArray);
      }
    }
  }, [answer]);

  return (
    <div className={styles.question_container}>
      <span className={styles.question_label}>{item.text}</span>
      <Required required={item.required} decor={false} />
      <select
        name=""
        id=""
        className={styles.select}
        disabled={props.disabled}
        onChange={(e) => {
          setAnswerId(e.target.value);
        }}
      >
        <option className={styles.select_option} value={`${item.id}-0`}>
          Выберите из списка
        </option>
        {item.options?.map((item: Options) => {
          return (
            <option className={styles.select_option} value={item.id} key={item.id}>
              {item.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
