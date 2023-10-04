const { TouchableOpacity, Image, StyleSheet} = require("react-native")

const MovieCard = (props)=> {
    return (
        <TouchableOpacity>
            <Image style={styles.img} source={props.movieURL}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img:{
        marginRight: 20
    }
})

export default MovieCard

