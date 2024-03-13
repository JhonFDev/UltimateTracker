import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Emptylist() {
  return (
    <View
      style={{
        width: 350,
        height: 420,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/frisbeeoutdoor.gif")}
        style={{ height: 200, width: 350 }}
      />
      <Text style={{padding:20, fontSize:20, fontWeight:"bold"}}>Comenzar agregando un jugador</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
