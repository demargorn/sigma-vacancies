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

export { getToken, clearUserProfile, areVacanciesEqual };
