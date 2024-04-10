import useNextGame from "@hooks/pages/Dashboard/useNextGame";
import { useEffect, useState } from "react";

interface Match {
  date: string;
  fixture_date: number;
  teams: {
    name: string;
    logo: string;
  }[];
  stadium: {
    name: string;
  };
  tournament: {
    name: string;
  };
}

const NextMatch = () => {
  const { fetchNextGame } = useNextGame();
  const [nextMatch, setNextMatch] = useState<Match | null>(null);

  useEffect(() => {
    const loadNextMatch = async () => {
      try {
        const matchData = await fetchNextGame();
        setNextMatch(matchData);
        console.log(nextMatch)
      } catch (error) {
        console.error("Error loading next match:", error);
      }
    };

    loadNextMatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Proximo partido</h2>
      {nextMatch ? (
        <div>
          <p>Torneo: {nextMatch.tournament.name}</p>
          <p>Fecha: {new Date(nextMatch.date).toLocaleDateString()}</p>
          <p>
            Equipo 1: {nextMatch.teams[0].name}
            {nextMatch.teams[0].logo && (
              <img src={`http://localhost:3000${nextMatch.teams[0].logo}`} alt={nextMatch.teams[0].name} style={{ width: '50px', height: '50px' }} />
            )}
          </p>
          <p>
            Equipo 2: {nextMatch.teams[1].name}
            {nextMatch.teams[1].logo && (
              <img src={`http://localhost:3000${nextMatch.teams[1].logo}`} alt={nextMatch.teams[1].name} style={{ width: '50px', height: '50px' }} />
            )}
          </p>
          <p>Estadio: {nextMatch.stadium.name}</p>
        </div>
      ) : (
        <p>Loading next match...</p>
      )}
    </div>
  );
};

export default NextMatch;
