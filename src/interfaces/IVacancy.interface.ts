import type { TypeStatus } from '@/types/types';

export interface IVacancy {
   id?: string;
   title: string;
   required_employees?: number;
   position?: string;
   short_description?: string;
   requirements?: string;
   responsibilities?: string;
   benefits?: string;
   vacancy_status?: TypeStatus;

   organization_name?: string;
   organization_uuid?: string;
   teams?: string;
   contact_person_name?: string;
   organization_description?: string;
   contact_person_phone?: string;
   contact_person_email?: string;
   contact_person_tg?: string;

   country?: string;
   region?: string;
   city?: string;
   work_format?: string;
   employment_type?: string;
   employment_basis?: string;
   schedule?: string;
   salary_from?: string;
   salary_to?: string;
   currency?: string;
   taxes?: boolean;
   salary_period?: string;
   frequency?: string;

   skills?: Array<string>;
   education?: string;
   experience_required?: string;

   recruiter_name?: string;
   recruiter_phone?: string;
   recruiter_email?: string;
   recruiter_wa?: string;
   recruiter_tg?: string;

   opened_date?: string;
   deadline_date?: string;
   budget_to?: string;
   responsible?: string;

   vacancy_url?: string;
   vacancy_img?: string;
   preview_img?: string;

   checked?: boolean;
   onChange?: (checked: boolean) => void;
}
