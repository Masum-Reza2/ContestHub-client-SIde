import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios"

const useAdminPagination = () => {
    const secureAxios = useSecureAxios();
    const { data: count = [] } = useQuery({
        queryKey: ['Count'],
        queryFn: async () => {
            const res = await secureAxios.get('/adminPagination');
            return res?.data
        }
    })
    const contestCount = count?.contestCount
    const userCount = count?.userCount
    return { contestCount, userCount }
}

export default useAdminPagination