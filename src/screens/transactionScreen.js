import React from 'react'
import { View, Text } from 'react-native'

const styles = {
    transactionForm: {
        flex: 6
    }
}

function TransactionScreen({ route }) {
    return (
        <View style={styles.transactionForm}>
            <Text>{route.params.title}</Text>
        </View>
    )
}

export default TransactionScreen