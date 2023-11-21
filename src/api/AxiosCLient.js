import axios from "axios";
import config from "./apiConfig";
import queryString from 'query-string'
const axiosCLient = axios.create({ 
    baseURL: config.baseUrl, 
    headers:{
        'Content-Type': 'aplication/json', 
    }, 
    paramsSerializer: params => queryString.stringify({...params, api_key: config.apiKey})
})
axiosCLient.interceptors.request.use(async (config) => config)
axiosCLient.interceptors.request.use((response) => { 
    if(response && response.data){ 
        return response.data
    } 
    return response
}, (error) => { 
    throw error
}) 
export default axiosCLient
