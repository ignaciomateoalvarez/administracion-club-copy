import useCurrentUser from "@hooks/useCurrentUser/useCurrentUser";
import { ticketCollectors } from "@services/TicketCollector/TicketCollectors";

const useTicketCollectors = () => {
  const { currentUser } = useCurrentUser();

  const fetchAllTicketCollectors = async () => {
    if (currentUser && currentUser.authToken) {
      try {
        const response = await ticketCollectors.getAllTicketCollectors(currentUser.authToken);
        return response.data.payload;
      } catch (error) {
        console.error("Error fetching ticket collector info:", error);
        throw error;
      }
    } else {
      console.error("No currentUser or authToken found");
      throw new Error("No currentUser or authToken found");
    }
  };

  return {
    fetchAllTicketCollectors
  };
};

export default useTicketCollectors;