import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useGlobal from "./useGlobal";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: { token: localStorage.getItem('token') }
});

const useSecureAxios = () => {
    // const navigate = useNavigate();
    // const { logOutUser } = useGlobal();

    // // interceptor activities here
    // instance.interceptors.request.use(function (config) {
    //     // Do something before request is sent

    //     // another way
    //     const token = localStorage.getItem('token')
    //     config.headers.token = token
    //     // another way

    //     return config;
    // }, function (error) {
    //     // Do something with request error
    //     return Promise.reject(error);
    // });


    // instance.interceptors.response.use(function (response) {
    //     return response;
    // }, function (error) {
    //     console.log('error in the interceptor is ', error)
    //     const status = error.response.status;
    //     if (status === 401 || status === 403) {
    //         console.log('kick out the user and navigate to login page')
    //         logOutUser()
    //         navigate('/login')
    //     }
    //     return Promise.reject(error);
    // });

    return instance;
}

export default useSecureAxios