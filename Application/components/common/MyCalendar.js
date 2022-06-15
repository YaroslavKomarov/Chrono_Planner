import React, { useState } from "react";
import { View, Text } from "react-native";
import { CalendarList } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";

import { gStyles } from "../../styles/GlobalStyles";

LocaleConfig.locales["ru"] = {
  monthNames: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  monthNamesShort: [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ],
  dayNames: [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ],
  dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  today: "Сегодня",
};

LocaleConfig.defaultLocale = "ru";
export default function MyCalendar({ set }) {
  const navigation = useNavigation();

  return (
    <View style={[{ flex: 1.5, marginHorizontal: "5%", marginVertical: "3%" }]}>
      <CalendarList
        horizontal={true}
        pagingEnabled={true}
        calendarWidth={320}
        pastScrollRange={5}
        futureScrollRange={5}
        onVisibleMonthsChange={(months) => {
          set(months[0].month);
        }}
        hideArrows={true}
        hideExtraDays={true}
        onDayPress={(day) => {
          navigation.navigate("Dailyplanner");
          global.DAYCHECK = day.day;
          global.DAYNAME = day.dateString;
          global.TOR = true;
        }}
        theme={{
          calendarBackground: "rgba(255, 255, 255, 1)",
          textSectionTitleColor: "rgba(115, 88, 65, 1)",
          todayBackgroundColor: "rgba(115, 88, 65, 0.25)",
          todayTextColor: "rgba(115, 88, 65, 1)",
          textMonthFontFamily: "PTSans-reg",
          textMonthFontSize: 16,
          borderRadius: 25,
          "stylesheet.calendar.header": {
            week: {
              marginTop: "4%",
              marginHorizontal: "1%",
              flexDirection: "row",
              justifyContent: "space-around",
              borderBottomColor: "black",
              borderBottomWidth: 1,
            },
            header: {
              height: 0,
              opacity: 0,
            },
          },
        }}
        style={[
          {
            borderRadius: 25,
            padding: "10%",
            paddingTop: "6.5%",
            paddingLeft: "6%",
            height: 270,
            overflow: "hidden",
          },
          gStyles.boxShadowMain,
        ]}
      />
    </View>
  );
}