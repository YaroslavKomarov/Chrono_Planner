import { StyleSheet } from "react-native"


export const dailyHeaderStyles = StyleSheet.create({
    headerWrap: {
        width: '100%',
        paddingTop: '12%',
        flexDirection: 'row',
        paddingBottom: '3%',
        backgroundColor: 'rgba(250, 208, 196, 1)',
    },
    textWrap: {
        flex: 1,
        marginLeft: '7%',
    },
    dailyplannerTitle: {
        fontSize: 24,
        fontFamily: 'PTSans-reg',
    },
    btnWrap: {
        justifyContent: 'center',
        marginHorizontal: '7%',
    }
})
