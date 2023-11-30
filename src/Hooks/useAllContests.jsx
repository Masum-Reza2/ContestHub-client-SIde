import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios";
import toast from "react-hot-toast";

const useAllContests = () => {
    const secureAxios = useSecureAxios();
    const { data: contests = [], refetch, isPending: isLoading } = useQuery({
        queryKey: ['allContests'],
        queryFn: async () => {
            try {
                const res = await secureAxios.get(`/contests`);
                return (res.data)
            } catch (error) {
                toast.error(error?.message)
            }
        }
    })
    return { contests, refetch, isLoading }
}

export default useAllContests