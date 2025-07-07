import type { IVacancy } from "@/interfaces/IVacancy.interface";

/** безопасно записываем в local storage */
export function setLocalStorageItem(key: string, data: IVacancy) {
   try {
      localStorage.setItem(key, JSON.stringify(data));
   } catch (error) {
      console.error(error);
   }
}

/** безопасно делаем массив из local storage */
export function localStorageToArray(localStorage: Storage): Array<IVacancy> {
   let arr: Array<IVacancy> = [];

   try {
      arr = Object.values(localStorage).map((v) => JSON.parse(v));
   } catch (error) {
      console.log(error);
   }

   return arr;
}