import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios";
import useRole from "./useRole";

const useAllUsers = () => {
    const { isLoading } = useRole();
    const secureAxios = useSecureAxios();
    const { data: allUsers = [], refetch, isPending } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            if (!isLoading) {
                const res = await secureAxios.get(`/users`);
                return res?.data;
            }
        }
    })
    return { allUsers, refetch, isPending }
}

export default useAllUsers