import { useQuery } from "@tanstack/react-query";
import { GiPartyPopper } from "react-icons/gi";
import useGlobal from "../../../Hooks/useGlobal";
import useSecureAxios from "../../../Hooks/useSecureAxios";
import Spinner from "../../../Components/Spinner";
import Cover from "../../../Components/Cover";

import trofee from '../../../assets/contestImages/cup-1010909_1920.jpg'
import WinnerRow from "./WinnerRow";
import sad from '../../../assets/contestImages/sad.png'


const UserWinnings = () => {
    const { user } = useGlobal();
    const secureAxios = useSecureAxios();
    const { data: userWinnings = [], isPending } = useQuery({
        queryKey: ['winnings', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/userWinnings/${user?.email}`)
            return res?.data;
        }
    })
    console.log(userWinnings)

    if (isPending) return <Spinner />
    return (

        <>
            {
                userWinnings?.length > 0 ?
                    <div>

                        <h1 className="text-center font-semibold text-lg md:text-2xl flex justify-center items-center md:hidden">Congratulations!<GiPartyPopper className="text-2xl hidden md:block" /> | on your {userWinnings?.length} contest winnings.</h1>
                        <div className="hidden md:block">
                            <Cover img={trofee} title={'Congratulations!'} desc={`On your ${userWinnings?.length} contest winnings.`} />
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead className="bg-gray-600 text-white">
                                    <tr>
                                        <th>
                                        </th>
                                        <th>Image</th>
                                        <th>Contest Name</th>
                                        <th>Win Prize</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userWinnings?.map((contest, index) => <WinnerRow key={contest?._id} contest={contest} index={index} />)
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col items-center justify-center min-h-[90vh]">
                        <img className="h-[98vh] w-full object-cover" src={sad} alt="" />
                        <h1 className="text-xl md:text-2xl font-bold px-5 text-center absolute top-16 md:top-20 lg:top-5 text-orange-300">Oops! you never win any contest yet.</h1>
                    </div>
            }

        </>
    )
}

export default UserWinnings