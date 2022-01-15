import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

import { gStyles } from '../styles/GlobalStyles';


LocaleConfig.locales['Ru'] = {
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Откябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв.','Фев.','Март','Апр.','Май','Июнь','Июль','Авг.','Сен.','Окт.','Ноябрь','Дек.'],
    dayNames: ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
    dayNamesShort: ['Пн.','Вт.','Ср.','Чт.','Пт.','Сб.','Вс.'],
};
LocaleConfig.defaultLocale = 'Ru';

export default function MyCalendar() {
    return (
        <View style={[gStyles.container, { marginHorizontal: '5%', marginTop: '5%' }, gStyles.boxShadowMain]}>
            <Calendar
                current={'2021-12-27'}
                minDate={'2021-12-01'}
                maxDate={'2022-12-31'}
                onDayPress={(day) => {console.log('selected day', day)}}
                onDayLongPress={(day) => {console.log('selected day', day)}}
                hideArrows={true}
                hideExtraDays={true}
                dayComponent={({date, state}) => {
                    return (
                        <View>
                            <Text style={gStyles.calenderText}>
                                {date.day}
                            </Text>
                        </View>
                    );
                }}
                theme={{
                    flex: 1,
                    calendarBackground: 'rgba(255, 225, 216, 1)',
                    textSectionTitleColor: 'black',
                    todayBackgroundColor:'white',
                    textMonthFontFamily: 'PTSans-reg',
                    textMonthFontSize: 16,
                    'stylesheet.calendar.header': {
                        week: {
                            marginTop: '4%',
                            marginHorizontal: '1%',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        },
                        header: {
                            height: 0,
                            opacity: 0
                        },
                        
                    }
                }}
                style={{
                    height: '100%',
                    borderRadius: 25,
                }}
            />
        </View>
    );
}
