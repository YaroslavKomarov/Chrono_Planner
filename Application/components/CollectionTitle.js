import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { collectionTitleStyles } from '../styles/CollcetionTitleStyls';
import { gStyles } from '../styles/GlobalStyles';


export default function CollectionTitle({ title, setModalVisible }) {
    return (
        <View style={collectionTitleStyles.titleContainer}>
            <Text style={[collectionTitleStyles.collectionTitle, gStyles.boxShadow]}>{title}</Text>
            <TouchableOpacity style={collectionTitleStyles.addButton} onPress={() => setModalVisible(true)}>
                <AntDesign name="pluscircleo" size={32} />
            </TouchableOpacity>
        </View>
	);
}
