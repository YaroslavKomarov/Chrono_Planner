import { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View, Button } from 'react-native';


export class Head extends Component {
    render() {
        return <View style={styles.header}>
                <Text style={styles.caption}>{this.props.title}</Text>
                <TouchableHighlight style={styles.button} color="#F7C1BD"><Text>Button</Text></TouchableHighlight>
            </View>; /* вместо текста вставить иконку */
    }
}


const styles = StyleSheet.create({
    header:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F7C1BD'
    },
    caption:{
        fontSize: '25px',
        fontWeight: 'bold',
        color: '#2F0000',
        textAlign: 'left',
        margin: '5%'
    },
    button:{
        textAlign: 'center',
        alignSelf: 'center',
        marginRight: '5%'
    }
});
