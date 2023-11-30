import { Helmet } from "react-helmet-async"
import Advertisement from "../../Components/Advertisement/Advertisement"
import BannerSection from "../../Components/Banner/BannerSection"
import TopCreators from "../../Components/TopCreators/TopCreators"

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

            <div data-aos="zoom-out-right">
                <TopCreators />

            </div>
        </>
    )
}

export default Home