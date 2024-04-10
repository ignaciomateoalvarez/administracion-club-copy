import useCurrentUser from "@hooks/useCurrentUser/useCurrentUser";
import { systemStatistics } from "@services/Dashboard/SystemStatistics";

const useSystemStatistics = () => {
  const { currentUser } = useCurrentUser();

  const fetchSystemStatistics = async () => {
    if (currentUser && currentUser.authToken) {
      try {
        const response = await systemStatistics.getSystemStatistics(currentUser.authToken);
        return response.data.payload;
      } catch (error) {
        console.error("Error fetching system statistics:", error);
        throw error;
      }
    } else {
      console.error("No currentUser or authToken found");
      throw new Error("No currentUser or authToken found");
    }
  };

  return {
    fetchSystemStatistics
  };
};

export default useSystemStatistics;