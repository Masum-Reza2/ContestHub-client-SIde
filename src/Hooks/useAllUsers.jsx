import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios";
import useRole from "./useRole";

const useAllUsers = (currentPage, itemsPerPage) => {
    const { isLoading } = useRole();
    const secureAxios = useSecureAxios();
    const { data: allUsers = [], refetch, isPending } = useQuery({
        queryKey: [currentPage, itemsPerPage],
        queryFn: async () => {
            if (!isLoading) {
                const res = await secureAxios.get(`/users?page=${currentPage}&size=${itemsPerPage}`);
                return res?.data;
            }
        }
    })
    return { allUsers, refetch, isPending }
}

export default useAllUsers