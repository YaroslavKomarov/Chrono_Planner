import { StyleSheet } from 'react-native';


export const gStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxShadowMain: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 0
    },
});
