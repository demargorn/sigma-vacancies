import type { IAppSettings } from '@/types/types';
import { PROJECT_ID, AUTORIZATION_API } from '../utilities/constants';

export const appSettings: IAppSettings = {
   apiUrlGateway: import.meta.env.VITE_API_URL_GATEWAY,
   apiStatsUrlGateWay: import.meta.env.VITE_API_STATS_URL_GATEWAY,
   apiUrl: import.meta.env.VITE_API_URL,
   // apiUserUrl: import.meta.env.VITE_API_USER_URL,
   apiSkillsUrl: import.meta.env.VITE_API_SKILLS_URL,
   apiStatsUrl: import.meta.env.VITE_API_STATS_URL,
   apiReportUrl: import.meta.env.VITE_API_REPORT_URL,
   // projectId: import.meta.env.VITE_PROJECT_ID,

   apiUserUrl: AUTORIZATION_API,
   projectId: PROJECT_ID,

   governmentId: import.meta.env.VITE_GOVERNMENT_ID,
   imgsLink: import.meta.env.VITE_IMGS_LINK,
   apiSearchUrl: import.meta.env.VITE_API_SEARCH_URL,
   apiPollsUrl: import.meta.env.VITE_API_POLLS_URL,
   pollsUrl: import.meta.env.VITE_POLLS_URL,
   surveyUrl: import.meta.env.VITE_SURVEY_URL,
   apiSkillsUrlGateWay: import.meta.env.VITE_API_SKILLS_URL_GATEWAY,
   apiReportsUrl: import.meta.env.VITE_REPORTS_URL,
   apiAnalysisUrl: import.meta.env.VITE_ANALYSIS_URL
};
