import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            header here
            <div className="min-h-[80vh]">
                <Outlet />
            </div>
            footer here
        </div>
    )
}

export default Layout