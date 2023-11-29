/* eslint-disable react/prop-types */
const LeaderRow = ({ leader, index }) => {
    const { img, name, totalPrizeMoney, totalWins } = leader;
    return (
        <tr className="overflow-x-scroll">
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt={`image of ${name}`} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td className="font-bold text-green-500">
                ${totalPrizeMoney}
            </td>
            <td>
                {totalWins}
            </td>


            {/* <th>
                <Link to={`/dashboard/creator/participants/${_id}`}>
                    <button className="btn btn-ghost btn-xs md:btn-sm">details</button>
                </Link>
            </th> */}
        </tr>
    )
}

export default LeaderRow