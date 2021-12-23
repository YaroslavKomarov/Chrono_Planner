import { View, TouchableOpacity } from 'react-native';
import { Feather, Octicons } from '@expo/vector-icons';

import { tapbarStyles } from '../styles/TapbarStyles';


export default function Tapbar() {
    return (
        <View style={tapbarStyles.tapbar}>
            <TouchableOpacity><Feather style={tapbarStyles.vectorIcons} name="book" /></TouchableOpacity>
            <TouchableOpacity><Feather style={tapbarStyles.vectorIcons} name="home" /></TouchableOpacity>
            <TouchableOpacity><Feather style={tapbarStyles.vectorIcons} name="clipboard" /></TouchableOpacity>
        </View>
    );
}
