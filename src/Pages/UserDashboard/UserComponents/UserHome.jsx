/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import useGlobal from "../../../Hooks/useGlobal"
import { GiPartyPopper } from "react-icons/gi";
import { Helmet } from "react-helmet-async";


const UserHome = () => {
    const { user } = useGlobal();
    return (
        <>

            <Helmet>
                <title>Contest Hub | User Home</title>
            </Helmet>

            <div className="min-h-[90vh] flex flex-col items-center justify-center">
                <div>
                    {/* <img className="w-1/3 mx-auto" src={salute} alt="saluting to boss" /> */}
                    <GiPartyPopper className="text-9xl lg:text-[12rem] " />
                </div>
                <div className="text-center ">
                    <h1 className="text-3xl md:text-4xl font-bold">Welcome Back {user?.displayName}!</h1>
                    <p className="text-2xl md:text-3xl font-bold">Have a look at your winnings!</p>
                </div>
                <Link className="mt-5" to={'/dashboard/user/winnings'}>
                    <button className="btn btn-outline  text-lg capitalize">My winnings</button>
                </Link>
            </div>
        </>
    )
}

export default UserHome