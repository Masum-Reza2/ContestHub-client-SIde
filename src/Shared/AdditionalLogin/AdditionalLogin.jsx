import { BsGithub } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"

const AdditionalLogin = () => {
    return (
        <div className="flex w-[90%] md:w-[60%] lg:w-[40%] border flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md shadow-sky-900 mx-auto py-5 mt-5">
            <p className="text-center font-medium my-2">or</p>
            <div className="w-full flex justify-center">
                <button className="mt-2 btn hover:bg-black rounded-md w-[90%] bg-black text-white ">Login with Google<FcGoogle className="text-2xl" /></button>

            </div>
            <div className="w-full flex justify-center">
                <button className="mt-2 btn hover:bg-black rounded-md w-[90%] bg-black text-white ">Login with GitHub<BsGithub className="text-2xl" /></button>
            </div>
        </div>
    )
}

export default AdditionalLogin