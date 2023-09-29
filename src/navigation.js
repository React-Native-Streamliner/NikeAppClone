import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShoppingCartScreen from './screens/ShoppingCartScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Products" component={ProductsScreen} />
                <Stack.Screen 
                    name="Product Details" 
                    component={ProductDetailsScreen}
                    options={{ presentation: 'modal' }}
                />
                <Stack.Screen 
                    name="Cart" 
                    component={ShoppingCartScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation