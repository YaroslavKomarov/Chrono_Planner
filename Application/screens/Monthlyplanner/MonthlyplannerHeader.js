import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { monthlyHeaderStyles } from '../../styles/MonthlyplannerHeaderStyles';
import { gStyles } from '../../styles/GlobalStyles';
import MontlyplannerTitle from './MonthlyplannerTitle';


export default function MonthlyplannerHeader({ title, setModalVisible, navigation }) {
    return (
        <View>
            <View style={[monthlyHeaderStyles.dailyplannerWrap, gStyles.boxShadowMain]}>
                <TouchableOpacity 
                    style={monthlyHeaderStyles.touchableWrap}
                    onPress={() => navigation.navigate('Dailyplanner')}
                >
                    <Text style={monthlyHeaderStyles.dailyplannerText}>Ежедневник</Text>
                    <Feather name="arrow-down" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <MontlyplannerTitle title={title} setModalVisible={setModalVisible}/>
        </View>
	);
}
