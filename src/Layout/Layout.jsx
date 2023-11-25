import { Outlet } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"

const Layout = () => {
    return (
        <div className="scroll-smooth">
            <Navbar />
            <div className="min-h-[80vh]">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout