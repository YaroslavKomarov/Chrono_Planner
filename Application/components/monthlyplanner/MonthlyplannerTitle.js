import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { gStyles, collectionTitleStyles } from '../../styles/GlobalStyles';


export default function MontlyplannerTitle({ setModalVisible }) {
    const getCurrentMonth = () => {
        const today = new Date();
        const currentMonth = today.toLocaleString('default', { month: 'long' });
        return currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);
    };

    return (
        <View style={styles.titleContainer}>
            <View style={collectionTitleStyles.textWrap}>
                <Text style={[collectionTitleStyles.collectionTitle, gStyles.boxShadow]}>
                    {getCurrentMonth()}
                </Text>
            </View>
            <View style={collectionTitleStyles.btnWrap}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <AntDesign name="pluscircleo" size={32} />
                </TouchableOpacity>
            </View>
        </View>
	);
}

const styles = StyleSheet.create({
    titleContainer: {
		marginTop: '5%',
        flexDirection: 'row',
        maxHeight: 250
    },
});
