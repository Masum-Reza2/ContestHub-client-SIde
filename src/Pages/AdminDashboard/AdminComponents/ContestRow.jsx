import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useSecureAxios from "../../../Hooks/useSecureAxios";
import useAllContests from "../../../Hooks/useAllContests";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
const ContestRow = ({ index, contest }) => {
    const secureAxios = useSecureAxios();
    const { refetch } = useAllContests();
    const { creatorName, contestName, contestPrice, prizeMoney, status, _id } = contest;

    // delete
    const handleDelete = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: `You are going to delete contest ${contestName}.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await secureAxios.delete(`/contestsAdmin/${_id}`)
                    if (res?.data?.deletedCount) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: `Deleted contest ${contestName}.`,
                            icon: "success"
                        });
                    }
                } catch (error) {
                    toast.error(error?.message || 'Oops!')
                }
            } else {
                Swal.fire({
                    title: "Cancelled!",
                    icon: "error"
                });
            }
        });
    }

    // approve
    const handleApprove = async () => {
        if (status === 'approved') {
            return toast.error(`ALready approved!`);
        }
        Swal.fire({
            title: "Are you sure?",
            text: `You are going to approve contest ${contestName}.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, approve it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await secureAxios.put(`/contestsAdmin/${_id}`, { newStatus: 'approved' })
                    if (res?.data?.modifiedCount) {
                        refetch();
                        Swal.fire({
                            title: "Approved!",
                            text: `Approved contest ${contestName}.`,
                            icon: "success"
                        });
                    }
                } catch (error) {
                    toast.error(error?.message || 'Oops!')
                }
            } else {
                Swal.fire({
                    title: "Cancelled!",
                    icon: "error"
                });
            }
        });
    }

    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>{creatorName}</td>
            <td>{contestName}</td>
            <td>${contestPrice}</td>
            <td>${prizeMoney}</td>
            <td className={`font-bold ${status === 'pending' ? 'text-red-600' : 'text-green-600'}`}>
                <button onClick={handleApprove} className="btn btn-sm btn-ghost">{status}</button>
            </td>
            <td>
                <button onClick={handleDelete} className="btn btn-ghost btn-sm">
                    <AiFillDelete className="text-red-600 text-lg cursor-pointer rounded-md" />
                </button>
            </td>
        </tr>
    )
}

export default ContestRow