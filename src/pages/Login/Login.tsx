import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { apiService } from '@/shared/services';
import type { TypeDispatch } from '@/app/store/store';
import { loginActions } from '@/app/store/slices/login.slice';
import type { LoginInfo } from '@/types/types';
import Loader from '@/shared/components/Loader/Loader';
import PasswordInput from '@/shared/components/PasswordInput/PasswordInput';
import styles from './Login.module.css';

const Login = () => {
   const [login, setLogin] = useState<string>(''); /** логин пользователя */
   const [password, setPassword] = useState<string>(''); /** пароль пользователя */
   const [mode, setMode] = useState<string>('login');
   const [error, setError] = useState<boolean>(false);
   const [loading, setLoading] = useState<boolean>(false);
   const [passFocus, setPassFocus] = useState<boolean>(false);
   const [newPass, setNewPass] = useState<string>(''); /** новый пароль */
   const [newPassRepeat, setNewPassRepeat] = useState(''); /** повтор нового пароля */

   const dispatch = useDispatch<TypeDispatch>();
   const navigate = useNavigate();

   const handleLogin = async () => {
      if (!login || !password) {
         return;
      }

      setLoading(true);

      await apiService
         .request({
            name: 'postLoginInfo',
            payload: { username: login, password }
         })
         .then((response: any) => {
            const data: LoginInfo = response.data.data[0];

            localStorage.setItem('accessToken', data.auth_data.access_token);
            localStorage.setItem('userId', data.user_data.user_id);
            localStorage.setItem('profileId', data.profile_data.profile_id || '');
            localStorage.setItem('userLogin', data.user_data.login);
            localStorage.setItem('userFirstName', data.profile_data.first_name || '');
            localStorage.setItem('userLastName', data.profile_data.last_name || '');

            dispatch(loginActions.setToken(data.auth_data.access_token));

            setLoading(false);

            navigate('/');
         })
         .catch((err: any) => {
            console.log('Login error: ', err);
            setLoading(false);
            setError(true);
         });

      setPassFocus(false);
   };

   useEffect(() => {
      if (localStorage.getItem('accessToken')) {
         navigate('/vacancies');
      }
      if (window.location.pathname.includes('passwordChange')) {
         setMode('passwordChange');
      }
   }, []);

   useEffect(() => {
      if (!error) {
         return;
      }

      setError(false);
   }, [login, password]);

   return (
      <article className={styles.container}>
         <main className={styles.main}>
            <img src="imgs/sidebar/logo.png" alt="сигма лого" className={styles.logo} />
            <h1 className={styles.heading} style={mode !== 'login' ? { marginBottom: 0 } : {}}>
               {mode === 'login' ? 'Авторизация' : 'Смена пароля'}
            </h1>
            <p className={styles.desc} style={mode === 'login' ? { display: 'none' } : {}}>
               Вам необходимо придумать новый пароль для вашего аккаунта
            </p>
            {mode === 'login' ? (
               <form className={styles.form} autoComplete="false">
                  <input
                     type="text"
                     style={error ? { border: '1px solid #e65443' } : {}}
                     autoComplete="false"
                     placeholder="Логин"
                     className={styles.input}
                     onChange={({ target }) => setLogin(target.value)}
                     onKeyDown={({ key }) => {
                        if (key === 'Enter') {
                           if (password) {
                              handleLogin();
                           } else {
                              setPassFocus(true);
                           }
                        }
                     }}
                  />

                  <PasswordInput setPassword={setPassword} error={error} placeholder="Пароль" onEnter={handleLogin} inFocus={passFocus} />

                  <div className={styles.error} style={error ? {} : { display: 'none' }}>
                     Неверный логин или пароль
                  </div>
                  <button type="button" className={styles.btn} disabled={!password || !login || error} style={error ? { marginTop: 0 } : {}} onClick={handleLogin}>
                     {!loading ? 'Войти' : <Loader />}
                  </button>
               </form>
            ) : (
               <form className={styles.form} autoComplete="false">
                  <PasswordInput placeholder="Новый пароль" error={error} setPassword={setNewPass} />
                  <PasswordInput placeholder="Повторите пароль" error={error} setPassword={setNewPassRepeat} />
                  <div className={styles.error} style={error ? {} : { display: 'none' }}>
                     Пароли не совпадают
                  </div>
                  <button
                     className={styles.btn}
                     type="button"
                     disabled={!newPass || !newPassRepeat}
                     style={error ? { marginTop: 0 } : {}}
                     onClick={() => {
                        if (newPass !== newPassRepeat) {
                           setError(true);
                        } else {
                           setError(false);
                        }
                     }}
                  >
                     Сменить пароль
                  </button>
               </form>
            )}
         </main>
      </article>
   );
};

export default Login;
