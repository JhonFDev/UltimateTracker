import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SetupTeams from "../../components/tournament/setupmatchlineups/SetupTeams";
import { ArrowBackButton } from "../../components/Buttonx";

export default function SetupMatchScreen() {
  return (
    <View style={styles.viewmatch}>

    <ArrowBackButton />
      <Text style={{fontSize:20,fontWeight:"bold"}}>Configuracion de los equipos</Text>
      <View>
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
