import { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { Feather, Octicons } from '@expo/vector-icons';

import { tapbarStyles } from '../styles/TapbarStyles';


export class Tapbar extends Component {
    render(){
        return <View style={tapbarStyles.tapbar}>
            <TouchableHighlight><Feather name="book" size={24} color="black" /></TouchableHighlight>
            <TouchableHighlight><Feather name="clipboard" size={24} color="black" /></TouchableHighlight>
            <TouchableHighlight><Octicons name="three-bars" size={24} color="black" /></TouchableHighlight>
        </View>;
    }
}
