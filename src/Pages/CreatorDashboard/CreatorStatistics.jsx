import { useQuery } from "@tanstack/react-query";
import useGlobal from "../../Hooks/useGlobal";
import useSecureAxios from "../../Hooks/useSecureAxios";
import AdminChart from "../AdminDashboard/AdminComponents/Chart/AdminChart";

const CreatorStatistics = () => {

    const { user } = useGlobal();
    const secureAxios = useSecureAxios();
    const { data = [], isPending } = useQuery({
        queryKey: ['specificContestsForchart', user?.email],
        queryFn: async () => {
            if (user) {
                const res = await secureAxios.get(`/creatorContestInfo/${user?.email}`)
                return res.data;
            }
        }
    })
    console.log(data)

    const chartData = data.map(item => {
        let chartData = {
            name: item?.contestName,
            uv: item?.participateCount,
        }
        return chartData
    })

    if (isPending) return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    return (
        <div className="flex flex-col items-center justify-center min-h-screen overflow-x-auto">
            <AdminChart data={chartData} />
            <h1 className="font-bold mb-2 border w-full text-center shadow-md shadow-indigo-900">Participants on your contest.</h1>
        </div>
    )
}

export default CreatorStatistics