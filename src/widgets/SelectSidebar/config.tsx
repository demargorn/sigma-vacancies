// @ts-nocheck
import { Company, CustomerInfo, MainInfo, Job, OrganizationalInfo, Preview, Requirements, Contacts, Additionally } from '@/widgets/SelectSidebar/Sections';
import type { EditPageProps } from '@/types/types';

export const editingConfig = [
   {
      section: 'MainInfo',
      info: {
         name: 'Основная информация',
         description: 'Название, описание и статус вакансии',
         page: () => <MainInfo />,
         nextLink: 'Customer',
         prevLink: ''
      }
   },
   {
      section: 'Customer',
      info: {
         name: 'Заказчик',
         description: 'Информация о заказчике вакансии, для внутреннего пользования',
         page: () => <CustomerInfo />,
         nextLink: 'Company',
         prevLink: 'MainInfo'
      }
   },
   {
      section: 'Company',
      info: {
         name: 'О компании',
         description: 'Информация об организации, в которую требуется сотрудник',
         page: () => <Company />,
         nextLink: 'Job',
         prevLink: 'Customer'
      }
   },
   {
      section: 'Job',
      info: {
         name: 'О должности',
         description: 'Формат, занятость, график, заработная плата',
         page: () => <Job />,
         nextLink: 'Requirements',
         prevLink: 'Company'
      }
   },
   {
      section: 'Requirements',
      info: {
         name: 'Требования к кандидату',
         description: 'Описание нужных навыков и опыта',
         page: () => <Requirements />,
         nextLink: 'Contacts',
         prevLink: 'Job'
      }
   },
   {
      section: 'Contacts',
      info: {
         name: 'Контакты',
         description: 'Контакты HR для публикации на витрине',
         page: () => <Contacts />,
         nextLink: 'OrganizationalInfo',
         prevLink: 'Requirements'
      }
   },
   {
      section: 'OrganizationalInfo',
      info: {
         name: 'Организационная информация',
         description: 'Информация о вакансии для рекрутера',
         page: () => <OrganizationalInfo />,
         nextLink: 'Additionally',
         prevLink: 'Contacts'
      }
   },
   {
      section: 'Additionally',
      info: {
         name: 'Дополнительно',
         description: 'Изображения и ссылки',
         page: () => <Additionally />,
         nextLink: '',
         prevLink: 'OrganizationalInfo'
      }
   },
   {
      section: 'Preview',
      info: {
         name: 'Предпросмотр',
         description: 'Так будет выглядеть вакансия на витрине',
         page: () => <Preview />,
         nextLink: '',
         prevLink: 'Additionally'
      }
   }
];
