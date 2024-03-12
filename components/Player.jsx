import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Player({ id, name, numDorso }) {
  return (
    <View style={styles.viewcontainerplayer}>
      <Text style={styles.text}>{name}</Text>

      <Text style={styles.text}>{numDorso}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewcontainerplayer: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
});
