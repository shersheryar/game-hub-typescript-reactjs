import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  result: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        console.log(res.data.results);
        setGames(res.data.results);
      })
      .catch((err) => setErrors(err.message));
    // console.log("he     ");
  }, []);
  //   games.map((game) => console.log(error)
  //   console.log(games);
  return (
    <>
      {error && <Text> {error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
