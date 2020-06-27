import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import AppText from 'src/components/appText'
import TransactionTile from 'src/components/transactionTile'
import colors from 'src/util/colors'

const styles = StyleSheet.create({
    transactions: {
        flex: 5,
        backgroundColor: colors.white
    },
    titleContainer: { paddingVertical: 12, paddingHorizontal: 12 },
    transactionListContainer: { paddingHorizontal: 16 },
})

function Transactions() {
    const [transactions, setTransactions] = useState([
        { id: '1', amount: 100.00, status: 'waiting', type: 'deposit', timestamp: 'just now', description: 'Enertone 1KG' },
        { id: '2', amount: -99.75, status: 'done', type: 'withdraw', timestamp: '2 mins ago', description: 'Meryenda' },
        { id: '3', amount: 53.00, status: 'cancelled', type: 'deposit', timestamp: '1 day ago', description: 'Bexan XP' },
        { id: '4', amount: -76.00, status: 'done', type: 'withdraw', timestamp: '3 days ago', description: 'Turon' },
        { id: '5', amount: -454.00, status: 'done', type: 'withdraw', timestamp: '1 week ago', description: 'Grocery' },
    ])

    return (
        <View style={styles.transactions}>
            <View style={styles.titleContainer}>
                <AppText size="16" weight="bold">Transactions</AppText>
            </View>
            <View style={styles.transactionListContainer}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={transactions}
                    renderItem={({ item }) => (
                        <TransactionTile txn={item} />
                    )}
                />
            </View>
        </View>
    )
}

export default Transactions