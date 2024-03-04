import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import Tournament from "../../components/tournament/Tournament";

export default function MatchScreen() {
  return (
    <View style={styles.viewcontainermatch}>
      <Text variant="titleLarge">MatchScreen</Text>
      <Tournament />
    </View>
  );
}

const styles = StyleSheet.create({
  viewcontainermatch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
