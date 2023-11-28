import Swal from "sweetalert2";
import useSecureAxios from "../../../Hooks/useSecureAxios"
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
const ParticipantsRow = ({ participant, index, refetch }) => {
    const { contestName, name, email, isWin, _id } = participant
    const secureAxios = useSecureAxios();
    const { id } = useParams();

    const handleWinner = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: `You are going to declere winner ${name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await secureAxios.put(`/setWinnerByCreator/${id}`, { id: _id })
                    console.log(res?.data?.message)
                    if (res?.data?.modifiedCount) {
                        refetch()
                        Swal.fire({
                            title: "Success",
                            icon: "success"
                        });
                    } else {
                        Swal.fire({
                            title: res?.data?.message,
                            icon: "info"
                        })
                    }
                } catch (error) {
                    toast.error(error?.message)
                }
            } else {
                Swal.fire({
                    title: "Cancelled",
                    icon: "error"
                });
            }
        });
    }

    return (
        <tr className="overflow-x-scroll">
            <th>
                {index + 1}
            </th>
            <td>
                {contestName}
            </td>
            <td>
                {name}
            </td>
            <td>
                {email}
            </td>
            <td>
                <button className="btn btn-xs">View Task</button>
            </td>
            <td className={`${isWin ? 'text-green-600' : 'text-red-600'} font-bold`}>
                {isWin ? <>winner</> : <>pending</>}
            </td>
            <td>
                <button onClick={handleWinner} className="btn btn-sm">set winner</button>
            </td>
        </tr>
    )
}

export default ParticipantsRow