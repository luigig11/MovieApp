import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBMoviesResponses } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[];
    popular:    Movie[];
    topRated:   Movie[];
    upComing:   Movie[];
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>();
    

    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get<MovieDBMoviesResponses>('/now_playing');
        const popularPromise    = movieDB.get<MovieDBMoviesResponses>('/popular');
        const topRatedPromise   = movieDB.get<MovieDBMoviesResponses>('/top_rated');
        const upcomingPromise   = movieDB.get<MovieDBMoviesResponses>('upcoming');

        const responses = await Promise.all([
            nowPlayingPromise,
            popularPromise,
           topRatedPromise, 
             upcomingPromise
        ]);
        
        setMoviesState({
            nowPlaying: responses[0].data.results,
            popular:    responses[1].data.results,
            topRated:   responses[2].data.results,
            upComing:   responses[3].data.results,
        })

        setIsLoading(false);
    }

    useEffect(() => {
        // now_playing
        getMovies();

    }, [])

    return {
        ...moviesState,
        isLoading
    }

}