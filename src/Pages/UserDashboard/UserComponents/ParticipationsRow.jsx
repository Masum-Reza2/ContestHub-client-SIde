import Countdown from "react-countdown";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ParticipationsRow = ({ contest, index, refetch }) => {
    const { photoUrl, contestName, prizeMoney, deadline, _id } = contest;

    const futureDate = new Date(deadline);
    const currentDate = new Date();
    const timeDifference = futureDate.getTime() - currentDate.getTime();

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
            <td className="font-bold">
                {timeDifference ? <Countdown date={Date.now() + timeDifference} /> : <span className="text-red-600">Time Up</span>}

            </td>

            <th>
                <Link to={`/details/${_id}`}>
                    <button className="btn btn-ghost btn-xs md:btn-sm">details</button>
                </Link>
            </th>
        </tr>
    )
}

export default ParticipationsRow