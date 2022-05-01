import React from 'react';
import { View, FlatList } from 'react-native';

import { gStyles, taskListStyles } from '../../styles/GlobalStyles';
import Task from './Task';


export default function TasksList({ tasks, setTasks, sourceCollection }) {

    const handleRemove = (key) => {
        const newList = tasks.filter((item) => item.key !== key);
        setTasks(newList);
    };

    return (
		<View style={[gStyles.boxShadowMain, taskListStyles.listWrap]}>
            <View style={{borderBottomWidth: 1, borderColor: 'black', marginHorizontal: '2%'}}></View>
            <FlatList
                persistentScrollbar={true}
                data={tasks}
                renderItem={({ item }) => (
                    <View style={taskListStyles.taskContainer}>
                        <Task
                            task={item}
                            setTask={setTasks}
                            onRemove={handleRemove}
                            sourceCollection={sourceCollection}
                        />
                    </View>
                )}
                keyExtractor={(item) => item.key}
            />
            <View style={{borderBottomWidth: 1, borderColor: 'black', marginHorizontal: '2%'}}></View>
		</View>
	);
}
