import { axiosInstance } from "@services/BaseHttpService/BaseHttpService";

const tenantInfoEndpoint = "/api/v1/tenant_profiles/tenant";

export const tenantInfo = {
  getTenantInfo: function (token: string) {
    return axiosInstance.get(tenantInfoEndpoint, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
