import { 
    View, 
    StyleSheet, 
    Image, 
    FlatList, 
    Text, 
    ScrollView,
    Pressable,
    useWindowDimensions, 
} from "react-native"
import products from "../data/products.json"

const ProductDetailsScreen = () => {
    const { width } = useWindowDimensions()
    const product = products[0]

    const addToCart = () => {
        console.warn('Add to cart')
    }

    return (
        <View>
            <ScrollView > 
                <FlatList
                    data={product.images}
                    renderItem={({item}) => (
                        <Image 
                            source={{ uri: item}} 
                            style={{ width: width, aspectRatio: 1 }} 
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />
                <View style={ { padding: 20 } }>
                    <Text style={styles.title}>{product.name}</Text>

                    <Text style={styles.price}>{product.price}</Text>

                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            <Pressable onPress={addToCart} style={styles.button}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </Pressable>

            {/* Navigation icon */}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10,
    },
    price: {
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 1.5,
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 30,
        fontWeight: '300',
    },
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    }
})

export default ProductDetailsScreen