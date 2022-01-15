import { StyleSheet } from 'react-native';


export const tagsStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginBottom: 13
    },
    element: {
        padding: 10,
        margin: 4,
        borderRadius: 50,
        flexDirection: 'row'
    },
    icon: {
        marginRight: 3
    }
});
