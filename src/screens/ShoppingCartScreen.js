import { FlatList, Text, StyleSheet, View, Pressable } from "react-native"
import CartListItem from "../components/CartListItem"
import cart from "../data/cart"

const ShoppingCartTotals = () => {
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
}

const ShoppingCartScreen = () => {
    return (
        <>
            <FlatList 
            data={cart}
            renderItem={({item}) => <CartListItem cartItem={item}></CartListItem>}
            ListFooterComponent={ShoppingCartTotals}
            />
            <Pressable style={styles.button} >
                <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
        </>
    )
}

export default ShoppingCartScreen

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