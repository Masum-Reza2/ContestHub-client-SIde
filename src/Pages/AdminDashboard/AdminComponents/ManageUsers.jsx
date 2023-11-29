import Spinner from "../../../Components/Spinner";
import useAllUsers from "../../../Hooks/useAllUsers"
import AllUsersRow from "./AllUsersRow";

const ManageUsers = () => {
    const { allUsers, isPending } = useAllUsers();

    if (isPending) return <Spinner />
    return (
        <div>
            <h1 className="text-center font-bold text-lg md:text-2xl">Total users - {allUsers?.length}</h1>

            <div>
                <div className="overflow-x-auto py-2">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-600 text-white">
                            <tr>
                                <th>
                                </th>
                                <th>User email</th>
                                <th>User Name</th>
                                <th>Role</th>
                                <th>Request</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers?.map((singleUser, index) => <AllUsersRow key={singleUser?._id} index={index} singleUser={singleUser} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageUsers