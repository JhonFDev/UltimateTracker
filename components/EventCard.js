import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function EventCard() {
  const navigation = useNavigation();
  return (
    <View style={styles.vieweventcard}>

      <View style={styles.viewbuttons}>
        <Button
          buttonStyle={styles.buttonstyle}
          title={"Torneo"}
          containerStyle={styles.containerstyle}
          onPress={() => navigation.navigate("setupmatch")}
        />
        <Button
          buttonStyle={styles.buttonstyle}
          title={"Entrenamiento"}
          containerStyle={styles.containerstyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  vieweventcard: {
    padding: 10,
    width: 300,
    height: 300,
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  viewbuttons: {
    gap: 30,
    alignItems: "center",
  },
  buttonstyle: {
    borderRadius: 20,
  },
  containerstyle: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
});
