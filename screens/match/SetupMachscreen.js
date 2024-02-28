import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SetupTeams from "../../components/tournament/SetupTeams";

export default function SetupMatchScreen() {
  return (
    <View style={styles.viewmatch}>
      <Text>SetupMatchScreen</Text>

      <View>
        <Text>Configuracion de los equipos</Text>
        <SetupTeams />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewmatch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
});
