import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { gStyles, taskListStyles } from '../../styles/GlobalStyles';
import ScheduleBlock from './ScheduleBlock';
import { schedule } from '../../Global'; 


export default function Schedule() {     
    return (
        <View style={ [styles.list, gStyles.boxShadowMain] }>
            <View style={{borderBottomWidth: 1, borderColor: 'black', marginHorizontal: '2%'}}></View>
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