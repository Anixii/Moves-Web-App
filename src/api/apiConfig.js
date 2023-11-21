const config = { 
    baseUrl: 'https://api.themoviedb.org/3/', 
    apiKey: 'c98f13b34193f1d2a01163eda4a04163', 
    originalImage: (path) => `https://image.tmdb.org/t/p/original/${path}`,
    w500Image: (path) => `https://image.tmdb.org/t/p/w500/${path}`
} 
export default config