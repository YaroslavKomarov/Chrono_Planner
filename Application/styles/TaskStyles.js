import { StyleSheet } from 'react-native';


export const taskStyles = StyleSheet.create({
    swipeContainer: {
        flex: 1,
        height: 80,
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 225, 216, 1)',
        alignItems: 'center',
    },
    taskText: {
        fontFamily: 'roboto-bold',
        fontSize: 18,
        marginLeft: '5%',
    },
    penIconWrap: {
        marginLeft: '3%',
    },
    deleteButtonWrap: {
        flex: 1,
        height: 80,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6E84',
    },
    migrateButtonWrap: {
        height: 80,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#879CFF',
        alignSelf: 'flex-end',
    },
    doneButtonWrap: {
        height: 80,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AAE2AA',
        alignSelf: 'flex-end',
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 3,
    },
    btnContainer: {
        flex: 1,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
});
