import { useQuery } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";
import usePublicAxios from "../../Hooks/usePublicAxios";
import WinnerCard from "../WinnerCard";
import { Link } from "react-router-dom";

const Advertisement = () => {
    const publicAxios = usePublicAxios();
    const { data: winners = [], isPending } = useQuery({
        queryKey: ['advertisement'],
        queryFn: async () => {
            const res = await publicAxios.get(`getAllWinner`)
            return res?.data;
        }
    })



    if (isPending) return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    return (
        <div className="px-2 md:px-5 border-y-2 mt-10 mb-5 bg-white shadow-md shadow-indigo-900 rounded-lg py-2 md:py-5">
            <p className="text-center text-2xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold">Meet our lucky winners!</p>
            <Marquee pauseOnHover>
                {
                    winners?.map(winner => <div key={winner?._id} className="py-5 ml-10 cursor-pointer"><WinnerCard mrWinner={winner} /></div>)
                }
            </Marquee>
            <Link to={'/allContest'} className="btn btn-block btn-success text-white"><button>Participate Now</button></Link>
        </div>
    )
}

export default Advertisement