import { StyleSheet } from "react-native"


export const monthlyHeaderStyles = StyleSheet.create({
    dailyplannerWrap: {
        width: '100%',
        paddingTop: '11%',
        paddingBottom: '3%',
        backgroundColor: 'rgba(250, 208, 196, 1)',
    },
    touchableWrap: {
        justifyContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    dailyplannerText: {
        marginRight: '1%',
        fontFamily: 'roboto-reg',
        fontSize: 20,
    }
})