import { appSettings } from '@/shared/settings/settings';
import type { IApiServiceMethodData } from '@/types/types';

/** методы запросов класса ApiService */

//regular api
const API_URL: string = appSettings.apiUrl;
const API_USER_URL: string = appSettings.apiUserUrl; /** сервис авторизации */
const API_SKILLS_URL: string = appSettings.apiSkillsUrl;
const API_STATS_URL: string = appSettings.apiStatsUrl;
const API_REPORT_URL: string = appSettings.apiReportUrl;
const API_SEARCH_URL: string = appSettings.apiSearchUrl;
const API_POLLS_URL: string = appSettings.apiPollsUrl;
const API_REPORTS_URL: string = appSettings.apiReportsUrl;
const API_ANALYSIS_URL: string = appSettings.apiAnalysisUrl;
const API_VACANCY_URL: string = appSettings.apiVacancyUrl; /** сервис вакансий */

// gateway api
const API_URL_GATEWAY = appSettings.apiUrlGateway;
const API_STATS_URL_GATEWAY = appSettings.apiStatsUrlGateWay;
const API_SKILLS_URL_GATEWAY = appSettings.apiSkillsUrlGateWay;

// other
const PROJECT_ID: string = appSettings.projectId; /** id проекта sigma */
// const ORGANIZATION_ID: string = appSettings.governmentId;

const paramsWithToken = (token: string, account_id?: string) => {
   return account_id
      ? { headers: { 'Project-ID': PROJECT_ID, Authorization: `Bearer ${token}`, 'Organization-ID': account_id } }
      : { headers: { 'Project-ID': PROJECT_ID, Authorization: `Bearer ${token}` } };
};

const params = () => {
   return { headers: { 'Project-ID': PROJECT_ID, Authorization: `Bearer ${localStorage.getItem('accessToken')}` } };
};

const newParams = { headers: { 'Project-ID': PROJECT_ID, 'Content-Type': 'application/x-www-form-urlencoded' } };

