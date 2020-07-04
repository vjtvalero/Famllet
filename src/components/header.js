import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from 'src/util/colors'
import AppText from 'src/components/appText'

const styles = StyleSheet.create({
    header: {
        flex: 2,
        backgroundColor: colors.background,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    logoContainer: { paddingTop: 4, paddingLeft: 14 },
    headerContentContainer: { alignSelf: 'center' },
    walletName: { color: colors.white, textAlign: 'center', textTransform: 'uppercase' },
    walletAmount: { color: colors.white },
    logoText: { color: colors.white },
    amountContainer: { paddingBottom: 20 },
})

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.logoContainer}>
                <AppText style={styles.logoText} weight="bold">Famllet</AppText>
            </View>
            <View style={styles.headerContentContainer}>
                <AppText style={styles.walletName} size="14">Family Business</AppText>
                <View style={styles.amountContainer}>
                    <AppText style={styles.walletAmount} size="34" weight="semibold">165,546.79</AppText>
                </View>
            </View>
        </View >
    )
}

export default Header