import axiosCLient from "./AxiosCLient"

export const category = { 
    movie: 'movie', 
    tv: 'tv',
} 
export const movieType = { 
    upcoming: 'upcoming',
    popular:'popular', 
    top_rated: 'top_rated'
} 
export const tvType = { 
    on_the_air:'on_the_air',
    popular:'popular', 
    top_rated: 'top_rated'
} 
const tmdbApi ={ 
    getMoviesList: (type,params) =>{ 
        const url = 'movie/' + movieType[type] 
        return axiosCLient.get(url,params)
    }, 
    getTvList: (type, params) => { 
        const url =  'tv/' + tvType[type] 
        return axiosCLient.get(url, params)
    },
    getVideos: (type, id) => { 
        const url =  category[type] + '/' + id + '/videos'; 
        return axiosCLient.get(url, {params:{}})
    },
    search: (type, params) => { 
        const url =  'search/' + category[type]; 
        return axiosCLient.get(url, params)
    },
    detail: (type, id, params) => { 
        const url =  category[type] + '/' + id
        return axiosCLient.get(url, params)
    },
    credits: (type, id) => { 
        const url =  category[type] + '/' + id + '/credits'
        return axiosCLient.get(url, {params:{}})
    },
    similar: (type, id) => { 
        const url =  category[type] + '/' + id + '/similar'
        return axiosCLient.get(url, {params:{}})
    },
} 
export default tmdbApi