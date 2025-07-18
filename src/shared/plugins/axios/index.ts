import axios from 'axios';
import type { IApiServiceRequestMethodParams, IApiServiceResponse } from '@/types/types';

axios.interceptors.response.use(
   function (response) {
      return response;
   },
   function (error: any) {
      return Promise.reject(error);
   }
);

async function axiosRequest({ method, path, payload, params }: IApiServiceRequestMethodParams): Promise<IApiServiceResponse> {
   if (method === 'get') {
      return axios[method](path, params);
   } else if (method === 'delete') {
      return axios[method](path, {
         headers: params,
         data: payload
      });
   } else {
      return axios[method](path, payload, params);
   }
}

export { axiosRequest };
