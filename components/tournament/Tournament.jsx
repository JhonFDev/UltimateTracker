import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
import { Buttonx } from "../Buttonx";

export default function Tournament() {
  return (
    <View
      style={{
        width: 200,
        height: 500,
        justifyContent: "center",
        borderWidth: 1,
      }}
    >
      <View>
        <Button />
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        VS
      </Text>
      <Buttonx
        text="Discoy"
        backgroundcolor="#01214e"
        color="white"
        fontsize={20}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
