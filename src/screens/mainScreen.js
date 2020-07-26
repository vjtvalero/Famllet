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

function MainScreen({ navigation }) {
    return (
        <View style={styles.main}>
            <StatusBar barStyle="light-content" backgroundColor={colors.background} />
            <Header title="Famllet" />
            <Transactions />
            <MenuButtons navigation={navigation} />
        </View>
    )
}

export default MainScreen