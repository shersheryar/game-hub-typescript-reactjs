// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";
import useData from "./useData";

export interface Genre {
    id:number;
    name: string;
    image_background: string;
}

//implemented this in generic way

// interface FetchGenresResponse 
// {
//     count: number;
//     results: Genre[];
// }
// const useGenres = () => {
//     const [genres, setGenres] = useState<Genre[]>([]);
//     const [error, setErrors] = useState("");
//     const [isLoading, setIsLoading] = useState(false);
  
//     useEffect(() => {
//         const controller = new AbortController();
//         setIsLoading(true)  
//       apiClient
//         .get<FetchGenresResponse>("/genres", {signal: controller.signal})
//         .then((res) => {
//             // console.log(res.data.results[0].parent_platforms)
//                 setGenres(res.data.results)
//                 setIsLoading(false)
//         })   
//         .catch((err) => {
//             if (err instanceof CanceledError) return;
//             setErrors(err.message)
//             setIsLoading(false)
//         });
//         return () => controller.abort();
      
//     }, []);
//     return { genres, error , isLoading};
// }
const useGenres = () => useData<Genre>("/genres");
export default useGenres;