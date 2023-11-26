import { AiFillDelete } from "react-icons/ai";
import { GiUpgrade } from "react-icons/gi";


/* eslint-disable react/prop-types */
const AllUsersRow = ({ index, singleUser }) => {

    const { email, name, promotionRequest, role, _id } = singleUser;

    return (

        <tr className="bg-red-50">
            <th>
                {index + 1}
            </th>
            <td>
                {email}
            </td>
            <td>{name}</td>
            <td>{role}</td>
            <th className={promotionRequest ? `text-red-500` : `text-green-500`}>
                {promotionRequest ? 'Requested' : 'No request'}
            </th>
            <td className="flex gap-3">
                <button className="btn btn-ghost btn-sm">
                    <AiFillDelete className="text-red-600 text-lg cursor-pointer rounded-md" />
                </button>
                <button className="btn btn-ghost btn-sm">
                    <GiUpgrade className="text-green-600 text-lg cursor-pointer rounded-md" />
                </button>
            </td>
        </tr>

    )
}

export default AllUsersRow