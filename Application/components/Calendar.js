import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";

import { gStyles } from "../styles/GlobalStyles";

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

export default function MyCalendar() {
  return (
    <View
      style={[
        gStyles.container,
        { marginHorizontal: "5%", marginTop: "5%" },
        gStyles.boxShadowMain,
      ]}
    >
      <Calendar
        markingType={"period"}
        markedDates={{
          "2022-01-20": {
            startingDay: true,
            color: "rgba(255, 199, 219, 1)",
            textColor: "black",
          },
          "2022-01-21": { color: "rgba(255, 199, 219, 1)", textColor: "black" },
          "2022-01-22": { color: "rgba(255, 199, 219, 1)", textColor: "black" },
          "2022-01-23": {
            color: "rgba(255, 199, 219, 1)",
            textColor: "black",
          },
          "2022-01-24": {
            selected: true,
            endingDay: true,
            color: "rgba(255, 199, 219, 1)",
            textColor: "gray",
          },
          "2022-01-01": {
            color: "rgba(214, 228, 253, 1)",
            startingDay: true,
            textColor: "black",
          },
          "2022-01-02": {
            color: "rgba(214, 228, 253, 1)",
            textColor: "black",
          },
          "2022-01-03": {
            color: "rgba(214, 228, 253, 1)",
            textColor: "black",
          },
          "2022-01-04": {
            color: "rgba(214, 228, 253, 1)",
            textColor: "black",
            endingDay: true,
          },
          "2022-01-10": {
            color: "rgba(217, 230, 221, 1)",
            startingDay: true,
            textColor: "black",
          },
          "2022-01-11": { color: "rgba(217, 230, 221, 1)", textColor: "black" },
          "2022-01-12": { color: "rgba(217, 230, 221, 1)", textColor: "black" },
          "2022-01-13": { color: "rgba(217, 230, 221, 1)", textColor: "black" },
          "2022-01-14": {
            color: "rgba(217, 230, 221, 1)",
            endingDay: true,
            textColor: "black",
          },
        }}
        hideArrows={true}
        hideExtraDays={true}
        theme={{
          calendarBackground: "rgba(255, 225, 216, 1)",
          textSectionTitleColor: "black",
          todayBackgroundColor: "rgba(17, 18, 53, 0.2)",
          textMonthFontFamily: "PTSans-reg",
          textMonthFontSize: 16,
          "stylesheet.calendar.header": {
            week: {
              marginTop: "2%",
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
        style={{
          borderRadius: 25,
        }}
      />
    </View>
  );
}
