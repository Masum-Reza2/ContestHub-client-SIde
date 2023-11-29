import { Outlet } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"


const Layout = () => {
    return (
        <>
            <div className="scroll-smooth">
                <Navbar />
                <div className="min-h-[80vh]">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout