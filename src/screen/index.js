import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from "react-native"

//Imgs
import amazonLogo from '../assets/amazon_logo.png'
import primeVideo from '../assets/prime_video.png'
import movieTheWheel from '../assets/movies/the_wheel_of_time.png'

//data
import {MOVIESWATCHING} from '../utils/moviesWatching'
import {MOVIESCRIME} from '../utils/moviesCrimes'
import {MOVIESWATCH} from '../utils/moviesWatch'

//Components
import MovieCard from '../components/MovieCard'

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.primeLogo} source={primeVideo}/>
                <Image style={styles.amazonLogo} source={amazonLogo}/>
            </View>
            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMoves}>
                <TouchableOpacity style={styles.movieThumbnail}>
                    <Image source={movieTheWheel} style={styles.movieImg}/>
                </TouchableOpacity>

                <Text style={styles.movieText}>Continue Watching</Text>
                <FlatList 
                    data={MOVIESWATCHING} 
                    keyExtractor={item => item.id}
                    renderItem={({item})=> <MovieCard movieURL={item.moviesURL}/>}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                    />

                <Text style={styles.movieText}>Crime Movies</Text>
                <FlatList 
                    data={MOVIESCRIME} 
                    keyExtractor={item => item.id}
                    renderItem={({item})=> <MovieCard movieURL={item.moviesURL}/>}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                    />

                <Text style={styles.movieText}>What your language</Text>
                <FlatList 
                    data={MOVIESWATCH} 
                    keyExtractor={item => item.id}
                    renderItem={({item})=> <MovieCard movieURL={item.moviesURL}/>}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                    />
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#232F3E",
        alignItems: 'flex-start'
    },

    header:{
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    
    amazonLogo:{
        marginTop: -32,
        marginLeft: 30
    },

    category:{
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
        marginBottom: 15
    },

    categoryText:{
        fontSize: 14,
        fontWeight: "700",
        color: "#fff"
    },

    movieText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "700",
        padding: 15
    },

    movieThumbnail:{
        width: "100%",
        alignItems: "center"
    },

    contentList:{
        paddingLeft: 18,
        paddingRight: 30
    },

    contentMoves: {
        marginBottom: 20
    }
})