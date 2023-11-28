import { FaEdit } from "react-icons/fa";
import useGlobal from "../Hooks/useGlobal"
import useRole from "../Hooks/useRole";
import { Link } from "react-router-dom";

const GlobalProfile = () => {
    const { user } = useGlobal();
    const { role, isLoading } = useRole()
    return (
        <div className="px-2">
            <div className="relative flex flex-col text-gray-700  shadow-md shadow-indigo-900 rounded-xl bg-clip-border">
                {/* <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                    <img className="mx-auto max-w-md object-cover rounded-full" src={user?.photoURL} alt="profile-picture" />
                </div> */}

                <div>
                    <img className="mx-auto w-52 h-52 md:w-96 md:h-96 max-w-md object-cover rounded-full" src={user?.photoURL} alt="profile-picture" />
                </div>


                <div className="p-6 text-center">
                    <h4 className="mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900 flex items-center justify-center capitalize">
                        {user?.displayName} <Link to={`/dashboard/user/settings/user`} className="hover:text-green-600"><FaEdit className="translate-x-5" /></Link>
                    </h4>
                    <p className="block font-bold font-sans text-base antialiased leading-relaxed text-transparent bg-gradient-to-tr from-indigo-600 to-gray-400 bg-clip-text capitalize">
                        {role?.role} / ContestHub
                    </p>
                </div>
                <div className="flex justify-center p-6 pt-2 gap-7">
                    <a
                        href="#facebook"
                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                    >
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a
                        href="#twitter"
                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                    >
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a
                        href="#instagram"
                        className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                    >
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GlobalProfile