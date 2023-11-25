import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { Link } from "react-router-dom";


/* eslint-disable react/no-unescaped-entities */
const Login = () => {
    const [showPaas, setShowPaas] = useState(false);
    const handleTogglePass = () => {
        setShowPaas(!showPaas)
    }


    return (
        <div className="py-10 gb-img">
            <div>
                <form className="relative flex w-[90%] md:w-[60%] lg:w-[40%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto py-5">

                    {/* heading */}
                    <div className="relative mx-4 -mt-6 mb-4 grid h-16 md:h-28 place-items-center overflow-hidden rounded-xl bg-black bg-clip-border text-white shadow-lg shadow-gray-300">
                        <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased text-center">
                            <span className="hidden md:flex">Contest-Hub</span> Login!
                        </h3>
                    </div>

                    <div className="flex flex-col gap-4 p-6">
                        {/* email */}
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                required
                                type="email"
                                name="email"
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>

                        {/* password */}
                        <div className="relative h-11 w-full min-w-[200px]">
                            {
                                showPaas ? <AiFillEyeInvisible onClick={handleTogglePass} className="absolute right-2 text-xl top-3 cursor-pointer " />
                                    :
                                    <AiFillEye onClick={handleTogglePass} className="absolute right-2 text-xl top-3 cursor-pointer " />
                            }
                            <input
                                required
                                type={showPaas ? 'text' : 'password'}
                                name="password"
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            />
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>

                        </div>
                    </div>

                    {/* submit button */}
                    <div className="p-6 pt-0">
                        <button
                            className="block w-full select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Login
                        </button>
                        <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                            Don't have an account?
                            <Link to={'/register'}
                                href="#signup"
                                className="ml-1 block font-sans text-sm font-bold leading-normal  antialiased"
                            >
                                Register
                            </Link>
                        </p>
                    </div>

                </form>

                <div className="flex w-[90%] md:w-[60%] lg:w-[40%] border flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto py-5 mt-5">
                    <p className="text-center font-medium my-2">or</p>
                    <div className="w-full flex justify-center">
                        <button className="mt-2 btn hover:bg-black rounded-md w-[90%] bg-black text-white ">Login with Google<FcGoogle className="text-2xl" /></button>

                    </div>
                    <div className="w-full flex justify-center">
                        <button className="mt-2 btn hover:bg-black rounded-md w-[90%] bg-black text-white ">Login with GitHub<BsGithub className="text-2xl" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login