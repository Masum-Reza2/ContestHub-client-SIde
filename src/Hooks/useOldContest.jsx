/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios";

const useOldContest = (id) => {
    const secureAxios = useSecureAxios();
    const { data: oldContest = {}, refetch } = useQuery({
        queryKey: ['updateContest'],
        queryFn: async () => {
            const res = await secureAxios.get(`/singleContest/${id}`)
            return (res?.data);
        }
    })
    return { oldContest, refetch }
}

export default useOldContest