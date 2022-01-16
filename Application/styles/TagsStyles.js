import { StyleSheet } from 'react-native';


export const tagsStyles = StyleSheet.create({
    container: {
        marginTop: '5%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    element: {
        padding: '3%',
        margin: '1%',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginRight: 3
    }
});