/* import React from 'react'; */

import { useEffect, useState } from "react"
import movieDB from "../api/movieDB";
import { CreditsResponse } from "../interfaces/creditsInterface";
import { MovieFull } from "../interfaces/movieInterface";

interface MovieDetails {
    isLoadig: boolean;
    movieFull?: MovieFull
    cast: any[];
}

export const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoadig: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () => {
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);
        
        const [movieDetailResp, castPromiseResp] = await Promise.all([movieDetailsPromise, castPromise]);
        
        setState({
            isLoadig: false,
            movieFull: movieDetailResp.data,
            cast: castPromiseResp.data.cast
        })

    }

    useEffect(() => {
        getMovieDetails();
    }, [movieId])

    return {
        ...state
    }

}