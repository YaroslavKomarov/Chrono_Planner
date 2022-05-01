import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ActivityTag from './ActivityTag';
import CollectionTag from './CollectionTeg'


export default function TagList({ tagNames, setType, formType }) {
    const [tagItems, setTagItems] = useState(tagNames.map(tagName => {
        return { name: tagName, isSelected: false, key: Math.random().toString() };
    }));

    const selectItem = (key) => {
        setTagItems(existingItems => {
            const newItems = [...existingItems];
            newItems.forEach(item => item.isSelected = false);
            newItems.find(item => item.key === key).isSelected = true;
            return newItems;
        })
    };

    return(
        <View style={styles.container}>
            <FlatList
                data={tagItems}
                renderItem={({ item }) => (
                    formType === 'migrate' 
                    ? <CollectionTag 
                        item={item}
                        selectItem={selectItem}
                        setCollectionType={setType}
                    />
                    :  <ActivityTag
                        item={item}
                        selectItem={selectItem}
                        setTaskType={setType}
                    />
                )}
                keyExtractor={(item) => item.key}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'row'
    }
});