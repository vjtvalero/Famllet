import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from 'src/components/appText'
import colors from 'src/util/colors'

const styles = StyleSheet.create({
    transactionTile: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: colors.muted,
        borderBottomWidth: 0.5
    },
    tileLeftContainer: { flex: 3 },
    timeStampText: { color: colors.greyish },
    priceTextContainer: { flex: 1 },
    setAmountColor(amount) {
        const amountColor = amount > 0 ? colors.green : colors.neutral
        return {
            textAlign: 'right',
            color: amountColor
        }
    }
})

function TransactionTile({ txn }) {
    return (
        <View style={styles.transactionTile}>
            <View style={styles.tileLeftContainer}>
                <AppText size="14" weight="semibold">{txn.description}</AppText>
                <AppText size="10" style={styles.timeStampText}>{txn.timestamp}</AppText>
            </View>
            <View style={styles.priceTextContainer}>
                <AppText style={styles.setAmountColor(txn.amount)} size="14" weight="semibold">{txn.amount.toFixed(2)}</AppText>
            </View>
        </View>
    )
}

export default TransactionTile