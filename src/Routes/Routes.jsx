import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import AllContest from "../Pages/AllContest/AllContest"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import DashboardUser from "../Pages/UserDashboard/DashboardUser"
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard"
import CreatorDashboard from "../Pages/CreatorDashboard/CreatorDashboard"
import PrivateRoute from "./PrivateRoute"
import CreatorRoute from "./CreatorRoute"
import AdminRoute from "./AdminRoute"
import AddContest from "../Pages/CreatorDashboard/creatorComponents/AddContest"
import MyCreations from "../Pages/CreatorDashboard/creatorComponents/MyCreations"
import CreatorHome from "../Pages/CreatorDashboard/creatorComponents/CreatorHome"
import UpdateContest from "../Pages/CreatorDashboard/creatorComponents/UpdateContest"
import AdminHome from "../Pages/AdminDashboard/AdminComponents/AdminHome"
import ManageUsers from "../Pages/AdminDashboard/AdminComponents/ManageUsers"
import ManageContests from "../Pages/AdminDashboard/AdminComponents/ManageContests"


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/allContest', element: <AllContest /> }
        ]
    },

    // user dashboard
    {
        path: '/dashboard/user',
        element: <PrivateRoute><DashboardUser /></PrivateRoute>,
        children: [

        ]
    },

    // creator dashboard
    {
        path: '/dashboard/creator',
        element: <CreatorRoute><CreatorDashboard /></CreatorRoute>,
        children: [
            { index: true, element: <CreatorHome /> },
            { path: 'addContest', element: <AddContest /> },
            { path: 'myCreations', element: <MyCreations /> },
            { path: 'updateContest/:id', element: <UpdateContest /> }
        ]
    },

    // admin dashboard
    {
        path: '/dashboard/admin',
        element: <AdminRoute><AdminDashboard /></AdminRoute>,
        children: [
            { index: true, element: <AdminHome /> },
            { path: 'manageUsers', element: <ManageUsers /> },
            { path: 'manageContest', element: <ManageContests /> }
        ]
    },



    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
])

export default Routes