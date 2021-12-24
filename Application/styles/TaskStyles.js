import { StyleSheet } from 'react-native';


export const taskStyles = StyleSheet.create({
    swipeContainer: {
        flex: 1,
        minHeight: 75,
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 225, 216, 1)',
        alignItems: 'center',
    },
    taskText: {
        fontFamily: 'roboto-bold',
        fontSize: 18,
    },
    penIconWrap: {
        marginLeft: '4%',
    },
    deleteButtonWrap: {
        flex: 1,
        minHeight: 75,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6E84',
    },
    migrateButtonWrap: {
        minHeight: 75,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#879CFF',
        alignSelf: 'flex-end',
    },
    doneButtonWrap: {
        minHeight: 75,
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
        minHeight: 75,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    textContainer: {
        marginLeft: '5%',
        marginHorizontal: '10%',
    },
    isDone: {
        textDecorationLine: 'line-through',
        textDecorationColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(0, 0, 0, 0.35)',
    },
});
