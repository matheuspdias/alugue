import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../src/views/Home';
import Detail from '../../src/views/Detail';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ShoppingBag } from 'react-native-feather';

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    title: 'ALUGUE',
                    headerTitleStyle: {
                        fontFamily: 'Montserrat-Bold',
                        fontWeight: 'bold'
                    },
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <ShoppingBag
                            color="#000"               
                            />
                        </TouchableOpacity>
                    )
                }}
                />
                <Stack.Screen 
                name="Detail" 
                component={Detail}
                options={{
                    title: 'Detalhes',
                    headerTitleStyle: {
                        fontFamily: 'Montserrat-Bold',
                        fontWeight: 'bold'
                    },
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <ShoppingBag
                            color="#000"               
                            />
                        </TouchableOpacity>
                    )
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}