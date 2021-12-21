import { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Button } from 'react-native';
import { titleStyles } from '../styles/TitleStyles';


export class Head extends Component {
    render() {
        return <View style={titleStyles.header}>
                <Text style={titleStyles.caption}>{this.props.title}</Text>
                <TouchableHighlight style={titleStyles.button} color="#F7C1BD"><Text>Button</Text></TouchableHighlight>
            </View>; /* вместо текста вставить иконку */
    }
}
