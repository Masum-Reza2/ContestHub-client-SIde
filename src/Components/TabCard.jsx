import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const TabCard = ({ item }) => {
    const { contestName, photoUrl, participateCount, description, _id } = item;
    return (
        <div className="card bg-base-100 shadow-md shadow-indigo-900" data-aos="zoom-in-down">
            <figure><img className="h-60 w-full object-cover" src={photoUrl} alt="Shoes" /></figure>

            <div className="card-body flex flex-col items-start">
                <h2 className="card-title">Contest Name : {contestName}</h2>
                <p className="text-justify">Participants : {participateCount}</p>
                <p className="text-justify">{description.slice(0, 90)}...</p>
                <div className="card-actions mx-auto">
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-md btn-outline">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TabCard