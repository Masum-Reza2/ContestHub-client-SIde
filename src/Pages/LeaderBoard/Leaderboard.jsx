import { useQuery } from "@tanstack/react-query";
import Cover from "../../Components/Cover"
import usePublicAxios from "../../Hooks/usePublicAxios"
import leaderBoardImg from '../../assets/Banner/leaderboard.jpg'
import LeaderRow from "./LeaderRow";
import { Helmet } from "react-helmet-async";

const Leaderboard = () => {

    const publicAxios = usePublicAxios();
    const { data: leaderboard = [], isPending } = useQuery({
        queryKey: ['leaderboard'],
        queryFn: async () => {
            const res = await publicAxios.get('/leaderboard')
            return res?.data;
        }
    })

    if (isPending) return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    return (
        <div>

            <Helmet>
                <title>Contest Hub | Leaderboard</title>
            </Helmet>

            <Cover title={'Leaderboard'} img={leaderBoardImg} desc={'Become the next leader!'} />
            <div className="overflow-x-auto pb-10">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-600 text-white">
                        <tr>
                            <th>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Total prize</th>
                            <th>Total wins</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leaderboard?.map((leader, index) => <LeaderRow key={index} leader={leader} index={index} />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Leaderboard