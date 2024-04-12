import { axiosInstance } from "@services/BaseHttpService/BaseHttpService";

const usersIndexEndpoint = "/api/v1/admin/admin_profiles";

export const users = {
  getAllUsers: function (token: string) {
    return axiosInstance.get(usersIndexEndpoint, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
