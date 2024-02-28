import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Buttonx from "../Buttonx";
import { useNavigation } from "@react-navigation/native";

export default function SetupTeams() {
  const navigation = useNavigation();
  return (
    <View style={{borderWidth:1}}>
      <Text>SetupTeams</Text>
      <Buttonx
        text="Burgama"
        onpress={() => navigation.navigate("lineups")}
        backgroundcolor="lightblue"
        color="black"
      />
      <Buttonx text="Discoy" backgroundcolor="black" color="white"/>
    </View>
  );
}

const styles = StyleSheet.create({});
