import { Link, useParams } from "react-router-dom"
import Spinner from "./Spinner";
import Countdown from 'react-countdown';
import useSecureAxios from "../Hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import WinnerCard from "./WinnerCard";
import { Helmet } from "react-helmet-async";


const ContestDetails = () => {
    const { id } = useParams();
    const secureAxios = useSecureAxios();

    // checking if already any winner 
    const { data: mrWinner = [] } = useQuery({
        queryKey: ['lucky man'],
        queryFn: async () => {
            const res = await secureAxios.get(`/getWinner/${id}`)
            return res?.data
        }
    })

    const { data: details = {}, isPending } = useQuery({
        queryKey: ['singleContest'],
        queryFn: async () => {
            const res = await secureAxios.get(`/contests/${id}`)
            return res?.data;
        }
    })

    const { contestName, photoUrl, participateCount, contestTask, description, contestPrice, prizeMoney, deadline, contestType, _id } = details;

    const futureDate = new Date(deadline);
    const currentDate = new Date();
    const timeDifference = futureDate.getTime() - currentDate.getTime();

    if (timeDifference <= 0) {
        secureAxios.get(`/setWinner/${_id}`)
    }

    const handleTimeDeff = () => {
        if (!timeDifference) {
            return toast.error(`Oops you are late! the door is closed now.`)
        }
    }

    if (isPending) return <Spinner />
    return (
        <div>

            <Helmet>
                <title>Contest Hub | Contest Details</title>
            </Helmet>

            <div className="w-full h-[90vh]">
                <img className="h-full w-full object-cover" src={photoUrl} alt="" />
            </div>
            <h1 className="text-center text-xl md:text-2xl font-semibold py-5">{contestName}</h1>

            {
                timeDifference && !mrWinner[0]?.isWin ?
                    <p className="text-center font-bold text-2xl pb-5">
                        Ends in : <Countdown date={Date.now() + timeDifference} />
                    </p>
                    :
                    <p className="text-center font-bold text-2xl pb-5 text-red-600">Contest Closed!</p>
            }

            {
                timeDifference && !mrWinner[0]?.isWin ?
                    <div className="flex flex-col items-center justify-center border shadow-md shadow-indigo-900">
                        <div className="py-5 space-y-2 font-semibold">
                            <p className="border px-10 md:px-16 shadow-sm shadow-black">Contest Type : {contestType}</p>
                            <p className="border px-10 md:px-16 shadow-sm shadow-black">Contest Price : ${contestPrice}</p>
                            <p className="border px-10 md:px-16 shadow-sm shadow-black">Prize money : ${prizeMoney}</p>
                            <p className="border px-10 md:px-16 shadow-sm shadow-black">Total participations : {participateCount}</p>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col items-center justify-center px-2 gap-3">
                        {mrWinner?.length ?
                            <>
                                <h1 className="font-bold text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">The Winner!</h1>
                                <WinnerCard mrWinner={mrWinner[0]} />
                            </>
                            :
                            <p className="text-red-600 font-bold text-2xl text-center">Oops there was no participant! No winner for this contest.import {Helmet, HelmetProvider} from 'react-helmet-async';
                            </p>
                        }

                    </div>
            }

            <div className="flex flex-col gap-5 md:flex-row py-5 px-2">
                <div className="flex-1 border p-2 rounded-md shadow-md shadow-indigo-900">
                    <h1 className="text-center p-3 font-bold text-xl md:text-2xl underline">Description</h1>
                    <p className="text-sm md:text-base">{description}</p>
                </div>
                <div className="flex-1 border p-2 rounded-md shadow-md shadow-indigo-900">
                    <h1 className="text-center p-3 font-bold text-xl md:text-2xl underline">Task</h1>
                    <p className="text-sm md:text-base">{contestTask}</p>
                </div>
            </div>

            <div className="text-center pb-5">
                <Link onClick={handleTimeDeff} to={timeDifference && !mrWinner[0]?.isWin ? `/payment/${id}` : '/'}>
                    <button disabled={!timeDifference || mrWinner[0]?.isWin} className="btn btn-block btn-success text-gray-900 text-lg">Registration</button>
                </Link>
            </div>

        </div>
    )
}

export default ContestDetails