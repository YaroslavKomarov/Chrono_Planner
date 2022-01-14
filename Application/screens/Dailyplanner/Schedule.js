import React, { useState } from 'react';
import Papa from 'papaparse';
import { View, Text, Modal, FlatList, ViewComponent, StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';

import { taskListStyles } from '../../styles/TaskListStyles';
import ScheduleBlock from './ScheduleBlock';
import { gStyles } from '../../styles/GlobalStyles';
import bear_data from '../../chronotype_schedule/chrono_bear.json';
import { chrontype } from '../../../App';
import { FlipInEasyX } from 'react-native-reanimated';


export default function Schedule() {
    const schedule = bear_data;
    //() => {
    //     switch (chrontype) {
    //         case 'bear':
    //             return bear_data;
    //         case 'dolphin':
    //             return 
    //         case 'wolf':
    //             return 
    //         case 'lion':
    //             return 
    //         default:
    //             break;
    //     }
    // }

    return (
        <View style={ styles.list }>
            <FlatList
                data={schedule}
                renderItem={({ item }) => (
                    <View style={taskListStyles.taskContainer}>
                        <ScheduleBlock
                            block={item}
                        />
                    </View>
                )}
                keyExtractor={(item) => item.key}
            />
        </View>
    );
  }


const styles = StyleSheet.create({
    list: {
		flex: 1,
		margin: '5%',
        paddingVertical: '6%',
        backgroundColor: 'rgba(255, 225, 216, 1)',
        borderRadius: 25,
    },
});