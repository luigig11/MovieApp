import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import movieDB from '../api/movieDB';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { MovieDBMoviesResponses } from '../interfaces/movieInterface';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated  , upComing, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    const { width, height } = useWindowDimensions();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )

    }
    
    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                {/* main carousel */}
                <View style={{ width: (width * 0.7) + 20, height: (height * 0.53) }}>
                    <Carousel
                        data={nowPlaying!}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={width}
                        itemWidth={300}
                    />
                </View>

                {/* popular movies */}
                <HorizontalSlider title={'Popular'} movies={popular!} />
                <HorizontalSlider title={'Top Rated'} movies={topRated!} />
                <HorizontalSlider title={'UpComing'} movies={upComing!} />
                
            </View>
        </ScrollView>
    )
}