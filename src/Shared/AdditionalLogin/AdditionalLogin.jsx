import { BsGithub } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"
import useGlobal from "../../Hooks/useGlobal"
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import usePublicAxios from "../../Hooks/usePublicAxios";


const AdditionalLogin = () => {
    const navigate = useNavigate();
    const { additionalLogin } = useGlobal();
    const { state } = useLocation();
    const publicAxios = usePublicAxios();

    const afterLogin = async (userInfo) => {
        try {
            await publicAxios.post(`/users`, userInfo)
            navigate(state || '/');
            toast.success(`login successfull!`);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            toast.error(error.message || 'Oops!')
        }
    }

    const handleGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const googleRes = await additionalLogin(provider);

            const userInfo = {
                email: googleRes?.user?.email,
                name: googleRes?.user?.displayName,
                role: 'user',
                promotionRequest: null,
            }
            await afterLogin(userInfo)
        } catch (error) {
            toast.error(error?.message || 'Oops!')
        }
    }

    const handleGithub = async () => {
        try {
            const provider = new GithubAuthProvider();
            const githubRes = await additionalLogin(provider);

            const userInfo = {
                email: githubRes?.user?.email || 'not available(github)',
                name: githubRes?.user?.displayName || 'not available(github)',
                role: 'user',
                promotionRequest: null,
            }
            await afterLogin(userInfo)
        } catch (error) {
            toast.error(error?.message || 'Oops!')
        }
    }

    return (
        <div className="flex w-[90%] md:w-[60%] lg:w-[40%] border flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md shadow-sky-900 mx-auto py-5 mt-5">
            <p className="text-center font-medium my-2">or</p>
            <div className="w-full flex justify-center">
                <button onClick={handleGoogle} className="mt-2 btn hover:bg-black rounded-md w-[90%] bg-black text-white ">Login with Google<FcGoogle className="text-2xl" /></button>

            </div>
            <div className="w-full flex justify-center">
                <button onClick={handleGithub} className="mt-2 btn hover:bg-black rounded-md w-[90%] bg-black text-white ">Login with GitHub<BsGithub className="text-2xl" /></button>
            </div>
        </div>
    )
}

export default AdditionalLogin