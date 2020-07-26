import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import colors from 'src/util/colors'
import Header from 'src/components/header'

const styles = {
    main: {
        flex: 1,
    },
    transactionForm: {
        flex: 6
    }
}

function TransactionScreen({ route }) {
    return (
        <View style={styles.main}>
            <StatusBar barStyle="light-content" backgroundColor={colors.background} />
            <Header title={route.params.title} />
            <View style={styles.transactionForm}>
                <Text>Transaction screen here</Text>
            </View>
        </View>
    )
}

export default TransactionScreen