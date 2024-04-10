import { axiosInstance } from "@services/BaseHttpService/BaseHttpService";

const statisticsEndpoint = "/api/v1/admin/admin_profiles/view_system_statistics";

export const systemStatistics = {
  getSystemStatistics: function (token: string) {
    return axiosInstance.get(statisticsEndpoint, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
