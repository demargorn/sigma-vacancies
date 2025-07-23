import type { ChartData, ChartOptions } from 'chart.js/auto';

export interface IAppSettings {
   apiUrlGateway: string;
   apiUrl: string;
   apiUserUrl: string;
   apiSkillsUrl: string;
   apiStatsUrl: string;
   apiReportUrl: string;
   projectId: string;
   governmentId: string;
   imgsLink: string;
   apiStatsUrlGateWay: string;
   apiSkillsUrlGateWay: string;
   apiSearchUrl: string;
   apiPollsUrl: string;
   pollsUrl: string;
   surveyUrl: string;
   apiReportsUrl: string;
   apiAnalysisUrl: string;
   // assets: string;
}
export type IApiServiceMethodType = 'get' | 'post' | 'patch' | 'delete' | 'put' | 'head';
export interface IApiServiceObject {
   [key: string]: any;
}
export interface IApiServiceMethodResult {
   path: string;
   method: IApiServiceMethodType;
   params?: IApiServiceObject;
}

export type IApiServiceGetTokenMethod = () => string | null | undefined;
export interface IApiServiceMethodData {
   [key: string]: (params?: IApiServiceObject) => IApiServiceMethodResult;
}
export interface IApiServiceRequestMethodParams {
   method: IApiServiceMethodType;
   path: string;
   payload?: IApiServiceObject;
   params?: IApiServiceObject;
}
export interface IApiServiceRequestParams {
   name: string;
   pathParams?: IApiServiceObject;
   payload?: IApiServiceObject;
   customParams?: IApiServiceObject;
}
export type IApiServiceRequestMethod = (params: IApiServiceRequestMethodParams) => Promise;
export interface IApiServiceResponse {
   data: any;
   status?: any;
}

export type Organization = {
   address_legal: string;
   country: string;
   name_legal_full: { ru: string };
   name_legal_short: { ru: string };
   organization_code: string;
   organization_id: string;
   organization_type: string;
   tin: string;
   title: string;
   icon: string;
   employees_amount: number;
   turnover: number;
   staffing: number;
   engagement: number;
   loyalty: number;
   threeSixty: number;
   burnout: number;
   corp_culture_leaders: string;
   additional_info?: {
      description: string;
      title_abbreviation: string;
   };
};

export type Employee = {
   link_id: string;
   link_weight: number;
   organization_id: string;
   organization_data: any;
   profile_data: {
      birth_date: string;
      email: string;
      first_name: string;
      last_name: string;
      middle_name: string;
      phone: string;
      photo_main: string;
      photo_small: string;
      profile_code: string;
      profile_id: string;
      profile_type: string;
      sex: string;
      project_info?: {
         category?: string;
      };
   };
   profile_id: string;
   specialty_data: {
      specialty_id: string;
      specialty_type: string;
      specialty_code: string;
      title: string;
      description: string;
      weight: number;
   }[];
   _organizations: string[];
};

export type OrgInfo = {
   organization_id: string;
   organization_type: string;
   organization_code: string;
   title: string;
   tin: string;
   country: string;
   name_legal_full: {
      ru: string;
   };
   name_legal_short: {
      ru: string;
   };
   address_legal: string;
   contact_website: [
      {
         title: string;
         value: string;
      }
   ];
   contact_phone: [
      {
         title: string;
         value: string;
      },
      {
         title: string;
         value: string;
      }
   ];
   contact_email: [
      {
         title: string;
         value: string;
      }
   ];
   schedule_short: string;
   additional_info: {
      description: string;
   };
   project_id: string;
};

export type EmployeeInfo = {
   link_id: string;
   organization_id: string;
   profile_id: string;
   // link_weight: number;
   organization_data: {
      organization_id: string;
      organization_type: string;
      organization_code: string;
      title: string;
      tin: string;
      country: string;
      name_legal_full: {
         ru: string;
      };
      name_legal_short: {
         ru: string;
      };
      address_legal: string;
      contact_website: [
         {
            title: string;
            value: string;
         }
      ];
      contact_phone: [
         {
            title: string;
            value: string;
         },
         {
            title: string;
            value: string;
         }
      ];
      contact_email: [
         {
            title: string;
            value: string;
         }
      ];
      schedule_short: string;
      additional_info: {
         description: string;
         title_abbreviation?: string;
      };
      project_id: string;
   }[];
   profile_data: {
      profile_id: string;
      profile_type: string;
      profile_code: string;
      first_name: string;
      last_name: string;
      middle_name: string;
      birth_date: string;
      sex: string;
      phone: string;
      email: string;
      photo_main: string;
      photo_small: string;
      project_info?: { category?: string };
   };
   specialty_data: {
      weight: number;
      specialty_id: string;
      specialty_type: string;
      specialty_code: string;
      title: string;
      description: string;
      weight: number;
   }[];
};

