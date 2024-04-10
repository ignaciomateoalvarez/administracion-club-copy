import useCurrentUser from "@hooks/useCurrentUser/useCurrentUser";
import { tenantInfo } from "@services/Dashboard/TenantInfo";

const useTenantInfo = () => {
  const { currentUser } = useCurrentUser();

  const fetchTenantInfo = async () => {
    if (currentUser && currentUser.authToken) {
      try {
        const response = await tenantInfo.getTenantInfo(currentUser.authToken);
        return response.data.payload;
      } catch (error) {
        console.error("Error fetching tenanto info:", error);
        throw error;
      }
    } else {
      console.error("No currentUser or authToken found");
      throw new Error("No currentUser or authToken found");
    }
  };

  return {
    fetchTenantInfo
  };
};

export default useTenantInfo;