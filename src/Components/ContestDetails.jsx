import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import useSecureAxios from "../Hooks/useSecureAxios";
import Spinner from "./Spinner";

const ContestDetails = () => {
    const { id } = useParams();
    const secureAxios = useSecureAxios();
    const { data: details = {}, isPending } = useQuery({
        queryKey: ['singleContest'],
        queryFn: async () => {
            const res = await secureAxios.get(`/contests/${id}`)
            return res?.data;
        }
    })
    const { contestName, photoUrl, participateCount, contestTask, description, contestPrice, prizeMoney, deadline, contestType } = details;

    if (isPending) return <Spinner />
    return (
        <div>
            contewst details
        </div>
    )
}

export default ContestDetails