import type { IApiServiceGetTokenMethod, IApiServiceMethodData, IApiServiceRequestMethod, IApiServiceRequestParams } from '@/types/types';

class ApiService {
   private getTokenMethod;
   private requestMethod;
   private methods;

   constructor(getTokenMethod: IApiServiceGetTokenMethod, requestMethod: IApiServiceRequestMethod, methods: IApiServiceMethodData) {
      this.getTokenMethod = getTokenMethod;
      this.requestMethod = requestMethod;
      this.methods = methods;
   }

   private getHeaders() {
      return {
         Authorization: `Bearer ${this.getTokenMethod()}`
      };
   }

   public request({ name, pathParams, payload, customParams }: IApiServiceRequestParams) {
      const { path, method, params } = this.methods[name](pathParams);
      const _params = { headers: this.getHeaders() };

      if (params) {
         Object.assign(_params, params);
      }

      if (customParams) {
         Object.assign(_params, { customParams });
      }

      return this.requestMethod({ method, path, payload, params: _params });
   }
}

export { ApiService };
