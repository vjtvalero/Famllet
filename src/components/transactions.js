import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import AppText from 'src/components/appText'
import TransactionTile from 'src/components/transactionTile'
import colors from 'src/util/colors'
import MenuButtons from 'src/components/menuButtons'

const styles = StyleSheet.create({
    transactions: {
        flex: 1,
        backgroundColor: colors.white
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    titleText: { textTransform: 'uppercase' },
    viewAllText: { color: colors.greyish },
    transactionListContainer: { paddingHorizontal: 20 },
})

function Transactions({ navigation }) {
    const [transactions, setTransactions] = useState([
        { id: '1', amount: 100.00, status: 'waiting', type: 'deposit', timestamp: 'just now', description: 'Sultada 10kg' },
        { id: '2', amount: -99.75, status: 'done', type: 'withdraw', timestamp: '2 mins ago', description: 'Enertone' },
        { id: '3', amount: 53.00, status: 'cancelled', type: 'deposit', timestamp: '1 day ago', description: 'High Action' },
        { id: '4', amount: -76.00, status: 'done', type: 'withdraw', timestamp: '3 days ago', description: 'Concentrate 5kg' },
        { id: '5', amount: -454.00, status: 'done', type: 'withdraw', timestamp: '1 week ago', description: 'Syringe' },
        { id: '6', amount: 123.12, status: 'done', type: 'deposit', timestamp: '1 week ago', description: 'Vitamin A' },
        { id: '7', amount: -654.65, status: 'done', type: 'withdraw', timestamp: '1 week ago', description: 'Vitamin C' },
    ])

    return (
        <View style={styles.transactions}>
            <View style={styles.titleContainer}>
                <AppText size="10" style={styles.titleText}>Transaction History</AppText>
                <AppText size="10" style={styles.viewAllText}>View All</AppText>
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
            <MenuButtons navigation={navigation} />
        </View>
    )
}

export default Transactions