import { axiosInstance } from "@services/BaseHttpService/BaseHttpService";

const ticketCollectorsEnpoint = "/api/v1/admin/ticket_collectors";

export const ticketCollectors = {
  getAllTicketCollectors: function (token: string) {
    return axiosInstance.get(ticketCollectorsEnpoint, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
