import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SetupTeams from "../../components/tournament/setupmatchlineups/SetupTeams";
import { ArrowBackButton } from "../../components/Buttonx";

export default function SetupMatchScreen() {
  return (
    <>
      <ArrowBackButton />
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            position: "absolute",
            paddingTop: 10,
            top: 150,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Configuracion de los equipos
          </Text>
          <View>
            <SetupTeams />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
