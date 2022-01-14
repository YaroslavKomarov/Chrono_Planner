import { StyleSheet } from 'react-native';


export const collectionTitleStyles = StyleSheet.create({
    titleContainer: {
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    collectionTitle: {
        alignSelf: 'flex-end',
        fontSize: 34,
        fontWeight: 'bold',
        color: '#2F0000',
        textAlign: 'left',
        marginLeft: '7%',
        fontFamily: 'PTSans-bold'
    },
    addButton: {
        alignSelf: 'flex-end',
        textAlign: 'center',
        marginRight: '7%',
        marginBottom: '2%'
    }
})