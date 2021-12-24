import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { collectionTitleStyles } from '../styles/CollcetionTitleStyls';
import { monthlyHeaderStyles } from '../styles/MonthlyplannerHeaderStyles';
import { gStyles } from '../styles/GlobalStyles';
import CollectionTitle from './CollectionTitle';


export default function MonthlyplannerHeader({ title, setModalVisible }) {
    return (
        <View style={ { flex: 1.2 } }>
            <View style={[monthlyHeaderStyles.dailyplannerWrap, gStyles.boxShadowMain]}>
                <TouchableOpacity style={monthlyHeaderStyles.touchableWrap}>
                    <Text style={monthlyHeaderStyles.dailyplannerText}>Ежедневник</Text>
                    <Feather name="arrow-down" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <CollectionTitle title={title} setModalVisible={setModalVisible}/>
        </View>
	);
}
