import React from 'react';
import { View, Text, Modal, FlatList, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useWindowDimensions } from 'react-native';


export default function ScheduleBlock({ block }) {
    const { height, width } = useWindowDimensions();

    const startTime = () => {
        const arr = block.StartTime.split(':');
        const result = new Date();
        return result.setHours(arr[0], arr[1]);
    }

    const endTime = () => {
        const arr = block.EndTime.split(':');
        const result = new Date();
        return result.setHours(arr[0], arr[1]);
    }

    const blockSize = () => {
        const oneHourSize = height / 16;
        const diffHours = endTime().getHours() - startTime.getHours();
        const diffMin = endTime().getMinutes() - startTime.getMinutes();
        const result = new Date();
        return result.setHours(diffHours, diffMin);
    }

    console.log(blockSize());

    return (
        <View style={[styles.boxShadow, styles.scheduleBlock]}>
            <View style={styles.blockHeader}>
                <AntDesign name="down" size={20} color="black" />
                <Text>{block.ActivityType}</Text>
            </View>
            <View style={{ flex: 1 }}>

            </View>
        </View>
    );  
}

const styles = StyleSheet.create({
    blockHeader: {
        flexDirection: 'row',
        marginLeft: '3%',
    },
    scheduleBlock: {
		marginVertical: '5%',
        marginHorizontal: '10%',
        paddingVertical: '6%',
        backgroundColor: 'rgba(214, 228, 253, 1)',
        borderRadius: 18,
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 0
    },

});
