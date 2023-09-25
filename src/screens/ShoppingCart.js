import { FlatList, Text, StyleSheet, View, Pressable } from "react-native"
import CartListItem from "../components/CartListItem"
import cart from "../data/cart"

const ShoppingCart = () => {
    return (
        <View>
            <FlatList 
            data={cart}
            renderItem={({item}) => <CartListItem cartItem={item}></CartListItem>}
            ListFooterComponent={() => {
                <View style={styles.totalContainer}>
                    <View style={styles.row}>
                        <Text style={styles.text}>Subtotal</Text>
                        <Text style={styles.text}>321,00 US$</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>Deliver</Text>
                        <Text style={styles.text}>1,00 US$</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textBold}>Total</Text>
                        <Text style={styles.textBold}>322,00 US$</Text>
                    </View>
                </View>
            }}
            />
            <Pressable onPress={} >
                <Text>Submit</Text>
            </Pressable>
        </View>
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
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    text: {
        fontSize: 16,
        color: 'gray',
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500'
    }
})