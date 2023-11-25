import { AiOutlineMenu } from "react-icons/ai"
import { NavLink, Outlet } from "react-router-dom"

const CreatorDashboard = () => {
    const navLinks = <>
        <li><NavLink to={'/dashboard/creator/addContest'}>Add Contest</NavLink></li>
        <li><NavLink to={'/dashboard/creator/myCreations'}>My creations</NavLink></li>
    </>
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <label htmlFor="my-drawer-2" className="lg:hidden fixed mt-3 ml-3 transition-all duration-100 bg-sky-300 p-2 rounded-md">
                    <AiOutlineMenu className="text-2xl" />
                </label>
                <div className="drawer-content pt-14 lg:pt-5 lg:py-5">
                    {/* Page content here */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {navLinks}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default CreatorDashboard