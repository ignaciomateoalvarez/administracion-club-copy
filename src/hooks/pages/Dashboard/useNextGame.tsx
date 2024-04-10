import useCurrentUser from "@hooks/useCurrentUser/useCurrentUser";
import { nextGame } from "@services/Dashboard/NextGame";

const useNextGame = () => {
  const { currentUser } = useCurrentUser();

  const fetchNextGame = async () => {
    if (currentUser && currentUser.authToken) {
      try {
        const response = await nextGame.getNextGame(currentUser.authToken);
        return response.data.payload;
      } catch (error) {
        console.error("Error fetching next game:", error);
        throw error;
      }
    } else {
      console.error("No currentUser or authToken found");
      throw new Error("No currentUser or authToken found");
    }
  };

  return {
    fetchNextGame
  };
};

export default useNextGame;