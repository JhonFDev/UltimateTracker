import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Buttonx from "../Buttonx";
import { useNavigation } from "@react-navigation/native";

export default function SetupTeams() {
  const navigation = useNavigation();
  return (
    <View style={{ width:350}}>
      <Buttonx
        text="Team 1"
        onpress={() => navigation.navigate("lineups")}
        backgroundcolor="#d9a627"
        color="#01214e"
        size={20}
      />
      <Buttonx text="Team 2" backgroundcolor="#01214e" color="white" size={20}/>
    </View>
  );
}

const styles = StyleSheet.create({});
