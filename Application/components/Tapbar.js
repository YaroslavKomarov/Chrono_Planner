import { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Feather, Octicons } from '@expo/vector-icons';

import { tapbarStyles } from '../styles/TapbarStyles';


export class Tapbar extends Component {
    render(){
        return <View style={tapbarStyles.tapbar}>
            <TouchableOpacity><Feather style={tapbarStyles.vectorIcons} name="book" /></TouchableOpacity>
            <TouchableOpacity><Feather style={tapbarStyles.vectorIcons} name="clipboard" /></TouchableOpacity>
            <TouchableOpacity><Octicons style={tapbarStyles.vectorIcons} name="three-bars" /></TouchableOpacity>
        </View>;
    }
}
