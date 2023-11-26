/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import Swal from "sweetalert2";
import useSecureAxios from "../../../Hooks/useSecureAxios";
import { Link } from "react-router-dom";

const CreationTableRow = ({ contest, index, refetch }) => {
    const { contestName, status, photoUrl, _id } = contest;
    const secureAxios = useSecureAxios();

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: `You are going to delete ${contestName}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                secureAxios.delete(`/contests/${_id}`)
                    .then(res => {
                        if (res?.data?.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `You have deleted contest ${contestName}`,
                                icon: "success"
                            });
                            refetch()
                        } else {
                            Swal.fire({
                                title: "Oops!",
                                text: res?.data?.message,
                                icon: "error"
                            });
                        }
                    })

            } else {
                Swal.fire({
                    title: "Cancelled!",
                    text: `You cancelled deletion for ${contestName}.`,
                    icon: "error"
                });
            }
        });
    }

    const handleUpdate = () => {
        if (status === 'approved') {
            Swal.fire({
                title: "Oops!",
                text: `Already approved by admin!`,
                icon: "error"
            })
        }
    }

    return (
        <tr className="overflow-x-scroll bg-red-50">
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoUrl} alt={`image of ${contestName}`} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {contestName}
            </td>
            <td className={`font-semibold ${status === 'pending' ? 'text-red-500' : 'text-green-500'}`}>
                {status}
            </td>
            <td>
                <div className="flex gap-3 text-xl">
                    <Link to={status === 'pending' ? `/dashboard/creator/updateContest/${_id}` : '#'}>
                        <AiFillEdit onClick={handleUpdate} className="cursor-pointer hover:-translate-y-[0.10rem] active:translate-y-[0.10rem] text-green-600" />
                    </Link>
                    <AiFillDelete onClick={handleDelete} className="cursor-pointer hover:-translate-y-[0.10rem] active:translate-y-[0.10rem] text-red-600" />
                </div>
            </td>
            <th>
                <button className="btn btn-ghost btn-xs md:btn-sm">details</button>
            </th>
        </tr>
    )
}

export default CreationTableRow