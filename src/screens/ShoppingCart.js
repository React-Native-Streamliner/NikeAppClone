import { FlatList, Text, StyleSheet, View } from "react-native"
import CartListItem from "../components/CartListItem"
import cart from "../data/cart"

const ShoppingCart = () => {
    return (
        <FlatList 
            data={cart}
            renderItem={({item}) => <CartListItem cartItem={item}></CartListItem>}
            ListFooterComponent={() => {
                <View style={styles.totalContainer}>
                    <View style={styles.row}>
                        <Text>Subtotal</Text>
                        <Text>321,=, 00 US$</Text>
                    </View>
                </View>
            }}
        />
    )
}

export default ShoppingCart

const styles = StyleSheet.create({
    totalContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})