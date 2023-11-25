/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner";
import useGlobal from "../Hooks/useGlobal"

const PrivateRoute = ({ children }) => {
    const { pathname } = useLocation();
    const { user, loading } = useGlobal();
    if (loading) return <Spinner />
    if (user) return children
    return <Navigate to={'/login'} state={pathname}></Navigate>
}

export default PrivateRoute