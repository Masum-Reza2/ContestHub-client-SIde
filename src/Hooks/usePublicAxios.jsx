import axios from "axios";

const instance = axios.create({
    baseURL: 'https://contest-hub-server-mu.vercel.app',
    headers: { token: localStorage.getItem('token') }
});

const usePublicAxios = () => {
    return instance
}

export default usePublicAxios