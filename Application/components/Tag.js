import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

import { tagsStyles } from '../styles/TagsStyles';


export default function Tag(props) {
    const [isPressed, setIsPressed] = useState(false);

    return (
            <TouchableOpacity style={[tagsStyles.element, {backgroundColor: props.color}]} onPress={() => setIsPressed(!isPressed)}>
                <FontAwesome5 name={isPressed ? 'check-circle' : 'circle'} size={20} color="black" style={tagsStyles.icon}/>
                <Text style={{marginTop: 3, fontSize: 15}}>{props.name}</Text>
            </TouchableOpacity>
    );
}
