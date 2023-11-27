import { Link, useParams } from "react-router-dom"
import Spinner from "./Spinner";
import Countdown from 'react-countdown';
import useSecureAxios from "../Hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";


const ContestDetails = () => {
    const { id } = useParams();
    const secureAxios = useSecureAxios();
    const { data: details = {}, isPending } = useQuery({
        queryKey: ['singleContest'],
        queryFn: async () => {
            const res = await secureAxios.get(`/contests/${id}`)
            return res?.data;
        }
    })

    const { contestName, photoUrl, participateCount, contestTask, description, contestPrice, prizeMoney, deadline, contestType } = details;

    const futureDate = new Date(deadline);
    const currentDate = new Date();
    const timeDifference = futureDate.getTime() - currentDate.getTime();

    const handleTimeDeff = () => {
        if (!timeDifference) {
            return toast.error(`Oops you are late! the door is closed now.`)
        }
    }

    if (isPending) return <Spinner />
    return (
        <div>
            <div className="w-full h-[90vh]">
                <img className="h-full w-full object-cover" src={photoUrl} alt="" />
            </div>
            <h1 className="text-center text-xl md:text-2xl font-semibold py-5">{contestName}</h1>
            <p className="text-center font-bold text-2xl pb-5">
                Deadline : <Countdown date={Date.now() + timeDifference} />
            </p>
            {
                timeDifference ?
                    <div className="flex flex-col items-center justify-center border shadow-md shadow-indigo-900">
                        <div className="py-5 space-y-2 font-semibold">
                            <p className="border px-10 md:px-16 shadow-sm shadow-black">Contest Type : {contestType}</p>
                            <p className="border px-10 md:px-16 shadow-sm shadow-black">Contest Price : ${contestPrice}</p>
                            <p className="border px-10 md:px-16 shadow-sm shadow-black">Prize money : ${prizeMoney}</p>
                            <p className="border px-10 md:px-16 shadow-sm shadow-black">Total participations : {participateCount}</p>
                        </div>
                    </div>
                    :
                    <p>winner declered</p>
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
                <Link to={timeDifference ? `/payment/${id}` : '/'}>
                    <button onClick={handleTimeDeff} disabled={!timeDifference} className="btn btn-block btn-success text-gray-900 text-lg">Registration</button>
                </Link>
            </div>

        </div>
    )
}

export default ContestDetails