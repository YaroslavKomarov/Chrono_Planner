import React, { useState } from 'react';
import Papa from 'papaparse';
import { View, Text, Modal, FlatList, ViewComponent, StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';

import { taskListStyles } from '../../styles/TaskListStyles';
import { gStyles } from '../../styles/GlobalStyles';
import { chronotype } from '../../Global';
import ScheduleBlock from './ScheduleBlock';
import bearSchedule from '../../chronotype_schedule/chrono_bear.json';
import lionSchedule from '../../chronotype_schedule/chrono_lion.json';
import wolfSchedule from '../../chronotype_schedule/chrono_wolf.json';
import dolphinSchedule from '../../chronotype_schedule/chrono_dolphin.json';


export default function Schedule() {
    const schedule = () => {
        switch (chronotype) {
            case 'bear':
                return bearSchedule;
            case 'dolphin':
                return dolphinSchedule;
            case 'wolf':
                return wolfSchedule;
            case 'lion':
                return lionSchedule;
            default:
                break;
        }
    }

    return (
        <View style={ [styles.list, gStyles.boxShadowMain] }>
            <View style={{borderBottomWidth: 1, borderColor: 'black', marginHorizontal: '2%'}}></View>
            <FlatList
                data={schedule()}
                renderItem={({ item }) => (
                    <View style={taskListStyles.taskContainer}>
                        <ScheduleBlock
                            block={item}
                        />
                    </View>
                )}
                keyExtractor={(item) => item.key}
            />
            <View style={{borderBottomWidth: 1, borderColor: 'black', marginHorizontal: '2%'}}></View>
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