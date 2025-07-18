import { useEffect, useState, useRef } from 'react';
import styles from './PasswordInput.module.css';

type Props = {
   error: boolean;
   setPassword: (arg: string) => void;
   placeholder: string;
   onEnter?: () => void;
   inFocus?: boolean;
};

const PasswordInput = (props: Props) => {
   const [passStatus, setPassStatus] = useState<string>('password');
   const passwordEl = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (!props.inFocus) {
         return;
      }

      passwordEl.current?.focus();
   }, [props.inFocus]);

   return (
      <div className={styles.pass_container}>
         <input
            type={passStatus}
            autoComplete="new-password"
            className={styles.input_container}
            style={props.error ? { border: '1px solid #e65443' } : {}}
            placeholder={props.placeholder}
            onChange={({ target }) => props.setPassword(target.value)}
            onKeyDown={({ key }) => {
               if (key === 'Enter' && props.onEnter) {
                  props.onEnter();
               }
            }}
            
            ref={passwordEl}
         />
         <button
            type="button"
            className={styles.show_pass_btn}
            onClick={() => {
               if (passStatus === 'password') {
                  setPassStatus('text');
               } else {
                  setPassStatus('password');
               }
            }}
         ></button>
      </div>
   );
};

export default PasswordInput;
