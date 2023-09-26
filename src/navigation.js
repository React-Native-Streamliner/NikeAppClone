import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShoppingCartScreen from './screens/ShoppingCartScreen';

const Navigation = () => {
    return (
        <NavigationContainer>
            <ProductsScreen />
        </NavigationContainer>
    )
}

export default Navigation