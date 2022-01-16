import { StyleSheet } from 'react-native';


export const taskStyles = StyleSheet.create({
    swipeContainer: {
        flex: 1,
        minHeight: 75,
        flexDirection: 'row',
        marginHorizontal: '4%',
        backgroundColor: 'rgba(255, 225, 216, 1)',
        alignItems: 'center',
    },
    taskText: {
        fontFamily: 'roboto-bold',
        fontSize: 18,
    },
    penIconWrap: {
        marginLeft: '2%',
    },
    buttonWrap: {
        flex: 1,
        minHeight: 75,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButtonWrap: {
        backgroundColor: '#FF6E84',
        marginLeft: '10%'
    },
    migrateButtonWrap: {
        backgroundColor: '#879CFF',
        
        marginRight: '3%'
    },
    doneButtonWrap: {
        backgroundColor: '#AAE2AA',
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
    btnsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: '3%'
    },
    textContainer: {
        marginLeft: '5%',
        marginRight: '12%'
    },
    isDone: {
        textDecorationLine: 'line-through',
        textDecorationColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(0, 0, 0, 0.35)',
    },
    monthlyTaskText: {
        fontSize: 18,
        fontFamily: 'PTSans-reg',
    },
    monthlyTaskHeight: {
        minHeight: 60
    }
});
