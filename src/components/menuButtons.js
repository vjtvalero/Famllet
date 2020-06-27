import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import colors from 'src/util/colors'
import AppButton from 'src/components/appButton'

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: colors.white,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
    },
    withdrawButton: {
        backgroundColor: colors.red
    },
    depositButton: {
        backgroundColor: colors.green
    }
})

function MenuButtons() {
    return (
        <View style={styles.buttons}>
            <AppButton
                title="Deposit"
                onPress={() => Alert.alert(`Deposit`)}
                buttonStyle={styles.depositButton}
            />
            <View style={{ width: 5 }}></View>
            <AppButton
                title="Withdraw"
                onPress={() => Alert.alert(`Withdraw`)}
                buttonStyle={styles.withdrawButton}
            />
        </View>
    )
}

export default MenuButtons