export type IWidgetType = 'simple' | 'link' | 'chart.radar' | 'chart.bar' | 'chart.horizontal_bar' | 'chart.doughnut' | 'composed' | 'chart.pie' | 'chart.line';

export type ElementWidgetType =
   | 'select'
   | 'textInput'
   | 'passwordInput'
   | 'telInput'
   | 'emailInput'
   | 'buttonNoBorder'
   | 'button'
   | 'checkbox'
   | 'dateInput'
   | 'radioInput'
   | 'empCard'
   | 'paragraph'
   | 'checkboxList'
   | 'divider'
   | 'pollResultCard'
   | 'progressChart'
   | 'textContainer';

export type ElementWidgetProps = {
   id: string;
   type: ElementWidgetType;
   label?: string;
   placeholder?: string;
   options?: Option[];
   selected?: SelectSelected | Skill;
   setSelected?: (arg: SelectSelected | Skill) => void;
   index?: number;
   disabled?: boolean;
   submit?: () => void;
   value?: string;
   setValue?: (arg: string) => void;
   onClick?: () => void;
   display?: boolean;
   isChecked?: (arg: boolean) => void;
   checked?: boolean;
   regex?: RegExp;
   maxDate?: string;
   onClickArg?: (arg: any) => void;
   empInfo?: ProfileInfo;
   chosenEmp?: boolean;
   style?: string;
   height?: string;
   color?: string;
   data?: {
      value: number;
      datasets: {
         label: string;
         value: number;
      }[];
   };
   text?: string;
};

export type ProfileInfo = {
   id: string;
   name: string;
   img?: string;
   // specialties?: { id: string; title: string }[];
   organizationData?: { id: string; title: string; specialties: { id: string; title: string }[] }[];

   // organization_id?: string;
};

export interface IWidgetSimpleData {
   title: string;
   data_type: string;
   value: string | number | null;
}

export interface IWidgetComposedDataTab {
   name: string;
   widget: IWidget;
}

export interface IWidgetComposedData {
   sidebarWidget?: IWidget;
   tabs: IWidgetComposedDataTab[];
}

export interface IWidgetRadar {
   sidebarWidget?: IWidget;
   main: ChartData;
}

export interface IWidgetBarChart {
   sidebarWidget?: IWidget;
   main: ChartData;
}

export interface IWidgetMeta {
   assessment_type?: 'person';
   assessments?: string[];
   assessments_additional?: string[];
}

export interface IAssessments {
   skill_id: string;
   skill_type: string;
   title?: string;
   description?: string;
   child_skills: any[];
   priority: number;
   assessment_type: 'person';
   IApiServiceMethodDatasment_date: string;
   assessment: any;
   assessments_additional?: string[];
}
export type TypeStatus = 'активная' | 'на паузе' | 'черновик' | 'закрыта';

export interface IWidgetAdditionalOption {
   label: string;
   value: string;
}

export interface IWidget {
   id?: string;
   type: IWidgetType;
   title?: string;
   description?: string;
   subTitle?: string;
   valuetype?: string;
   getClassName?: (arg: IWidgetSimpleData[] | IWidgetComposedData | ChartData | IWidgetRadar | IWidgetBarChart | string) => string;
   data: IWidgetSimpleData[] | IWidgetComposedData | ChartData | IWidgetRadar | IWidgetBarChart | string;
   color?: string;
   backgroundColor?: string;
   width?: string;
   height?: string;
   small?: boolean;
   valueFontSize?: string;
   valueLineHeight?: string;
   marginBottom?: string;
   paddingTop?: string;
   paddingBottom?: string;
   textWrap?: string;
   meta?: IWidgetMeta;
   settings?: ChartOptions | any;
   className?: string;
   widgetTitleFontSize?: string;
   widgetTitleLineHeight?: string;
   titleFontSize?: string;
   titleLineHeight?: string;
   multipleChoiceAggregate?: 'sum' | 'average' | 'count' | 'min' | 'max';
   preFilterData?: (IWidget) => Promise<IWidget>;
   nodatatext?: string;
   additionalOptions?: IWidgetAdditionalOption[];
   onOptionChange?: (checked: boolean, value: string, label: string) => void;
   borderColor?: string;
   x?: number;
   y?: number;
   w?: number;
   h?: number;
   sort?: string;
   question?: string;
   questionDesc?: string;
   chartBarValueSum?: number;
   chartBarOutOf100?: boolean;
}

