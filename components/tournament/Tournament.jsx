import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import { Button, Image } from "@rneui/themed";

export default function Tournament() {
  return (
    <View
      style={{
        width: 380,
        height: 780,
        justifyContent: "center",
        borderWidth: 1,
        alignItems: "center",
      }}
    >
      {/* teams and staditics */}
      <View style={styles.viewteamstadistics}>
        <Button
          icon={
            <Image
              source={require("../../assets/BurgamaBlue.png")}
              style={{ width: 40, height: 40 }}
            />
          }
          buttonStyle={{
            justifyContent: "space-around",
            width: 175,
            height: 65,
            borderRadius: 10,
          }}
        >
          <Text
            variant="titleLarge"
            style={{ fontSize: 20, fontWeight: "bold" }}
          >
            Burgama
          </Text>
        </Button>
        <Text
          variant="displayLarge"
          style={{
            borderWidth: 1,
            fontWeight: "bold",
            backgroundColor: "#111",
            color: "#fff",
            fontSize: 40,
            width: 70,
            textAlign: "center",
            borderRadius: 40,
          }}
        >
          17
        </Text>
      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
          right: 20,
        }}
      >
        VS
      </Text>

      <View style={styles.viewteamstadistics}>
        <Button
          icon={
            <Image
              source={require("../../assets/frisbee.png")}
              style={{ width: 40, height: 40 }}
            />
          }
          buttonStyle={{
            justifyContent: "space-around",
            width: 175,
            height: 65,
            borderRadius: 10,
          }}
        >
          <Text
            variant="titleLarge"
            style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
          >
            Discoy
          </Text>
        </Button>
        <Text
          variant="displayLarge"
          style={{
            borderWidth: 1,
            fontWeight: "bold",
            backgroundColor: "#111",
            color: "#fff",
            fontSize: 40,
            width: 70,
            textAlign: "center",
            borderRadius: 40,
          }}
        >
          8
        </Text>
      </View>

      {/* Sets and times */}
      <View style={styles.viewsetstimes}>
        <View>
          <Text variant="displaySmall" >set {<Text> 2 </Text>}</Text>
        </View>
        <View>
          <Text variant="displaySmall">Time {<Text>40:00</Text>}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewteamstadistics: {
    width: 270,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewsetstimes: {
    borderWidth: 1,
    width: 370,
    height: 250,
    top: 10,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:20
  },
});
