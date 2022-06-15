import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

import { gStyles } from "../../styles/GlobalStyles";

export default function CompletedTitle({setScreenState}) {
    return (
        <View style={styles.titleContainer}>
            <View style={styles.textWrap}>
                <Text style={[styles.collectionTitle, gStyles.boxShadow]}>
                    Завершенные
                </Text>
            </View>
            <View style={styles.btnsWrap}>
                <TouchableOpacity 
                  style={[styles.btn, gStyles.boxShadowMain]}
                  onPress={() => setScreenState('tasks')}  
                >
                    <Text style={styles.btnsText}>Задачи</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.btn, gStyles.boxShadowMain]}
                  onPress={() => setScreenState('projects')} 
                >
                    <Text style={styles.btnsText}>Проекты</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: "5%",
        flexDirection: "column",
        maxHeight: 250,
      },
      textWrap: {
        marginLeft: "7%",
      },
      collectionTitle: {
        fontSize: 30,
        fontFamily: "PTSans-bold",
        color: "rgba(115, 88, 65, 1)",
      },
      btnsWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: "7%",
        marginTop: '2%',
      },
      btn: {
        borderRadius: 20,
        padding: '3%',
        paddingLeft: '5%',
        paddingRight: '5%',
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      btnsText: {
        fontFamily: "roboto-reg",
        fontSize: 18,
        color: "rgba(115, 88, 65, 1)",
      }
});