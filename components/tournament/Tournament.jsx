import { StyleSheet, View } from "react-native";
import React from "react";
import {  Text } from "react-native-paper";
import { Buttonx } from "../Buttonx";
import { Button, Icon, Image, LinearProgress } from "@rneui/themed";

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
        <Button
          icon={<Image source={require('../../assets/BurgamaBlue.png')} style={{width:40, height:40}}/>}
        >
          <Text
            variant="titleLarge"
            style={{ fontSize: 20, fontWeight: "bold" }}
          >
            Burgama
          </Text>
        </Button>
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
      <Button icon={"turtle"} textColor="#d9a627" buttonColor="#01214e">
        <Text variant="titleLarge" style={{fontSize:20, fontWeight:"bold", color:"white"}}>Discoy</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});
