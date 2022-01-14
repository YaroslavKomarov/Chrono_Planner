import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { dailyHeaderStyles } from '../../styles/DailyplannerHeaderStyles';
import { gStyles } from '../../styles/GlobalStyles';


export default function DailyplannerHeader({ title, setModalVisible }) {
    return (
        <View>
            <View style={[dailyHeaderStyles.headerWrap, gStyles.boxShadowMain]}>
                <View style={dailyHeaderStyles.textWrap}>
                    <Text style={[dailyHeaderStyles.dailyplannerTitle, gStyles.boxShadow]}>{title}</Text>
                </View>
                <View style={dailyHeaderStyles.btnWrap}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <AntDesign name="pluscircleo" size={32} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
	);
}
