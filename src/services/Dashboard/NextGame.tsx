import { axiosInstance } from "@services/BaseHttpService/BaseHttpService";

const nextGameEndpoint = "/api/v1/admin/matches/next_game";

export const nextGame = {
  getNextGame: function (token: string) {
    return axiosInstance.get(nextGameEndpoint, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
