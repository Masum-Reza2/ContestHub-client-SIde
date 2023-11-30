import axios from "axios";
import useGlobal from "./useGlobal";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
    baseURL: 'https://contest-hub-server-mu.vercel.app',
    headers: { token: localStorage.getItem('token') }
});

const useSecureAxios = () => {
    const navigate = useNavigate();
    const { logOutUser, user } = useGlobal();

    if (user) {
        setTimeout(() => {
            instance.interceptors.response.use(function (response) {
                return response;
            }, function (error) {
                const status = error.response.status;
                if (status === 401 || status === 403) {
                    logOutUser()
                    navigate('/login')
                }
                return Promise.reject(error);
            });
        }, 2000);
    }


    return instance;
}

export default useSecureAxios