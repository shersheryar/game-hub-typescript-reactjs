import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


//generic respose type like FetchGenresResponse
interface FetchResponse  <T>
{
    count: number;
    results: T[];
}
// generic type perimeter T
//here end point is the url end point
const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true)  
      apiClient
        .get<FetchResponse <T>>(endpoint, {signal: controller.signal})
        .then((res) => {
            // console.log(res.data.results[0].parent_platforms)
                setData(res.data.results)
                setIsLoading(false)
        })   
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setErrors(err.message)
            setIsLoading(false)
        });
        return () => controller.abort();
      
    }, []);
    return { data, error , isLoading};
}

export default useData;