export interface IIndicatorValue {
   indicator_id: string;
   modified_date: string;
   value: any;
   value_id: string;
   value_info: any;
}

export interface IIndicator {
   [key: string]: IIndicatorValue;
}

export interface IOrganizationIndicator {
   indicators?: any;
   stat?: IOrganizationIndicatorStat[];
}

export interface IOrganizationIndicatorStat {
   organization_id: string;
   values: IIndicator;
}

export type IOrganizationType = 'ministry' | 'department' | 'committee' | 'office' | 'inspection' | 'service' | 'representative';

export type IGovIndicatorType = 'employees_amount' | 'turnover' | 'staffing' | 'engagement' | 'loyalty' | 'threeSixty' | 'burnout' | 'corp_culture_leaders';
export type IOrganiztionIndicatorType = 'potential' | 'threeSixty' | 'typeOfThinking' | 'corpCultureLeader' | 'teamRole' | 'burnoutLevel' | 'contacts';

export interface IIndicatorsBtOrgs {
   [key: string]: Record<IGovIndicatorType | string, string | number>;
}

export interface IIndicatorsState {
   [key: string]: '' | 'loading';
}

export type EmployeeFull = {
   person: {
      name: string;
      photo_small: string;
      profile_id: string;
      organization?: string;
   };
   organization_id: string;
   birth_date: string;
   first_name: string;
   last_name: string;
   middle_name: string;
   photo_main: string;
   photo_small: string;
   profile_code: string;
   profile_id: string;
   profile_id_link: string;
   profile_type: string;
   sex: string;
   link_weight: number;
   data: {
      potential: string | number;
      threeSixty: string | number;
      threeSixtyNoSelf?: string | number;
      threeSixtyColleagues?: string | number;
      threeSixtySubordinates?: string | number;
      threeSixtyBoss?: string | number;
      threeSixtySelf?: string | number;
      typeOfThinking: string | number;
      corpCultureLeader: string | number;
      teamRole: string | number;
      burnoutLevel: string | number;
      burnoutPoints?: string | unmber;
      category?: string;
      responsibilityEffectiveness?: string | number;
      focusOnNeeds?: string | number;
      communicationInfluence?: string | number;
      teamWork?: string | number;
      readyForChanges?: string | number;
      leading?: string | number;
      talentManagement?: string | number;
      strategyThinking?: string | number;
      contacts: string | number;
      phoneNumber: string;
      email: string;
   };
   jobTitle?: string;
};

export interface ISkill {
   evaluated_id: string;
   profile_data: any | null;
   skills: IAssessments[];
   specialty_data: any;
}

export interface IGovernmentStructure {
   [key: string]: Employee;
}

export interface IIndicatorItemInfo {
   unit?: string;
   short_name?: string;
}

export interface IIndicatorItem {
   indicator_id: string;
   indicator_type: string;
   indicator_code: string;
   title: string;
   description: string;
   indicator_info?: IIndicatorItemInfo;
}

export interface AggregateItem {
   sum: number | null;
   average: number | null;
   count: number | null;
   min: number | null;
   max: number | null;
}

export interface Aggregate {
   [key: string]: AggregateItem;
}

export type LoginInfo = {
   user_data: {
      user_id: string;
      login: string;
      project_id: string;
      company_id?: string;
   };
   profile_data: {
      profile_id: string;
      first_name: string;
      last_name: string;
      middle_name: string;
   };
   auth_data: {
      access_token: string;
      token_type: string;
   };
   organization_data: {
      account_id: string;
      organizations: string[];
   };
};

export type PollInfo = {
   adminDescription: string;
   adminHeading: string;
   companyId: string;
   dateEnd: string;
   dateStart: string;
   pollId: string;
   resultsAmount: number;
   templateId: string;
   userId: string;
};

export type SelectSelected = { state?: number; value: string; data?: number[]; op?: string };

