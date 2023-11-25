import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import AllContest from "../Pages/AllContest/AllContest"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/allContest', element: <AllContest /> }
        ]
    },
    { path: '/login', element: <Login /> }
])

export default Routes