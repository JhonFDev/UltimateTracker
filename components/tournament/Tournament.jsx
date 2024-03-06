import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Chip, Text } from "react-native-paper";
import { Button, Image, LinearProgress } from "@rneui/themed";

export default function Tournament() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let subs = true
    if (progress < 1 && progress!==0) {
      setTimeout(() => {
        if (subs) {
          setProgress(progress + 0.01)
        }
      },450)
    }
    return() => {
      subs = false
    }
  },[progress])

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
          right: 10,
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
        <Chip
          style={{
            backgroundColor: "lightgreen",
            width: 65,
            height: 65,
            justifyContent: "center",
          }}
          elevated
          textStyle={{
            fontWeight: "bold",
            color: "black",
            borderWidth: 1,
            width: 40,
            textAlign: "center",
            fontSize: 20,
          }}
        >
          8{" "}
        </Chip>
        {/* <Text
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
        </Text> */}
      </View>

      {/* Sets and times */}
      <View style={styles.viewsetstimes}>
        <View>
          <Text variant="displaySmall">set {<Text> 2 </Text>}</Text>
        </View>
        <View>
          <Text variant="displaySmall">Time {<Text>40:00</Text>}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Chip
            style={{ backgroundColor: "lightgreen" }}
            compact
            elevated
            disabled
            mode="flat"
            textStyle={{ fontSize: 17, fontWeight: "bold", color: "black" }}
          >
            10
          </Chip>
          <Text style={{ fontSize: 17 }}> minutos para ultima jugada</Text>
        </View>
      </View>

      {/* botones timespirit and timeout */}
      <View
        style={{
          borderWidth: 1,
          display: "flex",
          top: 20,
          width: 350,
          height: 200,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
      <View style={{display:"flex",width:100,gap:10}}>
        <Button title={`Time Spirit`}  onPress={() => {setProgress(0.000001)}}/>
        <LinearProgress value={progress} variant="determinate"/>
      </View>
        <Button title={`Time Out`} />
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
    width: 270,
    height: 220,
    top: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
});
