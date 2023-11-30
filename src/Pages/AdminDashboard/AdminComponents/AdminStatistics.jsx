import { useQuery } from "@tanstack/react-query"
import useSecureAxios from "../../../Hooks/useSecureAxios"
import AdminChart from "./Chart/AdminChart";

const AdminStatistics = () => {
    const secureAxios = useSecureAxios();
    const { data: statistics = [], isPending } = useQuery({
        queryKey: ['adminStatistics'],
        queryFn: async () => {
            const res = await secureAxios.get('/getContestInfo')
            return res?.data
        }
    })

    const data = statistics.map(item => {
        let chartData = {
            name: item?.contestType,
            uv: item?.participateCount,
        }
        return chartData
    })


    if (isPending) return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    return (
        <div className="flex flex-col items-center justify-center min-h-screen overflow-x-auto">
            <AdminChart data={data} />
            <h1 className="font-bold mb-2 border w-full text-center shadow-md shadow-indigo-900">Participant for different types.</h1>
        </div>
    )
}

export default AdminStatistics