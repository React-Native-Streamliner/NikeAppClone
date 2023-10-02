import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShoppingCartScreen from './screens/ShoppingCartScreen';

import { FontAwesome5 } from '@expo/vector-icons'
import { Pressable, Text } from 'react-native';

const Stack = createStackNavigator();

const Navigation = () => {
    const navigation = useNavigation()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                contentStyle: {
                    backgroundColor: 'white'
                }
            }}>
                <Stack.Screen 
                    name="Products" 
                    component={ProductsScreen}
                    options={({navigation}) => ({
                        headerRight: () => (<Pressable onPress={() => navigation.navigate('Cart')} style={{flexDirection: 'row'}}>
                                                <FontAwesome5 name="shopping-cart" size={18} color="gray"/>
                                                <Text style={{marginLeft: 5, fotnWeight: '500'}}>1</Text>
                                            </Pressable>
                        ),
                    })}  
                />
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