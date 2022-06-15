import React from "react";
import {View, StyleSheet, Text} from "react-native";

export default function Stripe({sizefunc, hoursNow, minutesNow}) {
    const size = Math.floor(sizefunc(hoursNow, minutesNow));
    return (
        <View style={[styles.common, {marginTop: size}]}>
            {/*<Text style={styles.time}>{hoursNow}:{minutesNow}</Text>*/}
            <View style={styles.stripe}></View>
        </View>
    );
}


const styles = StyleSheet.create({
    common: {
        position: "absolute",
        width: "100%",
        zIndex: 5
    },
    stripe: {
        backgroundColor: "#ff8074",
        height: 2,
        borderRadius: 25,
    },
    time: {
        textAlign: "right",
        color: "#ff8074"
    }
});