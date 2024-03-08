import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Chip, Text } from "react-native-paper";
import { Button, Image, LinearProgress } from "@rneui/themed";
import * as Progress from "react-native-progress";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default function Tournament() {
  const [progres, setProgress] = useState(0);
  const [progresTS, setProgressTS] = useState(0);

  useEffect(() => {
    let subs = true;
    if (progres < 1 && progres !== 0) {
      setTimeout(() => {
        if (subs) {
          setProgress(progres + 0.01);
        }
      }, 45000);
    }
    return () => {
      subs = false;
    };
  }, [progres]);

useEffect(() => {

})

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
        <View
          style={{
            display: "flex",
            width: 150,
            gap: 10,
            borderWidth: 1,
            alignItems: "center",
          }}
        >
          <Button
            title={`Time Spirit`}
            onPress={() => {
              setProgress(0.001);
            }}
          />
          <LinearProgress value={progres} variant="determinate"/>

          <Progress.Circle
            size={70}
            showsText={true}
            progress={progres}
            textStyle={{ fontSize: 20, fontWeight: "bold" }}
            borderWidth={1}
            color="red"
            borderColor="green"

            
          />
          <CountdownCircleTimer
            isPlaying={progres}
            duration={45}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[9, 6, 3, 0]}
            size={70}
            isGrowing
            rotation="counterclockwise"
            key={progres}
            
          >
            {({ remainingTime }) => <Text>{remainingTime}</Text>}
          </CountdownCircleTimer>
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
