import Spinner from "../../../Components/Spinner";
import useAllUsers from "../../../Hooks/useAllUsers"

const ManageUsers = () => {
    const { allUsers, refetch, isPending } = useAllUsers();


    if (isPending) return <Spinner />
    return (
        <div>
            <h1 className="text-center font-bold text-lg md:text-2xl">Total user : {allUsers?.length}</h1>
        </div>
    )
}

export default ManageUsers