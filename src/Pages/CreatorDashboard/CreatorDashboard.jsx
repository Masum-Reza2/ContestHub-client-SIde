import { AiFillHome, AiOutlineMenu } from "react-icons/ai"
import { NavLink, Outlet } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { FaListCheck } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { GiAutoRepair } from "react-icons/gi";


const CreatorDashboard = () => {
    const navLinks = <>
        <li><NavLink to={'/dashboard/creator/addContest'}><IoIosAddCircle className="text-xl" />Add Contest</NavLink></li>
        <li><NavLink to={'/dashboard/creator/myCreations'}><FaListCheck className="" />My creations</NavLink></li>

        <div className="divider"></div>
        <li><NavLink to={'/'}><AiFillHome className="text-lg" />Home</NavLink></li>
    </>
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <label htmlFor="my-drawer-2" className="lg:hidden fixed mt-3 ml-3 transition-all duration-100 bg-sky-300 p-2 rounded-md">
                    <AiOutlineMenu className="text-2xl" />
                </label>
                <div className="drawer-content pt-14 lg:pt-3 lg:py-5 overflow-x-auto">
                    {/* Page content here */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content space-y-2">
                        {/* Sidebar content here */}
                        {navLinks}
                        <div className="absolute bottom-3 w-full left-0 space-y-2">
                            <li><NavLink to={'/dashboard/user/profile/user'}><CgProfile className="text-xl" />Profile</NavLink></li>
                            <li><NavLink to={'/dashboard/user/settings/user'}><GiAutoRepair className="text-xl" />Settings</NavLink></li>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default CreatorDashboard