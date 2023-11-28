/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const WinnerRow = ({ contest, index }) => {
    const { photoUrl, contestName, prizeMoney, _id } = contest
    return (
        <tr className="overflow-x-scroll">
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
            <td>
                ${prizeMoney}
            </td>

            <th>
                <Link to={`/details/${_id}`}>
                    <button className="btn btn-ghost btn-xs md:btn-sm">details</button>
                </Link>
            </th>
        </tr>
    )
}

export default WinnerRow