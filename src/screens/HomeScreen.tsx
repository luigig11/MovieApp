import React, { useEffect } from 'react';
import { ActivityIndicator, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import movieDB from '../api/movieDB';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';
import Carousel from 'react-native-snap-carousel';

export const HomeScreen = () => {

    const { moviesInTheaters, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    const { width } = useWindowDimensions();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )

    }

    console.log(moviesInTheaters[0]?.title);
    return (
        <View style={{ marginTop: top + 20 }}>
            <View style={{width: (width * 0.7) + 20}}>
                <Carousel
                    data={moviesInTheaters}
                    renderItem={({ item }: any) => <MoviePoster movie={item} />}
                    sliderWidth={width}
                    itemWidth={250}

                />
            </View>

        </View>
    )
}