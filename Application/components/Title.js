import { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { titleStyles } from '../styles/TitleStyles';


export class Head extends Component {
    render() {
        return <View style={titleStyles.header}>
                <Text style={titleStyles.caption}>{this.props.title}</Text>
                <TouchableOpacity style={titleStyles.button} color="#F7C1BD">
                    <AntDesign name="pluscircleo" size={30} color="black" />
                </TouchableOpacity>
            </View>;
    }
}
