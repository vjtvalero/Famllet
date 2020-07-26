import React from 'react'
import { StatusBar, View } from 'react-native'
import Header from 'src/components/header'
import Transactions from 'src/components/transactions'
import colors from 'src/util/colors'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TransactionScreen from 'src/screens/transactionScreen'

const Stack = createStackNavigator()

const styles = {
    main: {
        flex: 1,
    },
    transactions: {
        flex: 6,
        backgroundColor: colors.white
    },
}

function MainScreen() {
    return (
        <View style={styles.main}>
            <StatusBar barStyle="light-content" backgroundColor={colors.background} />
            <Header title="Famllet" />
            <View style={styles.transactions}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            component={Transactions}
                            name="Transactions"
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
            </View>
        </View>
    )
}

export default MainScreen