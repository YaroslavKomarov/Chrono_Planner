import { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

import { tapbarStyles } from '../styles/TapbarStyles';


export class Tapbar extends Component {
    render(){
        return <View style={tapbarStyles.tapbar}>
            <TouchableHighlight><Text>Кнопка</Text></TouchableHighlight>
            <TouchableHighlight><Text>Кнопка</Text></TouchableHighlight>
            <TouchableHighlight><Text>Кнопка</Text></TouchableHighlight>
        </View>;
    }
}
