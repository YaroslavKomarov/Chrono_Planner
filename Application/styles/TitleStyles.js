import { StyleSheet } from 'react-native';


export const titleStyles = StyleSheet.create({
    header:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F7C1BD'
    },
    caption:{
        fontSize: '25px',
        fontWeight: 'bold',
        color: '#2F0000',
        textAlign: 'left',
        margin: '5%'
    },
    button:{
        textAlign: 'center',
        alignSelf: 'center',
        marginRight: '5%'
    }
});
