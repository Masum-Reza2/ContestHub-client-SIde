/* eslint-disable react/prop-types */
import useAllContests from "../Hooks/useAllContests"
import Spinner from "./Spinner"
import TabCard from "./TabCard"

const AllContestTabItems = ({ category }) => {
    const { isLoading } = useAllContests()
    if (isLoading) return <Spinner />
    return (
        <div className="grid gap-10 py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3">
            {category?.map(item => <TabCard key={item?._id} item={item} />)}
        </div>
    )
}

export default AllContestTabItems