import { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';


export class Tapbar extends Component {
    render(){
        return <View style={styles.tapbar}>
            <TouchableHighlight><Text>Кнопка</Text></TouchableHighlight>
            <TouchableHighlight><Text>Кнопка</Text></TouchableHighlight>
            <TouchableHighlight><Text>Кнопка</Text></TouchableHighlight>
        </View>;
    }
}


const styles = StyleSheet.create({
    tapbar:{
        backgroundColor: '#FFEFDF',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});
// flex: direction row для view
// align center
// space beetween
