import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: { token: localStorage.getItem('token') }
});

const useSecureAxios = () => {

    // interceptor activities here


    return instance;
}

export default useSecureAxios