import { View, StyleSheet, Image, FlatList, Text, useWindowDimensions } from "react-native"
import products from "../data/products.json"

const ProductDetailsScreen = () => {
    const { width } = useWindowDimensions()
    const product = products[0]
    return (
        <View>
            <FlatList 
                data={product.images}
                renderItem={({item}) => (
                    <Image 
                        source={{ uri: item.image}} 
                        style={{ width: width, aspectRatio: 1 }} 
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
            <Text>{product.name}</Text>

            {/* Price */}

            {/* Description */}

            {/* Add to to cart button */}

            {/* Navigation icon */}
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ProductDetailsScreen