export type Assessment = {
   skill_id: string;
   skill_name: string;
   skill_value: string | number;
};

export type FiringPayload = {
   organization_id: string;
   specialty_id: string;
   reason: string;
   end_date: string;
   comment: string;
};

export type CreateUserInfo = {
   user_id?: string;
   user_type: string;
   login: string;
   contact_phone: [
      {
         title: string;
         value: string;
      }
   ];
   contact_email: [
      {
         title: string;
         value: string;
      }
   ];
   additional_info: {
      field1: string;
   };
   profile_id?: string;
   phone_verified: boolean;
   email_verified: boolean;
   password: string;
};

export type CreateProfileInfo = {
   profile_id: string;
   profile_type: string;
   first_name: string;
   last_name: string;
   middle_name: string;
   birth_date: string;
   sex: string;
   contact_phone: [
      {
         title: string;
         value: string;
      }
   ];
   contact_email: [
      {
         title: string;
         value: string;
      }
   ];
   photo_main: string;
   photo_small: string;
};

export type EmpPollInfo = {
   dates: { answer_id: string; date: string }[];
   poll_id: string;
   template_id: string;
   template_title: string;
   title: string;
   description?: string;
};

export type ReportsInfo = {
   callback: string;
   description: string;
   hint: { text: string; url: string };
   report_id: string;
   report_type: string;
   title: string;
};

export type TemplateQuestion = {
   id: number;
   text: string;
   description: string;
   required: boolean;
   type: string;
   options: Options[];
};

export type Template = {
   id: string;
   templateName: string;
   templateDescription: string;
   questions: TemplateQuestion[];
};

export type EditPollInfo = {
   id: string;
   userId: string;
   departmentId: string;
   companyId: string;
   templateId: string;
   active: boolean;
   adminHeading: string;
   adminDescription: string;
   pollName: string;
   pollDescription: string;
   finalHeading: string;
   finalDescription: string;
   questions: TemplateQuestion[];
   segmentationQuestions: SegmentationQuestion[];
   themeColor: string;
   dateStart: string | null;
   dateEnd: string | null;
   isSegmentExperience: boolean;
   isSegmentTeams: boolean;
   // organization: string;
   private: boolean;
   single_answer: boolean;
};

export type SegmentationQuestion = {
   id: string | number;
   description: string;
   text: string;
   type: string;
   required: boolean;
   options: SegmentationOptions[];
};

export type SegmentationOptions = {
   value: string;
   id: string;
};

export type Question = {
   id: string | number;
   text: string;
   description: string | null;
   type: string;
   required: boolean;
   defaultValue?: string | null;
   toggle?: boolean;
   role?: string | null;
   options:
      | null
      | {
           value: string;
           id: string;
        }[];
};

export type Answer = {
   id: string;
   value: string | number | null;
};

export type Answers = {
   questionId: string | number | undefined;
   text: string;
   answer: Answer[];
};

export type Report = {
   pollId: string;
   templateId?: string;
   userId: string | null;
   assessorId: string | null;
   externalId: string | null;
   is_passed?: boolean;
   answers: Answers[];
};

export type Options = {
   id: string;
   value: string;
};

export type SelectOption = {
   label: string;
   value: string;
};

export type HiringPayload = {
   link_id: string;
   profile_id: string;
   schedule_full?: string[];
   schedule_short?: string;
   specialty_id: string;
   specialty_weight?: number;
   start_work_date?: string;
   end_work_date?: string;
   work_format?: string;
   engagement?: number;
   category?: string;
   agreement_type?: string;
   additional_info?: {
      comment: string;
   };
};

export type EditPageInfo = {
   section: string;
   info: {
      name: string;
      description: string;
      page: (props: PageProps) => ReactNode;
      nextLink: string;
      prevLink: string;
   };
};

export type EditPageProps = {
   error?: boolean;
   setError?: (arg: boolean) => void;
   hasChanged?: boolean;
   templateInfo?: Template;
   pollInfo?: EditPollInfo;
   department?: SegmentationQuestion;
   workPeriod?: SegmentationQuestion;
   mode?: string;
   setHasChanged?: (arg: boolean) => void;
};

export type Team = {
   team_id: string;
   team_type: string;
   title: string;
};

export type TabComponentContentOrg = {
   id: string;
   type: string;
   title: string;
};

export type TeamMember = {
   profile_data: {
      profile_id: string;
   };
};
