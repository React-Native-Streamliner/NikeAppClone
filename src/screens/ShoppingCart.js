import { FlatList, Text } from "react-native"
import CartListItem from "../components/CartListItem"
import cart from "../data/cart"

const ShoppingCart = () => {
    return (
        <FlatList 
            data={cart}
            renderItem={({item}) => <CartListItem cartItem={item}></CartListItem>}
        />
    )
}

export default ShoppingCart