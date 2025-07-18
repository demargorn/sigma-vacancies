import { methods } from '@/shared/methods/methods.data';
import { axiosRequest } from '@/shared/plugins/axios';
import { ApiService } from '@/shared/services/apiService/apiService';

const apiService = new ApiService(() => '', axiosRequest, methods);

export { apiService };
