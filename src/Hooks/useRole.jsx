import useGlobal from "./useGlobal";
import useSecureAxios from "./useSecureAxios"
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
    const secureAxios = useSecureAxios();
    const { user } = useGlobal();
    // setLoading(true),

    const { data: role, isPending: isLoading } = useQuery({
        queryKey: ['userRole', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/userRole/${user?.email}`)
            return (res?.data)
        }
    })
    return { role, isLoading };
}

export default useRole