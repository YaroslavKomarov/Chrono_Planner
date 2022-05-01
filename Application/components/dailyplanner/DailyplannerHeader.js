import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { days, months } from '../../Global';
import { gStyles } from '../../styles/GlobalStyles';


export default function DailyplannerHeader({ setModalVisible }) {
    const currentDate = new Date();

    const dailyTitle = () => {
        return `${days[currentDate.getDay()]},  ${currentDate.getDate()}.${months[currentDate.getMonth()]}`;
    };

    return (
        <View style={[styles.headerWrap, gStyles.boxShadowMain]}>
            <View style={styles.textWrap}>
                <Text style={[styles.dailyplannerTitle, gStyles.boxShadow]}>{dailyTitle()}</Text>
            </View>
            <View style={styles.btnWrap}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <AntDesign name="pluscircleo" size={32} />
                </TouchableOpacity>
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
