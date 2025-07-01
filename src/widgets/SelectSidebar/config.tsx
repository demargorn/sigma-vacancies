// @ts-nocheck
import { Dates, FinalEdit, Greeting, Info, Org, Participation, Preview, Segmentation, Visual } from '@/widgets/SelectSidebar/Sections';

import type { EditPageProps } from '@/types/types';

export const editingConfig = [
  {
    section: 'Org',
    info: {
      name: 'Наименование вакансии',
      description: 'описание новой вакансии',
      page: () => <Org />,
      nextLink: 'Info',
      prevLink: ''
    }
  },
  {
    section: 'Info',
    info: {
      name: 'Информация об опросе',
      description: 'Для внутреннего пользования',
      page: (props: EditPageProps) => <Info error={props.error} setError={props.setError} hasChanged={props.hasChanged} />,
      nextLink: 'Greeting',
      prevLink: 'Org'
    }
  },
  {
    section: 'Greeting',
    info: {
      name: 'Приветствие',
      description: 'Текст в шапке анкеты',
      page: (props: EditPageProps) => <Greeting templateInfo={props.templateInfo} pollInfo={props.pollInfo} hasChanged={props.hasChanged} />,
      nextLink: 'Segmentation',
      prevLink: 'Info'
    }
  },
  {
    section: 'Segmentation',
    info: {
      name: 'Сегментация респондентов',
      description: 'Редактирование вопросов',
      nextLink: 'FinalEdit',
      prevLink: 'Greeting',
      page: (props: EditPageProps) => <Segmentation setHasChanged={props.setHasChanged} department={props.department} workPeriod={props.workPeriod} mode={props.mode} />
    }
  },
  {
    section: 'FinalEdit',
    info: {
      name: 'Итоговая страница',
      description: 'Страница после заполнения опроса',
      nextLink: 'Visual',
      prevLink: 'Segmentation',
      page: (props: EditPageProps) => <FinalEdit hasChanged={props.hasChanged} />
    }
  },
  {
    section: 'Visual',
    info: {
      name: 'Оформление',
      nextLink: 'Preview',
      prevLink: 'FinalEdit',
      description: 'Выбор цвета страницы, логотип, и графика',
      page: () => <Visual />
    }
  },
  {
    section: 'Preview',
    info: {
      name: 'Предпросмотр',
      nextLink: 'Participation',
      prevLink: 'Visual',
      description: 'Предпросмотр и публикация опроса',
      page: () => Preview
    }
  },
  {
    section: 'Participation',
    info: {
      name: 'Участие респондентов',
      nextLink: 'Dates',
      prevLink: 'Preview',
      description: 'Настройки анонимности и повторного участия',
      page: (props: EditPageProps) => <Participation />
    }
  },
  {
    section: 'Dates',
    info: {
      name: 'Даты проведения',
      nextLink: '',
      prevLink: 'Participation',
      description: 'Настройка перед публикацией опроса',
      page: (props: EditPageProps) => <Dates mode={props.mode || ''} />
    }
  }
];
