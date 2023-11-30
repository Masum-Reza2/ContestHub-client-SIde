import { useQuery } from "@tanstack/react-query"
import useGlobal from "../../../Hooks/useGlobal"
import useSecureAxios from "../../../Hooks/useSecureAxios";
import Spinner from "../../../Components/Spinner";
import ParticipationsRow from "./ParticipationsRow";
import { Helmet } from "react-helmet-async";

const UserParticipations = () => {
    const { user } = useGlobal();
    const secureAxios = useSecureAxios();
    const { data: participations = [], isPending, refetch } = useQuery({
        queryKey: ['participations', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/specificParticipants/${user?.email}`)
            return res?.data;
        }
    })

    if (isPending) return <Spinner />
    return (
        <div>
            <Helmet>
                <title>Contest Hub | User participations</title>
            </Helmet>

            <h1 className="text-center font-semibold text-lg md:text-xl">You have participated in {participations?.length} contests.</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-600 text-white">
                        <tr>
                            <th>
                            </th>
                            <th>Image</th>
                            <th>Contest Name</th>
                            <th>Prize money</th>
                            <th>Deadline</th>
                            <th>See update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            participations?.map((contest, index) => <ParticipationsRow key={contest?._id} contest={contest} index={index} refetch={refetch} />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default UserParticipations