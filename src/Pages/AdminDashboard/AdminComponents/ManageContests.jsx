import { Helmet } from "react-helmet-async";
import Spinner from "../../../Components/Spinner";
import useAllContests from "../../../Hooks/useAllContests"
import ContestRow from "./ContestRow";

const ManageContests = () => {

    const { contests, isLoading } = useAllContests();

    if (isLoading) return <Spinner />
    return (
        <div>
            <Helmet>
                <title>Contest Hub | Manage contest</title>
            </Helmet>

            <h1 className="text-center font-bold text-lg md:text-2xl">Total contests - {contests?.length}</h1>
            <div className="overflow-x-auto py-2">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-600 text-white">
                        <tr>
                            <th>
                            </th>
                            <th>Creator Name</th>
                            <th>Contest Name</th>
                            <th>Price</th>
                            <th>Prize Money</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contests?.map((contest, index) => <ContestRow key={contest?._id} index={index} contest={contest} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageContests