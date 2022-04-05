import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function Tag(props) {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <TouchableOpacity style={[styles.element, {backgroundColor: props.color}]} onPress={() => setIsPressed(!isPressed)}>
            <FontAwesome5 name={isPressed ? 'check-circle' : 'circle'} size={20} color="black" style={styles.icon}/>
            <Text style={{marginTop: 3, fontSize: 15}}>{props.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    element: {
        padding: '3%',
        margin: '1%',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginRight: 3
    }
});
