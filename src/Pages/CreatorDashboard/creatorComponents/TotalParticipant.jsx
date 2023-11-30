import { useQuery } from "@tanstack/react-query"
import useSecureAxios from "../../../Hooks/useSecureAxios"
import Spinner from "../../../Components/Spinner";
import ParticipantsRow from "./ParticipantsRow";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const TotalParticipant = () => {
    const secureAxios = useSecureAxios();
    const { id } = useParams();
    const { data: participants = [], isPending, refetch } = useQuery({
        queryKey: ['totallParticipants'],
        queryFn: async () => {
            const res = await secureAxios.get(`/contestParticipants/${id}`)
            return res?.data;
        }
    })




    if (isPending) return <Spinner />
    return (
        <div>
            <Helmet>
                <title>Contest Hub | Total participant</title>
            </Helmet>

            <h1 className="text-center font-semibold text-lg md:text-xl">You have Total {participants?.length} participants on this contest.</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-600 text-white">
                        <tr>
                            <th>
                            </th>
                            <th>Contest Name</th>
                            <th>Participant Name</th>
                            <th>Email</th>
                            <th>Submitted Task</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            participants?.map((participant, index) => <ParticipantsRow key={participant?._id} participant={participant} index={index} refetch={refetch} />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default TotalParticipant