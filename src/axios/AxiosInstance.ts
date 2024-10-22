import { BASE_API_URL } from 'common/constants'
import axios, { CreateAxiosDefaults, AxiosError, InternalAxiosRequestConfig } from 'axios'


const AxiosInstanceConfig: CreateAxiosDefaults<any> | undefined = {
    baseURL: BASE_API_URL,
    headers: {
        platform: 'web',
        'Content-Type': 'application/json',
    }
}

const AxiosInstance = axios.create(AxiosInstanceConfig)

AxiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>) => {
        // Modify the request config (e.g., add headers, tokens, etc.)
        // For example:
        // config.headers['Authorization'] = 'Bearer ' + authToken;

        const token = localStorage.getItem('jwtToken')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        // Handle request errors (e.g., network errors)
        return Promise.reject(error)
    }
)


AxiosInstance.interceptors.response.use(
    (response) => {
        // Modify the response data or do other actions
        // For example:
        // return response.data;
        return response
    },
    (error: AxiosError | any) => {
        // Handle response errors (e.g., HTTP errors, custom error codes)
        return Promise.reject(error)
    }
)

export default AxiosInstance