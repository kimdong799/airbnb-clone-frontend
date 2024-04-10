import { useQuery } from "@tanstack/react-query";
import { getMe } from "../routes/api";

// getMe fetcher를 React Query와 같이 호출하는 기능 담당
export default function useUser(){
    const { isLoading, data, isError } = useQuery({
        queryKey:[`me`],
        queryFn: getMe,
        retry: false,
        });
    return{
        userLoading : isLoading,
        user: data,
        isLoggedIn: !isError, 
    };
}