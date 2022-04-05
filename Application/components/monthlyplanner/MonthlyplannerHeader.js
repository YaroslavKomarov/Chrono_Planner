import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { gStyles } from '../../styles/GlobalStyles';
import MontlyplannerTitle from './MonthlyplannerTitle';


export default function MonthlyplannerHeader({ title, setModalVisible, navigation }) {
    return (
        <View>
            <View style={[styles.dailyplannerWrap, gStyles.boxShadowMain]}>
                <TouchableOpacity 
                    style={styles.touchableWrap}
                    onPress={() => navigation.navigate('Dailyplanner')}
                >
                    <Text style={styles.dailyplannerText}>Ежедневник</Text>
                    <Feather name="arrow-down" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <MontlyplannerTitle title={title} setModalVisible={setModalVisible}/>
        </View>
	);
}

const styles = StyleSheet.create({
    dailyplannerWrap: {
        width: '100%',
        paddingTop: '11%',
        paddingBottom: '3%',
        backgroundColor: 'rgba(250, 208, 196, 1)',
    },
    touchableWrap: {
        justifyContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    dailyplannerText: {
        marginRight: '1%',
        fontFamily: 'roboto-reg',
        fontSize: 20,
    }
})
