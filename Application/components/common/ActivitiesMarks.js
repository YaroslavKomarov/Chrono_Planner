import React from 'react'
import { View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 


export default function ActivitiesMarks(props) {
    switch (props.activityType) {
        case 'intellectual':
            return  <View><FontAwesome5 name="brain" size={18} color="#363636" /></View>;
        case 'communication':
            return  <View><FontAwesome name="comments" size={24} color="#363636" /></View>;
        case 'physical':
            return  <View><FontAwesome5 name="dumbbell" size={18} color="#363636" /></View>;
        case 'creative':
            return  <View><FontAwesome5 name="palette" size={18} color="#363636" /></View>;
        case 'rest':
            return  <View><FontAwesome5 name="umbrella-beach" size={18} color="#363636" /></View>;
        default:
            return <View><Ionicons name="restaurant" size={22} color="#363636" /></View>;
    };
}
