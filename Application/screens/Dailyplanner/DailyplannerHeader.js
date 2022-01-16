import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { dailyHeaderStyles } from '../../styles/DailyplannerHeaderStyles';
import { getDays } from '../../Global';
import { getMonth } from '../../Global';
import { gStyles } from '../../styles/GlobalStyles';


export default function DailyplannerHeader({ title, setModalVisible }) {
    const currentDate = new Date();

    const dailyTitle = () => {
        const arr = getDays();
        const arr1 = getMonth();
        return `${arr[currentDate.getDay()]},  ${currentDate.getDate()}.${arr1[currentDate.getMonth()]}`;
    };

    return (
        <View>
            <View style={[dailyHeaderStyles.headerWrap, gStyles.boxShadowMain]}>
                <View style={dailyHeaderStyles.textWrap}>
                    <Text style={[dailyHeaderStyles.dailyplannerTitle, gStyles.boxShadow]}>{dailyTitle()}</Text>
                </View>
            </View>
        </View>
	);
}
