import { Helmet } from "react-helmet-async";
import Spinner from "../../../Components/Spinner";
import useAllUsers from "../../../Hooks/useAllUsers"
import AllUsersRow from "./AllUsersRow";
import { useState } from "react";

import { BiSolidSkipNextCircle } from 'react-icons/bi';
import useAdminPagination from "../../../Hooks/useAdminPagination";

const ManageUsers = () => {
    const [itemsPerPage, setItemsPerpage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    // pagination
    const { userCount } = useAdminPagination()
    const count = userCount || 1
    const totalPages = Math.ceil(count / itemsPerPage);

    // making array for buttons
    const pagination = [...Array(totalPages).keys()];

    // pagination controller functions
    const handleItemsPerPage = e => {
        const val = Number.parseFloat(e.target.value)
        setItemsPerpage(val);

        // Resetting current page 
        setCurrentPage(1);
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const { allUsers, isPending } = useAllUsers(currentPage, itemsPerPage);
    const isAnyRequest = allUsers.find(user => user?.promotionRequest);


    if (isPending) return <Spinner />
    return (
        <div>
            <Helmet>
                <title>Contest Hub | Manage users</title>
            </Helmet>

            <h1 className="text-center font-bold text-lg md:text-2xl">Total users - {count}</h1>

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
                                <th>Request{isAnyRequest && <span className="text-red-500 font-bold ml-1">!</span>}</th>
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

            {/* paginations */}
            <div className="text-center py-5 space-x-5">
                <p className={`pb-2 font-bold text-lg `}>Current Page : {currentPage}</p>
                <button onClick={handlePrev} className="btn translate-y-1">
                    <BiSolidSkipNextCircle className="text-xl rotate-180" />
                </button>
                {
                    pagination?.map((page, index) => <button
                        key={index}
                        className={`btn btn-outline ${currentPage === (page + 1) ? 'bg-sky-400 text-white font-bold' : ''}`}
                        onClick={() => setCurrentPage(page + 1)}
                    >
                        {page + 1}
                    </button>)
                }
                <button onClick={handleNext} className="btn translate-y-1">
                    <BiSolidSkipNextCircle className="text-xl" />
                </button>

                <select id="chooseItem" className="bg-orange-200 font-bold rounded-md py-3 cursor-pointer" value={itemsPerPage} onChange={handleItemsPerPage}>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>

        </div>
    )
}

export default ManageUsers