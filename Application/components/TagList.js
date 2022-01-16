import React from 'react';
import { View } from 'react-native';

import Tag from './Tag';
import { tagsStyles } from '../styles/TagsStyles';


export default function TagList(){
    return(
        <View style={tagsStyles.container}>
            <Tag name="Творчество" color="rgba(255, 228, 199, 1)"/>
            <Tag name="Коммуникации" color="rgba(255, 228, 199, 1)"/>
            <Tag name="Отдых" color="rgba(214, 228, 253, 1)"/>
            <Tag name="Интеллектуальная активность" color="rgba(217, 230, 221, 1)"/>
            <Tag name="Физическая активность" color="rgba(255, 199, 219, 1)"/>
        </View>
    );
}