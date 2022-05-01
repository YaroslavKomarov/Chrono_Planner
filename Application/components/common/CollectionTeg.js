import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

import { collections } from '../../Global'; 


export default function CollectionTag(props) {
    return (
        <TouchableOpacity 
            style={ styles.element }
            onPress={() => { 
                props.selectItem(props.item.key)
                props.setCollectionType(props.item.name);
            }}
        >
            <FontAwesome5 
                name={props.item.isSelected ? 'check-circle' : 'circle'} 
                size={20} 
                style={styles.icon}
                color="black" 
            />
            <Text style={{marginTop: 3, fontSize: 15}}>{collections[props.item.name]}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    element: {
        padding: '3%',
        margin: '1%',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 225, 216, 1)'
    },
    icon: {
        marginRight: 3
    }
});
