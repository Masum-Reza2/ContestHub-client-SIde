import { Helmet } from "react-helmet-async"
import Advertisement from "../../Components/Advertisement/Advertisement"
import BannerSection from "../../Components/Banner/BannerSection"
import TopCreators from "../../Components/TopCreators/TopCreators"
import UpcomingContests from "../../Components/UpcomingContests/UpcomingContests"
import HappyClients from "../../Components/HappyClients/HappyClients"

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Contest Hub | Home</title>
            </Helmet>

            <BannerSection />

            <div data-aos="fade-right">
                <Advertisement />
            </div>

            <div data-aos="fade-right">
                <TopCreators />
            </div>

            <HappyClients />

            <div data-aos="zoom-in">
                <UpcomingContests />
            </div>


        </>
    )
}

export default Home