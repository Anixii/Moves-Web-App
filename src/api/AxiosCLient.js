import axios from "axios";
import config from "./apiConfig";
import queryString from 'query-string'
const axiosCLient = axios.create({ 
    baseURL: config.baseUrl, 
    headers:{
        'Content-Type': 'aplication/json',  
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOThmMTNiMzQxOTNmMWQyYTAxMTYzZWRhNGEwNDE2MyIsInN1YiI6IjY1MmQ1ZjRiNjYxMWI0MDBjNTBmZDQ3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BOh-bA3wMQAbMdh23nK8N8ZS38AhOL87Qb0yRv3BtUQ'
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
