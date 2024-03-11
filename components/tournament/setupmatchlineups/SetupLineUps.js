import {  SafeAreaView,  StyleSheet, Text, View } from "react-native";
import React from "react";
import { Badge, Button, Icon, Input, ListItem } from "@rneui/themed";
import PlayerList from "../../PlayerList";

export default function SetupLineUps() {
  return (
    <SafeAreaView style={styles.viewcontainersetuplineups}>
      <View style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
        <Text style={{ fontWeight: "700", fontSize: 22 }}># Jugadores: </Text>
        <Badge
          value="10"
          badgeStyle={{ width: 40, height: 35, backgroundColor: "#d9a627" }}
          textStyle={{ fontSize: 20, fontWeight: "bold", color: "#01214e" }}
        />
      </View>
      {/* Lista de jugadores */}
      <SafeAreaView style={{ width: 350, borderWidth:1, alignItems:"center" }}>

        {/* lista con  list elements */}
        {/* <ListItem
          containerStyle={{ borderWidth: 1 }}
          topDivider={true}
          bottomDivider={true}
        >
          <ListItem.Content style={{ alignItems: "center" }}>
            <ListItem.Title style={{ fontSize: 19, fontWeight: "600" }}>
              JhonF 17
            </ListItem.Title>
          </ListItem.Content>
        </ListItem> */}

        {/* lista con flatlist react native */}
        <PlayerList />
      </SafeAreaView>
      <View
        style={{
          width: 400,
          paddingTop: 10,
          height: 200,
          backgroundColor: "#11111120",
        }}
      >
        <Input
          placeholder="Nombre"
          placeholderTextColor={"#111"}
          inputStyle={{ textAlign: "center" }}
        />
        <Input
          placeholder="# Dorso"
          placeholderTextColor={"#111"}
          inputStyle={{ textAlign: "center" }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Button
            buttonStyle={{
              width: 55,
              borderRadius: 20,
              height: 55,
              backgroundColor: "#01214e",
            }}
            icon={
              <Icon
                name="content-save-all"
                type="material-community"
                size={25}
                color={"#fff"}
              />
            }
          />
          <Button
            buttonStyle={{
              width: 55,
              borderRadius: 40,
              height: 55,
              backgroundColor: "#01214e",
            }}
            icon={
              <Icon
                name="plus-thick"
                type="material-community"
                size={25}
                color={"#fff"}
              />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewcontainersetuplineups: {
    width: 380,
    height: 680,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
