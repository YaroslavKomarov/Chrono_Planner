import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { tapbarStyles } from '../styles/TapbarStyles';
import { useNavigation } from '@react-navigation/native';


export default function Tapbar() {
    const navigation = useNavigation(); 

    const [isPressedArchive, setIsPressedArchive] = useState(false);
    
    const [isPressedHome, setIsPressedHome] = useState(false);

    const [isPressedAuthor, setIsPressedAuthor] = useState(false);

    const changeState = (mainSet) => {
        setIsPressedArchive(false);
        setIsPressedAuthor(false);
        setIsPressedHome(false);
        mainSet(true);
    };

    const loadScreen = (mainSet ,screenName) => {
        //changeState(mainSet);
        navigation.navigate(screenName);
    };

    return (
        <View style={tapbarStyles.tapbar}>
            <TouchableOpacity onPress={() => loadScreen(setIsPressedArchive, 'Archive')}>
                <View style={ isPressedArchive ? tapbarStyles.isPressed : {} }>
                    <Feather style={tapbarStyles.vectorIcons} name="book" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => loadScreen(setIsPressedHome, 'Monthlyplanner')}>
                <View style={ isPressedHome ? tapbarStyles.isPressed : {} }>
                    <Feather style={tapbarStyles.vectorIcons} name="home" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => loadScreen(setIsPressedHome, 'AuthorsCollections')}>
                <View style={ isPressedAuthor ? tapbarStyles.isPressed : {} }>
                    <Feather style={ tapbarStyles.vectorIcons } name="clipboard" />
                </View>
            </TouchableOpacity>
        </View>
    );
}
