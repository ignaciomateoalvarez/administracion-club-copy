import useCurrentUser from "@hooks/useCurrentUser/useCurrentUser";
import { users } from "@services/Users/Users";

const useUsers = () => {
  const { currentUser } = useCurrentUser();

  const fetchAllUsers = async () => {
    if (currentUser && currentUser.authToken) {
      try {
        const response = await users.getAllUsers(currentUser.authToken);
        return response.data.payload;
      } catch (error) {
        console.error("Error fetching users info:", error);
        throw error;
      }
    } else {
      console.error("No currentUser or authToken found");
      throw new Error("No currentUser or authToken found");
    }
  };

  return {
    fetchAllUsers
  };
};

export default useUsers;