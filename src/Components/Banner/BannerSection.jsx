import { FaSearch } from "react-icons/fa"
import Banner from "./Banner"
import Typer from "./Typer"
import usePublicAxios from "../../Hooks/usePublicAxios"
import Spinner from "../Spinner"
import TabCard from "../TabCard"
import { useEffect, useState } from "react"

const BannerSection = () => {
    const publicAxios = usePublicAxios();
    const [searchText, setSearchText] = useState('');
    const [populerContests, setPopulerContests] = useState([]);
    console.log(searchText)

    useEffect(() => {
        publicAxios.get(`/populerContest?searchText=${searchText}`)
            .then(res => {
                setPopulerContests(res?.data)
            })
    }, [searchText, publicAxios])


    if (populerContests?.length <= 0) return <Spinner />
    return (

        <>

            <div className="relative">
                <Banner />
                <div className="absolute top-0 flex gap-5 flex-col items-center justify-center w-full h-full">
                    <Typer />
                    <h1 className="text-white text-2xl translate-y-3">Find populer contests here.</h1>
                    <div>
                        <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search by contest type" className="input input-bordered w-full max-w-xs placeholder:text-center input-sm" />
                    </div>
                </div>
            </div>

            <div className="p-5">
                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        populerContests?.map((item, index) => <TabCard key={index} item={item} />)
                    }
                </div>
            </div>

        </>
    )
}

export default BannerSection