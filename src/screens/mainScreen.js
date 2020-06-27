import React from 'react'
import { StatusBar, View } from 'react-native'
import Header from 'src/components/header'
import Transactions from 'src/components/transactions'
import MenuButtons from 'src/components/menuButtons'
import colors from 'src/util/colors'

const styles = {
    main: {
        flex: 1,
    }
}

function MainScreen() {
    return (
        <View style={styles.main}>
            <StatusBar barStyle="light-content" backgroundColor={colors.background} />
            <Header />
            <Transactions />
            <MenuButtons />
        </View>
    )
}

export default MainScreen