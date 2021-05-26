import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'dc3acdfbae76a820a14cee67f19d4b77'
                  
    },   
});

/* const movieDB = fetch('https://api.themoviedb.org/3/movie/:api_key') */

export default movieDB;
