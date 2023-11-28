import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios";

const useWinner = () => {
    const { data: winner = [] } = useQuery({
        queryKey: ['singlewinner'],
        queryFn: async () => {
            const res = await useSecureAxios.get('/getWinner')
            return res?.data;
        }
    })
    return { winner }
}

export default useWinner