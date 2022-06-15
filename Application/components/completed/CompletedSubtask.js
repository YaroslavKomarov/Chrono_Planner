import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native';

import { gStyles, taskStyles } from '../../styles/GlobalStyles';


export default function CompletedSubtask({ subtask }) {

    return (
        <View style={styles.wrap}>
            <View style={styles.textWrap}>
                <Text style={styles.taskText}>
                    {subtask.text}
                </Text>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    wrap: {
        marginVertical: '1%'
    },
    textWrap: {
        marginLeft: "4%",
        marginRight: "3%",
    },
    taskText: {
        fontSize: 16,
        fontFamily: "PTSans-reg",
        color: "rgba(115, 88, 65, 1)",
        textDecorationLine: 'line-through'
    }
});
