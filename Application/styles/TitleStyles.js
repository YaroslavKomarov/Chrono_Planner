import { StyleSheet } from 'react-native';


export const titleStyles = StyleSheet.create({
    header:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    caption:{
        alignSelf: 'flex-end',
        fontSize: 36,
        fontWeight: 'bold',
        color: '#2F0000',
        textAlign: 'left',
        marginLeft: '7%',
        fontFamily: 'PTSans-bold',
    },
    button:{
        alignSelf: 'flex-end',
        textAlign: 'center',
        marginRight: '7%',
        marginBottom: '3%',
    }
});
