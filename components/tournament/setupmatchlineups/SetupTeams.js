import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {Buttonx} from "../../Buttonx";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "@rneui/themed";

export default function SetupTeams() {
  const navigation = useNavigation();
  return (
    <View style={{ width: 350, height: 500, justifyContent: "center" }}>
      <Buttonx
        text="Team 1"
        onpress={() => navigation.navigate("lineups")}
        backgroundcolor="#d9a627"
        color="#01214e"
        size={20}
      />
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
        text="Team 2"
        backgroundcolor="#01214e"
        color="white"
        size={20}
      />

      <View
        style={{ margin: 20, height: 100, justifyContent: "center", top: 30 }}
      >
        <Button
          icon={
            <Icon
              name="arrow-right-bold"
              type="material-community"
              size={35}
              color={"white"}
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 40,
                height: 40,
              }}
            />
          }
          title={"Empezar"}
          titleStyle={{ fontSize: 20, fontWeight: "600" }}
          containerStyle={{ borderRadius: 40 }}
          buttonStyle={{ display: "flex", justifyContent: "space-evenly" }}
          iconRight
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
