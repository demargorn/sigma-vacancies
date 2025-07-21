import type { IVacancy } from '@/interfaces/IVacancy.interface';

function getToken(name = 'accessToken') {
   return localStorage.getItem(name);
}

function clearUserProfile() {
   localStorage.removeItem('accessToken');
   localStorage.removeItem('profileID');
   localStorage.removeItem('userID');
   localStorage.removeItem('login');
   localStorage.removeItem('first_name');
   localStorage.removeItem('last_name');
}

function areVacanciesEqual(a: IVacancy, b: IVacancy) {
   const keys = Object.keys(a) as (keyof IVacancy)[];

   for (const key of keys) {
      const valA = a[key];
      const valB = b[key];

      if (Array.isArray(valA) && Array.isArray(valB)) {
         if (valA.length !== valB.length) {
            return false;
         }

         for (let i = 0; i < valA.length; i++) {
            if (valA[i] !== valB[i]) {
               return false;
            }
         }
      } else if (valA !== valB) {
         return false;
      }
   }
   return true;
}

/** форматирует дату */
function formatDate(date: string = '-') {
   const newDate = new Date(date);

   const day = String(newDate.getDate()).padStart(2, '0');
   const month = String(newDate.getMonth() + 1).padStart(2, '0');
   const year = newDate.getFullYear();

   return `${day}.${month}.${year}`;
}

/** склоняет числа по падежам */
function numberPlural(number: number, one: string, two: string, five: string) {
   if (Number.isNaN(number)) return number;

   //	падежи не зависят от знака числа
   let _number = number;
   //	для чисел, больших, чем 100 принципы те же самые
   _number %= 100;
   //	числа, большие 20 склоняются так же, как числа до 10.
   if (_number > 19) _number %= 10;
   //	определеяем падежи
   if (_number == 0 || _number > 4) return five;
   if (_number == 1) return one;
   return two;
}

function getFullname(firstname?: string, lastname?: string, middlename?: string) {
   const fn = firstname || '';
   const ln = lastname || '';
   const mn = middlename || '';

   return `${ln} ${fn} ${mn}`.trim();
}

export { getToken, clearUserProfile, areVacanciesEqual, formatDate, numberPlural, getFullname };
