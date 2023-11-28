import { useQuery } from "@tanstack/react-query";
import useGlobal from "../Hooks/useGlobal";
import useSecureAxios from "../Hooks/useSecureAxios";
import Spinner from "./Spinner";
import UserChart from "./UserChart";

const UserLossWinRatio = () => {

    const { user } = useGlobal();
    const secureAxios = useSecureAxios();
    const { data: userWinnings = [], isPending } = useQuery({
        queryKey: ['winningsCountForchart', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/userWinnings/${user?.email}`)
            return res?.data;
        }
    })

    const { data: participations = [] } = useQuery({
        queryKey: ['participationsForChart', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/specificParticipants/${user?.email}`)
            return res?.data;
        }
    })

    const toalPartiCipation = participations?.length;
    const totalWinnings = userWinnings?.length;
    const data = [
        { name: 'Total Participation', value: toalPartiCipation },
        { name: 'Total Win', value: totalWinnings },
    ]


    if (isPending) return <Spinner />
    return (
        <div className="mt-5 overflow-hidden border shadow-md shadow-indigo-900 rounded-lg">
            <h1 className="text-center font-bold text-lg md:text-2xl translate-y-10">Your participation and win ratio.</h1>
            <div className="flex items-center justify-center border scale-150">
                <UserChart data={data} />
            </div>
        </div>
    )
}

export default UserLossWinRatio