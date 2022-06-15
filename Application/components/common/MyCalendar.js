import React from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";

import { gStyles } from "../../styles/GlobalStyles";
import { BooleanSchema } from "yup";

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
  const navigation = useNavigation();

  return (
    <View style={[{ flex: 1.5, marginHorizontal: "5%", marginVertical: "3%" }]}>
      <Calendar
        calendarBackground="rgba(255, 255, 255, 0.66)"
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
            paddingBottom: "2.2%",
          },
          gStyles.boxShadowMain,
        ]}
      />
    </View>
  );
}