export const methods: IApiServiceMethodData = {
   getEmployeeById({ employeeId, token }: any) {
      return {
         path: `${API_URL_GATEWAY}/organization/employee?profile_id=${employeeId}&add_organization_data=true&add_profile_data=true&add_specialty_data=true`,
         method: 'get',
         params: token ? paramsWithToken(token) : params()
      };
   },

   getEmployeeOrgsById({ employeeId }: any) {
      return {
         path: `${API_URL_GATEWAY}/organization/employee?profile_id=${employeeId}&add_organization_data=true&link_weight__gt=0.7`,
         method: 'get',
         params: params()
      };
   },

   getProfileById({ profileId }: any) {
      return {
         path: `${API_USER_URL}/profile/${profileId}`,
         method: 'get',
         params: params()
      };
   },
   getOrganizationsList() {
      return {
         path: `${API_URL_GATEWAY}/organizations`,
         method: 'get',
         params: { headers: { 'Project-ID': PROJECT_ID, Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
      };
   },
   getEmployessByOrgId({ orgId }: any) {
      return {
         path: `${API_URL_GATEWAY}/organization/employee?organization_id=${orgId}&link_weight__lt=0.75&link_weight__gt=0&add_profile_data=true&add_organization_data=true&add_specialty_data=true&sort_by=link_weight,last_name,first_name,middle_name`,
         method: 'get',
         params: params()
      };
   },
   getGovernmentSreucture() {
      return {
         path: `${API_URL_GATEWAY}/organization/employee?link_weight__gt=0.75&add_profile_data=true&add_specialty_data=true&add_organization_data=true&sort_by=link_weight,last_name,first_name,middle_name,organization_title`,
         method: 'get',
         params: { headers: { 'Project-ID': PROJECT_ID, Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
      };
   },

   getGovernmentEmployess({ orgId }: any) {
      return {
         path: `${API_URL_GATEWAY}/organization/employee?organization_id=${orgId}&link_weight__lt=0.8&add_profile_data=true&add_specialty_data=true`,
         method: 'get',
         params: params()
      };
   },
   getOrgInfoById({ orgId }: any) {
      return {
         path: `${API_URL}/organization/${orgId}`,
         method: 'get',
         params: params()
      };
   },
   getSkills({ evaluatedIdList, skill_id, token }: any) {
      let path = `${API_SKILLS_URL}/assessments`;

      if (evaluatedIdList?.length) {
         path += '?evaluated_id=';
         evaluatedIdList.forEach((id: string) => (path += `${id},`));
         path = path.slice(0, -1);
      }

      if (skill_id) path += `&skill_id=${skill_id}`;

      return {
         path,
         method: 'get',
         params: token ? paramsWithToken(token) : params()
      };
   },
   getCommonIndicators() {
      return {
         path: `${API_STATS_URL}/indicators/filter/`,
         method: 'get',
         params: params()
      };
   },
   getCommonIndicatorsByOrganization({ organizationId }: any) {
      return {
         path: `${API_STATS_URL_GATEWAY}/indicators/${organizationId}/data`,
         method: 'get',
         params: params()
      };
   },
   getCommonIndicatorsById({ indicatorId, organizations }: any) {
      let path = `${API_STATS_URL}/indicators/${indicatorId}/values`;
      if (organizations?.length) {
         path += '?';
         organizations.forEach((id: string) => (path += `&org_list_id=${id}`));
      }
      return {
         path,
         method: 'get',
         params: params()
      };
   },
   getStatsByOrganizationAndIndicators({ organizations, indicators }: any) {
      let path = `${API_STATS_URL_GATEWAY}/indicators/organizations`;
      // let path = `${API_STATS_URL}/indicators/organizations/`;
      if (organizations?.length) {
         path += '?';
         organizations.forEach((id: string) => (path += `org_list_id=${id}&`));
      }

      if (indicators?.length) {
         if (!organizations.length) path += '?';
         indicators.forEach((id: string) => (path += `ind_list_id=${id}&`));
      }

      path += 'calc_aggregate=true';

      return {
         path,
         method: 'get',
         params: params()
      };
   },

   getSearchByParams({ url }: any) {
      return {
         path:
            url ||
            `${API_SEARCH_URL}/assessments/search?skill_search_type=all&add_profile_data=true&add_organization_data=true&add_specialty_data=true&limit=${import.meta.env.VITE_SEARCHREASULTAMOUNT}`,
         method: 'post',
         params: params()
      };
   },
   getEmpsByLastName({ last_name, token }: any) {
      return {
         path: `${API_USER_URL}/profiles?last_name=${last_name}&exact_search=false`,
         method: 'get',
         params: token ? paramsWithToken(token) : params()
      };
   },
   getProfilesById({ id, token }: any) {
      return {
         path: `${API_USER_URL}/profiles?profile_id=${id}&exact_search=false`,
         method: 'get',
         params: token ? paramsWithToken(token) : params()
      };
   },
   checkReportById({ profile_id }: any) {
      return {
         path: `${API_REPORT_URL}/${profile_id[0]}/${profile_id[1]}/${profile_id}.pdf`,
         method: 'head',
         params: params()
      };
   },
   postLoginInfo() {
      return {
         path: `${API_USER_URL}/auth/login`,
         method: 'post',
         params: newParams
      };
   },
   postVacancy() {
      return {
         path: `${API_VACANCY_URL}`,
         method: 'post',
         params: newParams
      };
   },
   postSkillInfo({ token }: any) {
      return {
         path: `${API_SKILLS_URL}/assessments`,
         method: 'post',
         params: token ? paramsWithToken(token) : params()
      };
   },
   getSpecialties({ token }: any) {
      return {
         path: `${API_URL}/specialties?check_project=true`,
         method: 'get',
         params: token ? paramsWithToken(token) : params()
      };
   },
   postEmpNewSpecialty({ token }: any) {
      return {
         path: `${API_URL}/organization/employee/specialty`,
         method: 'patch',
         params: token ? paramsWithToken(token) : params()
         // params: { headers: { 'Project-ID': PROJECT_ID, 'Organization-ID': `${org_id}`, Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
      };
   },
   getSkillHistory({ skill_id, emp_Id }: any) {
      let path = `${API_SKILLS_URL}/assessment/${skill_id}/employee/${emp_Id}?include_inactive=true&old_first=false`;

      return {
         path,
         method: 'get',
         params: params()
      };
   },
   getSkillHistoryGateWay({ skill_id, emp_Id }: any) {
      let path = `${API_SKILLS_URL_GATEWAY}/assessment/${skill_id}/employee/${emp_Id}?include_inactive=true&old_first=true`;

      return {
         path,
         method: 'get',
         params: params()
      };
   },
   getEmpSkillsGateWay({ emp_Id, history_dates, skill_ids }: any) {
      let path = `${API_SKILLS_URL_GATEWAY}/employee/${emp_Id}/assessments`;
      if (skill_ids) path += `?skill_id=${skill_ids}`;
      if (history_dates) path += `&history_dates=${history_dates}`;

      return {
         path,
         method: 'get',
         params: params()
      };
   },
   deactivateAssessment({ assessment_id, evaluated_id }: any) {
      return {
         path: `${API_SKILLS_URL}/assessment/deactivate/${assessment_id}/${evaluated_id}`,
         method: 'patch',
         params: params()

         // params: { headers: { 'Project-ID': PROJECT_ID, 'Organization-ID': `${org_id}`, Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
      };
   },
   activateAssessment({ assessment_id, evaluated_id }: any) {
      return {
         path: `${API_SKILLS_URL}/assessment/activate/${assessment_id}/${evaluated_id}`,
         method: 'patch',
         params: params()

         // params: { headers: { 'Project-ID': PROJECT_ID, 'Organization-ID': `${org_id}`, Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
      };
   },
   getEmpsByParams({ last_name, first_name, middle_name, contact_email, contact_phone, token }: any) {
      let path = `${API_USER_URL}/profiles?exact_search=false`;
      if (last_name) {
         path = path + `&last_name=${last_name}`;
      }
      if (first_name) {
         path = path + `&first_name=${first_name}`;
      }
      if (middle_name) {
         path = path + `&middle_name=${middle_name}`;
      }
      if (contact_email) {
         path = path + `&contact_email=${contact_email}`;
      }
      if (contact_phone) {
         path = path + `&contact_phone=${contact_phone}`;
      }

      return {
         path: path,
         method: 'get',
         params: token ? paramsWithToken(token) : params()
      };
   },
   getOrgsByUserId({ user_id, org_id, token }: any) {
      let path = `${API_USER_URL}/user/${user_id}/organizations?add_organization_data=true`;

      return {
         path,
         method: 'get',
         params: token
            ? { headers: { 'Project-ID': PROJECT_ID, Authorization: `Bearer ${token}`, 'Organization-ID': org_id } }
            : { headers: { 'Project-ID': PROJECT_ID, Authorization: `Bearer ${localStorage.getItem('accessToken')}`, 'Organization-ID': org_id } }
      };
   },
   postOrgsByUserId({ user_id, account_id }: any) {
      let path = `${API_USER_URL}/user/${user_id}/organizations`;

      return {
         path,
         method: 'post',
         params: { headers: { 'Project-ID': PROJECT_ID, Authorization: `Bearer ${localStorage.getItem('accessToken')}`, 'Organization-ID': account_id } }
      };
   },
   deleteOrgsByUserId({ user_id, account_id, token }: any) {
      let path = `${API_USER_URL}/user/${user_id}/organizations`;

      return {
         path,
         method: 'delete',
         params: token
            ? { 'Project-ID': PROJECT_ID, Authorization: `Bearer ${token}`, 'Organization-ID': account_id }
            : { 'Project-ID': PROJECT_ID, Authorization: `Bearer ${localStorage.getItem('accessToken')}`, 'Organization-ID': account_id }
      };
   },
   getOrgsByAccountId({ account_id, token }: any) {
      let path = `${API_USER_URL}/account/${account_id}/organizations`;

      return {
         path,
         method: 'get',
         params: token ? paramsWithToken(token) : params()
      };
   },
   postNewUser({ token, account_id }: any) {
      return {
         path: `${API_USER_URL}/user${account_id ? '?link_to_account=true' : ''}`,
         method: 'post',
         params: token ? paramsWithToken(token, account_id) : params()
      };
   },
   postNewProfile({ token }: any) {
      return {
         path: `${API_USER_URL}/profile`,
         method: 'post',
         params: token ? paramsWithToken(token) : params()
      };
   },
   fireEmp({ profile_id, token }: any) {
      return {
         path: `${API_URL}/organization/employee/${profile_id}`,
         method: 'delete',
         params: token ? { 'Project-ID': PROJECT_ID, Authorization: `Bearer ${token}` } : { 'Project-ID': PROJECT_ID, Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
      };
   },
   getPollsByCompId({ company_id }: any) {
      return {
         path: `${API_POLLS_URL}/polls/${company_id}/company`,
         method: 'get',
         params: params()
      };
   },
   getCSV({ pollId, companyId }: any) {
      return {
         path: `${API_POLLS_URL}/answers/${pollId}/company/${companyId}/csv`,
         method: 'get',
         params: params()
      };
   },
   getAsseessmentsDates({ employees, skills }: any) {
      return {
         path: `${API_SKILLS_URL}/assessment/dates?employees=${employees}&skills=${skills}&date_format=YYYY.MM.DD`,
         method: 'get',
         params: params()
      };
   },
   getReportsByUserId({ user_id }: any) {
      return {
         path: `${API_POLLS_URL}/reports/${user_id}`,
         method: 'get',
         params: params()
      };
   },
   getReportsByTemplate({ template_id, report_type }: any) {
      return {
         path: `${API_REPORTS_URL}/reports/template/${template_id}?report_type=${report_type}`,
         method: 'get',
         params: params()
      };
   },
   getReportsByReportId({ report_id }: any) {
      return {
         path: `${API_REPORTS_URL}/report/${report_id}`,
         method: 'get',
         params: params()
      };
   },
   getReportByReportAnswerIds({ report_id, answer_id }: any) {
      return {
         path: `${API_ANALYSIS_URL}/analysis/${report_id}/answer/${answer_id}`,
         method: 'get',
         params: params()
      };
   },
   getTemplateById({ template_id }: any) {
      return {
         path: `${API_POLLS_URL}/templates/${template_id}`,
         method: 'get',
         params: params()
      };
   },
   getPollById({ poll_id }: any) {
      return {
         path: `${API_POLLS_URL}/polls/${poll_id}`,
         method: 'get',
         params: params()
      };
   },
   createPoll() {
      return {
         path: `${API_POLLS_URL}/polls`,
         method: 'post',
         params: params()
      };
   },
   editPoll({ poll_id }: any) {
      return {
         path: `${API_POLLS_URL}/polls/${poll_id}`,
         method: 'put',
         params: params()
      };
   },
   getTemplatesList({ account_id }: any) {
      return {
         path: `${API_POLLS_URL}/templates/`,
         method: 'get',
         params: { headers: { 'Project-ID': PROJECT_ID, account_id, Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
      };
   },
   hireEmp({ organization_id, token }: any) {
      return {
         path: `${API_URL}/organization/${organization_id}/employee`,
         method: 'post',
         params: token ? paramsWithToken(token) : params()
      };
   },
   getTeams({ organization_id }: any) {
      return {
         path: `${API_URL}/organization/${organization_id}/teams`,
         method: 'get',
         params: params()
      };
   },
   getTeamById({ team_id }: any) {
      return {
         path: `${API_URL}/team/${team_id}`,
         method: 'get',
         params: params()
      };
   },
   getTeamMembers({ team_id }: any) {
      return {
         path: `${API_URL}/team/${team_id}/members?add_team_data=true&add_profile_data=true&add_organization_data=true&add_specialty_data=true`,
         method: 'get',
         params: params()
      };
   },
   getTeamReport({ report_id, poll_id }: any) {
      return {
         path: `${API_ANALYSIS_URL}/analysis/${report_id}/poll/${poll_id}`,
         method: 'get',
         params: params()
      };
   }
};
