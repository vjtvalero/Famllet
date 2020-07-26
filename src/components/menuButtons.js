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
    },
    withdrawButton: {
        backgroundColor: colors.red
    },
    depositButton: {
        backgroundColor: colors.green
    }
})

function MenuButtons({ navigation }) {
    return (
        <View style={styles.buttons}>
            <AppButton
                title="Deposit"
                onPress={() => navigation.navigate('Deposit')}
                buttonStyle={styles.depositButton}
            />
            <View style={{ width: 5 }}></View>
            <AppButton
                title="Withdraw"
                onPress={() => navigation.navigate('Withdraw')}
                buttonStyle={styles.withdrawButton}
            />
        </View>
    )
}

export default MenuButtons