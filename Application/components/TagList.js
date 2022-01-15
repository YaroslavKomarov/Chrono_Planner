import React from 'react';
import { View } from 'react-native';

import Tag from './Tag';
import { tagsStyles } from '../styles/TagsStyles';

export default function TagList(){
    return(
        <View style={tagsStyles.container}>
            <Tag name="Творчество" color="#9AFFA1"/>
            <Tag name="Коммуник." color="#9AFFA1"/>
            <Tag name="Отдых" color="#9AFFA1"/>
            <Tag name="Интеллект" color="#A9ABFF"/>
            <Tag name="Физич." color="#FFD49A"/>
        </View>
    );
}