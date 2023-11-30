import { useQuery } from "@tanstack/react-query"
import useGlobal from "../../../Hooks/useGlobal"
import useSecureAxios from "../../../Hooks/useSecureAxios";
import CreationTableRow from "./CreationTableRow";
import Spinner from "../../../Components/Spinner";
import { Helmet } from "react-helmet-async";

const MyCreations = () => {
    const { user } = useGlobal();
    const secureAxios = useSecureAxios();
    const { data = [], refetch, isPending } = useQuery({
        queryKey: ['specificContests', user?.email],
        queryFn: async () => {
            if (user) {
                const res = await secureAxios.get(`/specificContests/${user?.email}`)
                return res.data;
            }
        }
    })

    if (isPending) return <Spinner />
    return (
        <div>
            <Helmet>
                <title>Contest Hub | my creations</title>
            </Helmet>

            <h1 className="text-center font-semibold text-lg md:text-xl">You have created {data?.length} contests.</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-600 text-white">
                        <tr>
                            <th>
                            </th>
                            <th>Image</th>
                            <th>Contest Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                            <th>Submissions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((contest, index) => <CreationTableRow key={contest?._id} contest={contest} index={index} refetch={refetch} />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default MyCreations