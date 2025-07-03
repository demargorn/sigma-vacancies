// @ts-nocheck
import { Dates, FinalEdit, Conditions, CustomerInfo, MainInfo, Participation, Preview, Segmentation, Visual } from '@/widgets/SelectSidebar/Sections';

import type { EditPageProps } from '@/types/types';

export const editingConfig = [
  {
    section: 'MainInfo',
    info: {
      name: 'Основная информация',
      description: 'Название, описание и статус новой вакансии',
      page: () => <MainInfo />,
      nextLink: 'Customer',
      prevLink: ''
    }
  },
  {
    section: 'Customer',
    info: {
      name: 'Заказчик',
      description: 'Информация о заказчике для внутреннего пользования',
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
      nextLink: 'Segmentation',
      prevLink: 'Customer'
    }
  },
  {
    section: 'Segmentation',
    info: {
      name: 'Требования к кандидату',
      description: 'Описание навыков и опыта',
      nextLink: 'FinalEdit',
      prevLink: 'Greeting',
      page: (props: EditPageProps) => <Segmentation setHasChanged={props.setHasChanged} department={props.department} workPeriod={props.workPeriod} mode={props.mode} />
    }
  },
  {
    section: 'FinalEdit',
    info: {
      name: 'Контакты',
      description: 'Контакты HR для публикации',
      page: (props: EditPageProps) => <FinalEdit hasChanged={props.hasChanged} />,
      nextLink: 'Visual',
      prevLink: 'Segmentation'
    }
  },
  {
    section: 'Visual',
    info: {
      name: 'Организационная информация',
      description: 'Информация для рекрутера',
      page: () => <Visual />,
      nextLink: 'Preview',
      prevLink: 'FinalEdit'
    }
  },
  {
    section: 'Preview',
    info: {
      name: 'Предпросмотр',
      description: 'Предпросмотр вакансии',
      page: () => Preview,
      nextLink: 'Participation',
      prevLink: 'Visual'
    }
  }
];
