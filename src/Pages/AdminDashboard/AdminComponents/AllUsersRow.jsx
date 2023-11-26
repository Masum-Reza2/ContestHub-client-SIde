import { AiFillDelete } from "react-icons/ai";
import { GiUpgrade } from "react-icons/gi";
import Swal from "sweetalert2";
import useSecureAxios from "../../../Hooks/useSecureAxios";
import useAllUsers from "../../../Hooks/useAllUsers";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form"



/* eslint-disable react/prop-types */
const AllUsersRow = ({ index, singleUser }) => {
    const secureAxios = useSecureAxios();
    const { refetch } = useAllUsers()
    const { email, name, promotionRequest, role, _id } = singleUser;

    const handleDelete = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: `You are going to delete ${name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await secureAxios.delete(`/users/${_id}`)
                    if (res?.data?.deletedCount) {
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: `Successfully deleted user ${name}`,
                            icon: "success"
                        });
                    }
                } catch (error) {
                    toast.error(error?.message || 'Oops!')
                }
            } else {
                Swal.fire({
                    title: "Cancelled!",
                    text: `Deletion cancelled.`,
                    icon: "error"
                });
            }
        });

    }

    // promotion
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        if (role === data?.userRole) {
            return toast.error('Already playing this role!')
        }
        Swal.fire({
            title: "Are you sure?",
            text: `You are going to change role for ${name}.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, change it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await secureAxios.put(`/toggleRole/${_id}`, { newRole: data?.userRole })
                    if (res?.data?.modifiedCount) {
                        refetch()
                        Swal.fire({
                            title: "Success!",
                            text: `Successfully changed user role.`,
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
            <td>
                {email}
            </td>
            <td>{name}</td>
            {/* <td>{role}</td> */}
            <td className="-translate-y-1 flex items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
                    <select required {...register("userRole")} defaultValue={role}>
                        <option disabled value={role} >{role}</option>
                        <option value="user">user</option>
                        <option value="creator">creator</option>
                        <option value="admin">admin</option>
                    </select>
                    <button type="submit" className="btn btn-ghost btn-sm">
                        <GiUpgrade className="text-green-600 text-lg cursor-pointer rounded-md" />
                    </button>
                </form>
            </td>
            <th className={promotionRequest ? `text-red-500` : `text-green-500`}>
                {promotionRequest ? 'Requested' : 'No request'}
                {promotionRequest && <span><sup className="text-green-600">+(1)</sup></span>}
            </th>
            <td className="flex gap-3">
                <button onClick={handleDelete} className="btn btn-ghost btn-sm">
                    <AiFillDelete className="text-red-600 text-lg cursor-pointer rounded-md" />
                </button>
            </td>
        </tr>

    )
}

export default AllUsersRow