import { Carousel } from "react-responsive-carousel";
import useAllContests from "../../Hooks/useAllContests"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const UpcomingContests = () => {
    const { contests } = useAllContests();
    const upcoming = contests?.filter(contest => contest?.status === 'pending')
    console.log(upcoming)
    return (
        <>
            {
                upcoming?.length > 0 && <div className="py-5">
                    <h1 className="text-lg md:text-2xl font-bold mb-2 border shadow-md shadow-indigo-900 px-5 text-green-600">Upcoming contests...</h1>

                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        showArrows={false}
                        showStatus={false}
                        showThumbs={false}
                        stopOnHover={true}
                        interval={3000}
                    >
                        {
                            upcoming?.map((item, index) => <div key={index} className="md:h-[90vh] h-full w-full relative ">
                                <div className="absolute w-full h-full bg-opacity-30 md:h-[90vh] bg-black"></div>
                                <img className="object-cover" src={item?.photoUrl} />
                                <div className="absolute text-gray-100 top-0 border flex flex-col items-center justify-center w-full h-full">
                                    <p className="z-10  font-bold text-lg md:text-3xl">{item?.contestName}</p>
                                    <p className=" px-5 lg:px-80 text-start lg:text-lg">{item?.description.slice(0, 150)}...</p>
                                </div>
                            </div>)
                        }
                    </Carousel>

                </div>
            }
        </>

    )
}

export default UpcomingContests