import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    buttons: {
        flex: 1,
    }
})

function MenuButtons() {
    return (
        <View style={styles.buttons}>
            <Text>Menu buttons here</Text>
        </View>
    )
}

export default MenuButtons