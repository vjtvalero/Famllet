import React from 'react'
import { Text, StyleSheet } from 'react-native'
import colors from 'src/util/colors'

const fontWeights = StyleSheet.create({
    light: {
        fontFamily: 'Quicksand-Light',
    },
    normal: {
        fontFamily: 'Quicksand-Regular',
    },
    medium: {
        fontFamily: 'Quicksand-Medium',
    },
    semiBold: {
        fontFamily: 'Quicksand-SemiBold',
    },
    bold: {
        fontFamily: 'Quicksand-Bold',
    },
})

function getFontWeight(weightName) {
    let style = fontWeights.normal
    switch (weightName) {
        case 'light':
            style = fontWeights.light
            break
        case 'normal':
            style = fontWeights.normal
            break
        case 'medium':
            style = fontWeights.medium
            break
        case 'semibold':
            style = fontWeights.semiBold
            break
        case 'bold':
            style = fontWeights.bold
            break
        default:
            style = fontWeights.normal
            break
    }

    return style
}

function AppText(props) {
    let properties = { ...props.style }
    if (!properties.color) {
        properties.color = colors.neutral
    }

    const style = {
        ...getFontWeight(props.weight),
        fontSize: parseInt(props.size ? props.size : 14),
        ...properties,
    }
    return (
        <Text style={style}>
            {props.children}
        </Text>
    )
}

export default AppText