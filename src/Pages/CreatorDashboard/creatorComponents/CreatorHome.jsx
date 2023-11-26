/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import useGlobal from "../../../Hooks/useGlobal";
import feather from '../../../assets/Images/creatoeFeather-removebg-preview.png';

const CreatorHome = () => {
    const { user } = useGlobal();
    return (
        <div className="min-h-[90vh] flex flex-col items-center">
            <div className="lg:mt-10">
                <img className="w-1/3 rotate-45 mx-auto" src={feather} alt="" />
            </div>
            <div className="text-center -translate-y-5">
                <h1 className="text-3xl md:text-4xl font-bold">Welcome Back {user?.displayName}!</h1>
                <p className="text-2xl md:text-3xl font-bold">Participator's are waiting for something new!</p>
            </div>
            <Link className="mt-5" to={'/dashboard/creator/addContest'}>
                <button className="btn btn-outline text-lg capitalize">Create contest</button>
            </Link>
        </div>
    )
}

export default CreatorHome