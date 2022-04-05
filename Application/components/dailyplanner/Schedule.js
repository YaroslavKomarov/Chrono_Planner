import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { gStyles, taskListStyles } from '../../styles/GlobalStyles';
import ScheduleBlock from './ScheduleBlock';
import bearSchedule from '../../chronotypeSchedule/chrono_bear.json';
import lionSchedule from '../../chronotypeSchedule/chrono_lion.json';
import wolfSchedule from '../../chronotypeSchedule/chrono_wolf.json';
import dolphinSchedule from '../../chronotypeSchedule/chrono_dolphin.json';


export default function Schedule() {
    const schedule = () => {
        switch (global.chronotype) {
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