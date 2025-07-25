import type { TypeStatus } from '@/types/types';

export interface IVacancy {
   id: string;
   vacancy_name: string;
   places_qty?: number;
   position: string;
   vacancy_description?: string;
   candidate_requirements: string;
   candidate_responsibilities: string;
   working_conditions: string;
   status: TypeStatus;

   company_name: string;
   company_id: string;
   customer_name: string;
   customer_contact_person: string;
   company_description: string;
   customer_tel?: string;
   customer_mail?: string;
   customer_telegram?: string;
   customer_whatsapp?: string;

   country?: string;
   region?: string;
   city?: string;
   format?: string;
   employment?: string;
   employment_form?: string;
   schedule?: string;
   salary_from?: string;
   salary_to?: string;
   currency: string;
   after_taxes: boolean;
   period: string;
   frequency: string;

   selectedSkills?: Array<string>;
   education: string;
   experience?: string;

   opened_date: string;
   closed_date: string;
   budget?: string;
   responsible?: string;

   details?: string;
   vacancy_img?: string;
   preview_img?: string;

   checked?: boolean;
   onChange?: (checked: boolean) => void;
}
