import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { collectionTitleStyles } from '../../styles/CollcetionTitleStyls';
import { gStyles } from '../../styles/GlobalStyles';


export default function MontlyplannerTitle({ title, setModalVisible }) {
    return (
        <View style={styles.titleContainer}>
            <View style={collectionTitleStyles.textWrap}>
                <Text style={[collectionTitleStyles.collectionTitle, gStyles.boxShadow]}>{title}</Text>
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
