import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { collectionTitleStyles } from '../styles/CollcetionTitleStyls';


export default function CollectionTitle({ title, setModalVisible }) {
    return (
		<View style={collectionTitleStyles.titleContainer}>
            <Text style={collectionTitleStyles.collectionTitle}>{title}</Text>
            <TouchableOpacity style={collectionTitleStyles.addButton} onPress={() => setModalVisible(true)}>
            <Feather name="plus-circle" size={32} />
            </TouchableOpacity>
        </View>
	);
}
