import { NavLink } from "react-router-dom"
import Profile from "../Profile/Profile";
import logo from '../../assets/profile/logo-removebg-preview.png'
import useGlobal from "../../Hooks/useGlobal";

const Navbar = () => {
    const { user } = useGlobal()

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allContest'}>All-contest</NavLink></li>
        <li><NavLink to={'/leaderboard'}>Leaderboard</NavLink></li>
    </>

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div className="flex-1 px-2 mx-2 font-semibold lg:hidden">Contest-Hub</div>
                        <div className="avatar hidden flex-1 lg:flex">
                            <div className="w-16 mask mask-squircle invert">
                                <img className=" border-2 border-red-500 hover:border-green-600 cursor-pointer  rounded-full" src={logo} />
                            </div>
                        </div>

                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal space-x-2">
                                {/* Navbar menu content here */}
                                {navLinks}
                            </ul>
                        </div>

                        {user ? <Profile /> : <NavLink to={'/login'}>
                            <li className="btn btn-sm md:btn-md">Login</li>
                        </NavLink>}

                    </div>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 min-h-full bg-base-200 space-y-2">
                        {/* Sidebar content here */}
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar