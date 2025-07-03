// @ts-nocheck
import { Conditions, CustomerInfo, MainInfo, OrganizationalInfo, Preview, Requirements, Aspirant } from '@/widgets/SelectSidebar/Sections';

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
      nextLink: 'Conditions',
      prevLink: 'MainInfo'
    }
  },
  {
    section: 'Conditions',
    info: {
      name: 'Условия работы',
      description: 'Локация, компания, формат и график работы, занятость, зарплата',
      page: () => <Conditions />,
      nextLink: 'Requirements',
      prevLink: 'Customer'
    }
  },
  {
    section: 'Requirements',
    info: {
      name: 'Требования к кандидату',
      description: 'Описание нужных навыков и опыта',
      page: () => <Requirements />,
      nextLink: 'Aspirant',
      prevLink: 'Conditions'
    }
  },
  {
    section: 'Aspirant',
    info: {
      name: 'Контакты',
      description: 'Контакты HR для публикации на витрине',
      page: () => <Aspirant />,
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
      nextLink: '',
      prevLink: 'Aspirant'
    }
  },
  {
    section: 'Preview',
    info: {
      name: 'Предпросмотр',
      description: 'Так будет выглядеть вакансия на витрине',
      page: () => <Preview />,
      nextLink: '',
      prevLink: 'OrganizationalInfo'
    }
  }
];
