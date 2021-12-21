import React from 'react';
import { View, Text } from 'react-native';
import TaskList from '../components/TaskList'
import { gStyles } from '../styles/GlobalStyles'

export default function Archive() {
    return (
        <View style={gStyles.container}>
            <Text style={gStyles.title}>TDOD LIST</Text>
            <TaskList />
        </View>
    );
}
