/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useGlobal from "../Hooks/useGlobal";
import Spinner from "../Components/Spinner";
import useRole from "../Hooks/useRole";

const CreatorRoute = ({ children }) => {
    const { role, isLoading } = useRole();
    const { pathname } = useLocation()
    const { user, loading } = useGlobal();
    if (loading || isLoading) return <Spinner />
    if (user && role?.role === 'creator') return children
    return <Navigate to={'/'} state={pathname}></Navigate>
}

export default CreatorRoute