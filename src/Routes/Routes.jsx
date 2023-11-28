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
import UserParticipations from "../Pages/UserDashboard/UserComponents/UserParticipations"
import UserWinnings from "../Pages/UserDashboard/UserComponents/UserWinnings"
import GlobalProfile from "../Components/GlobalProfile"
import Settings from "../Components/Settings"
import UserHome from "../Pages/UserDashboard/UserComponents/UserHome"
import ContestDetails from "../Components/ContestDetails"
import Payment from "../Payments/Payment"
import TotalParticipant from "../Pages/CreatorDashboard/creatorComponents/TotalParticipant"


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/allContest', element: <AllContest /> },
            { path: '/details/:id', element: <PrivateRoute><ContestDetails /></PrivateRoute> },
            { path: '/payment/:id', element: <Payment /> }
        ]
    },

    // user dashboard
    {
        path: '/dashboard/user',
        element: <PrivateRoute><DashboardUser /></PrivateRoute>,
        children: [
            { index: true, element: <UserHome /> },
            { path: 'participations', element: <UserParticipations /> },
            { path: 'winnings', element: <UserWinnings /> },
            { path: 'profile/:user', element: <GlobalProfile /> },
            { path: 'settings/:user', element: <Settings /> },
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
            { path: 'updateContest/:id', element: <UpdateContest /> },
            { path: 'participants/:id', element: <TotalParticipant /> },
            { path: 'profile/:user', element: <GlobalProfile /> },
            { path: 'settings/:user', element: <Settings /> },
        ]
    },

    // admin dashboard
    {
        path: '/dashboard/admin',
        element: <AdminRoute><AdminDashboard /></AdminRoute>,
        children: [
            { index: true, element: <AdminHome /> },
            { path: 'manageUsers', element: <ManageUsers /> },
            { path: 'manageContest', element: <ManageContests /> },
            { path: 'profile/:user', element: <GlobalProfile /> },
            { path: 'settings/:user', element: <Settings /> },
        ]
    },

    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
])

export default Routes