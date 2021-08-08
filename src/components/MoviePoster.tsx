import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}
/* const { height , width } = useWindowDimensions(); */

export const MoviePoster = ({
    movie,
    height = useWindowDimensions().height * 0.51,
    width = useWindowDimensions().width * 0.7
}: Props) => {

    /* const { height, width } = useWindowDimensions(); */

    const IMAGE_URI = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 5
            }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: IMAGE_URI }}
                    style={[
                        styles.image
                    ]}
                />
            </View>

        </TouchableOpacity>
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
        /* elevation: 5, */
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