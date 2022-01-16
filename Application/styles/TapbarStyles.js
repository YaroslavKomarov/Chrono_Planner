import { StyleSheet } from 'react-native';


export const tapbarStyles = StyleSheet.create({
    tapbar:{
        paddingHorizontal: '15%',
        backgroundColor: '#FFEFDF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '11%',
    },
    vectorIcons: {
        fontSize: 38,
        padding: '6%',
    },
    isPressed: {
        borderRadius: 25,
        backgroundColor: 'rgba(196, 196, 196, 0.43)',
    }
});
