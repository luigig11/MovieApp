import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ScrollView, Dimensions, Image, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { } from 'react-native-gesture-handler';
/* import { Movie } from '../interfaces/movieInterface'; */
import { RootStackParams } from '../Navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ navigation, route }: Props) => {

    const movie = route.params;
    const IMAGE_URI = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const { isLoadig, movieFull, cast } = useMovieDetails(movie.id);

    console.log({ movieFull });
    /* 379686 */
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: IMAGE_URI }}
                    style={styles.posterImage}
                />
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            {
                isLoadig
                    ? <ActivityIndicator size={35} color='grey' style={{ marginTop: 20 }} />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }

            {/* Close Button */}
            <TouchableOpacity 
                style={styles.backButton}
                onPress={() => navigation.pop()}
            >
                <Icon
                    color='white'
                    name='arrow-back-outline'
                    size={40}
                    
                />
            </TouchableOpacity>


        </ScrollView>

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        overflow: 'hidden', /* para garantizar que el componente hijo no se salga de los bordes de su padre */
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    posterImage: {
        flex: 1
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        elevation: 9,
        top: 30,
        left: 5
    }
})