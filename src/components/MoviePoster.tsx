import React from 'react';
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie;
}

export const MoviePoster = ({ movie }: Props) => {

    const { height, width } = useWindowDimensions();
    
    const IMAGE_URI = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;


    return (
        <View style={{
            width: width * 0.7,
            height: height * 0.6
        }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: IMAGE_URI }}
                    style={[
                        styles.image,
                        {

                        }
                    ]}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    /* cardContainer: {
        width: SCREEN_WIDTH * 0.3,
        height: 420,
    }, */
    image: {
        flex: 1,
        borderRadius: 18,
        /* top: 10,
        marginRight: 6,
        marginBottom: 14  */

    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        elevation: 5,
        /* shadowColor: '#000', this property only works fr Android API 28 or higher*/
        /* All these properties only works in IOS
         shadowOffset: {
            width: 3,
            height: 8
        }, */
        /*  shadowOpacity: 0.34,
         shadowRadius: 7, */

    }
})