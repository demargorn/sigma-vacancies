import type { TypeStatus } from "@/types/status.type";

export interface IVacancy {
  id: string;
  vacancy_name: string;
  places_qty?: number;
  vacancy_description?: string;
  status: TypeStatus;

  company_name: string;
  customer_name: string;
  customer_tel?: string;
  customer_mail?: string;
  customer_telegram?: string;
  customer_whatsapp?: string;

  country?: string;
  city?: string;
  format?: string;
  employment?: string;
  schedule?: string;
  salary_from?: number;
  salary_to?: number;

  selectedSkills?: Array<string>;
  experience?: string;

  opened_date: string;
  closed_date: string;
  budget?: number;
  responsible?: string;

  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
