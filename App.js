import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from 'src/screens/mainScreen'
import TransactionScreen from 'src/screens/transactionScreen'

const Stack = createStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    component={MainScreen}
                    name="Famlett"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    component={TransactionScreen}
                    name="Deposit"
                    options={{ headerShown: false }}
                    initialParams={{ title: 'Deposit' }}
                />
                <Stack.Screen
                    component={TransactionScreen}
                    name="Withdraw"
                    options={{ headerShown: false }}
                    initialParams={{ title: 'Withdraw' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App