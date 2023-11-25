import defaultProfile from '../../assets/profile/defaultprofile.jpg'

const Profile = () => {
    return (
        <div className="lg:mx-5">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={defaultProfile} />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 font-medium">
                    <li>
                        <a className="justify-between hover:bg-white">
                            UserName
                        </a>
                    </li>
                    <li><a>Dashboard</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Profile