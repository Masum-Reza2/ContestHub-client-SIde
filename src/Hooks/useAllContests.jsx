import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios";

const useAllContests = () => {
    const secureAxios = useSecureAxios();
    const { data: contests = [], refetch, isPending: isLoading } = useQuery({
        queryKey: ['allcontests'],
        queryFn: async () => {
            try {
                const res = await secureAxios.get(`/contests`);
                return (res.data)
            } catch (error) {
                console.log(error)
            }
        }
    })
    return { contests, refetch, isLoading }
}

export default useAllContests