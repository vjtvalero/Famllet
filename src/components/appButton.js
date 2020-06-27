import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import colors from 'src/util/colors'

const AppButton = (props) => {
    const { title = 'Enter', buttonStyle = {}, textStyle = {}, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        width: 110,
        height: 40,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        backgroundColor: colors.neutral,
        elevation: 5,
    },
    text: {
        fontSize: 14,
        color: colors.white,
        fontFamily: 'Quicksand-Regular',
        textTransform: 'uppercase'
    },
})

export default AppButton