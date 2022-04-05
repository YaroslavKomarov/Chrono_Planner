import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { getDays } from '../../Global';
import { getMonth } from '../../Global';
import { gStyles } from '../../styles/GlobalStyles';


export default function DailyplannerHeader() {
    const currentDate = new Date();

    const dailyTitle = () => {
        const arr = getDays();
        const arr1 = getMonth();
        return `${arr[currentDate.getDay()]},  ${currentDate.getDate()}.${arr1[currentDate.getMonth()]}`;
    };

    return (
        <View>
            <View style={[styles.headerWrap, gStyles.boxShadowMain]}>
                <View style={styles.textWrap}>
                    <Text style={[styles.dailyplannerTitle, gStyles.boxShadow]}>{dailyTitle()}</Text>
                </View>
            </View>
        </View>
	);
}

const styles = StyleSheet.create({
    headerWrap: {
        width: '100%',
        paddingTop: '12%',
        flexDirection: 'row',
        paddingBottom: '3%',
        backgroundColor: 'rgba(250, 208, 196, 1)',
    },
    textWrap: {
        flex: 1,
        marginLeft: '7%',
    },
    dailyplannerTitle: {
        fontSize: 24,
        fontFamily: 'PTSans-reg',
    },
    btnWrap: {
        justifyContent: 'center',
        marginHorizontal: '7%',
    }
})
