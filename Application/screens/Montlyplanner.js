import React, { useState } from 'react';
import { Animated, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import MonthlyplannerHeader from '../components/MonthlyplannerHeader';
import { gStyles } from '../styles/GlobalStyles';
import MonthlyTaskList from '../components/MonthlyTaskList';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
LocaleConfig.locales['Ru'] = {
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Откябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв.','Фев.','Март','Апр.','Май','Июнь','Июль','Авг.','Сен.','Окт.','Ноябрь','Дек.'],
    dayNames: ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
    dayNamesShort: ['Пн.','Вт.','Ср.','Чт.','Пт.','Сб.','Вс.'],
  };
  LocaleConfig.defaultLocale = 'Ru';
export default function Monthlyplanner() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <AnimatedLinearGradient 
            colors={['rgba(255, 154, 158, 1)', 'rgba(250, 208, 196, 1)']}
            style={gStyles.container}
        >
            <MonthlyplannerHeader title='Декабрь' setModalVisible={setModalVisible} />
            <Calendar
  // Handler which gets executed on day press. Default = undefined
  onDayPress={(day) => {console.log('selected day', day)}}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={(day) => {console.log('selected day', day)}}
  // Hide month navigation arrows. Default = false
  hideArrows={false}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  theme={{
    calendarBackground: 'rgba(250, 208, 196, 1)',
    textSectionTitleColor: 'black',
    todayBackgroundColor:'white',
    textMonthFontFamily: 'bold',
    textMonthFontSize: 20,
    'stylesheet.calendar.header': {
        week: {
          marginHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomColor: 'black',
          borderBottomWidth: 2
        },
      }
  }}
  style={{
    borderWidth: 0,
    borderRadius: 30,
    height: 320,
    width: 400,
    marginLeft: 5,
    marginTop: 10
  }}
/>

            <MonthlyTaskList modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </AnimatedLinearGradient>
    );
}
import { StyleSheet } from "react-native"
