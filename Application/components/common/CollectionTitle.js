import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { gStyles, collectionTitleStyles } from '../../styles/GlobalStyles';


export default function CollectionTitle({ title, setModalVisible }) {
    return (
        <View style={collectionTitleStyles.titleContainer}>
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
