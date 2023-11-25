import toast from 'react-hot-toast';
import useGlobal from '../../Hooks/useGlobal'
import defaultProfile from '../../assets/profile/defaultprofile.jpg'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { logOutUser, user } = useGlobal();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOutUser();
            navigate('/login')
            toast.success(`Logout Successfull!`);
        } catch (error) {
            toast.error(error.message || `Oops!`)
        }
    }

    return (
        <div className="lg:mx-5">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt={`image of ${user?.displayName}`} src={user?.photoURL || defaultProfile} />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 font-medium">
                    <li>
                        <a className="justify-between hover:bg-white">
                            {user?.displayName || 'mr Legend!'}
                        </a>
                    </li>
                    <li><a>Dashboard</a></li>
                    <li onClick={handleLogout}><a>Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Profile