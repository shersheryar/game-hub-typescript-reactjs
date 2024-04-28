// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

//implemented in generic way
// interface FetchGamesResponse {
//   count: number;
//   result: Game[];
// }
// const useGames = () => {
//     const [games, setGames] = useState<Game[]>([]);
//     const [error, setErrors] = useState("");
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         const controller = new AbortController();
//         setIsLoading(true)
//       apiClient
//         .get<FetchGamesResponse>("/games", {signal: controller.signal})
//         .then((res) => {
//             // console.log(res.data.results[0].parent_platforms)
//                 setGames(res.data.results)
//                 setIsLoading(false)
//         })
//         .catch((err) => {
//             if (err instanceof CanceledError) return;
//             setErrors(err.message)
//             setIsLoading(false)
//         });
//         return () => controller.abort();

//     }, []);
//     return { games, error , isLoading};
// }

const useGames = (
  selecetedGenre: Genre | null,
  selecetedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: { genres: selecetedGenre?.id, platforms: selecetedPlatform?.id },
    },
    [selecetedGenre?.id, selecetedPlatform?.id]
  );

export default useGames;
