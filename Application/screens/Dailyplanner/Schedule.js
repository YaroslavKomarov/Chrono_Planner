import React, { useState } from 'react';
import Papa from 'papaparse';
import { View, Text, Modal, FlatList } from 'react-native';
import { useWindowDimensions } from 'react-native';

import { taskListStyles } from '../../styles/TaskListStyles';
import ScheduleBlock from './ScheduleBlock';
import { gStyles } from '../../styles/GlobalStyles';
import bear_data from '../../chronotype_schedule/chrono_bear.json';


export default function Schedule() {
      const { height, width } = useWindowDimensions();
      const block = bear_data[0];

      const startTime = () => {
            const arr = block.StartTime.split(':');
            const result = new Date();
            result.setHours(arr[0], arr[1]);
            return result;
      }

      const endTime = () => {
            const arr = block.EndTime.split(':');
            const result = new Date();
            result.setHours(arr[0], arr[1]);
            return result;
      }

      const blockSize = () => {
            const oneHourSize = height / 16;
            const diffHours = endTime().getHours() - startTime.getHours();
            const diffMin = endTime().getMinutes() - startTime.getMinutes();
            const result = new Date();
            result.setHours(diffHours, diffMin);
            return result;
      }

      console.log(blockSize().getHours());

      return (
            <View>

            </View>
      );
  }
