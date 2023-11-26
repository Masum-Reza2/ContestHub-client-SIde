/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import salute from '../../../assets/Images/boss-removebg-preview.png'

const AdminHome = () => {
    return (
        <div className="min-h-[90vh] flex flex-col items-center justify-center">
            <div>
                <img className="w-1/3 mx-auto" src={salute} alt="saluting to boss" />
            </div>
            <div className="text-center ">
                <h1 className="text-3xl md:text-4xl font-bold">Welcome Back Boss!</h1>
                <p className="text-2xl md:text-3xl font-bold">Let's have a look at the discipline!</p>
            </div>
            <Link className="mt-5" to={'/dashboard/admin/manageUsers'}>
                <button className="btn btn-outline  btn-accent text-lg capitalize">Manage users</button>
            </Link>
        </div>
    )
}

export default AdminHome