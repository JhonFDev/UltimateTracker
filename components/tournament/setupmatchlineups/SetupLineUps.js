import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Badge, Button, Icon, Input, ListItem } from "@rneui/themed";
import PlayerList from "../../PlayerList";

export default function SetupLineUps() {
  const [name, setName] = useState('')
  const [dorso, setDorso] = useState('')
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
      <View style>
        <SafeAreaView style={{ alignItems: "center", height: 410 }}>
          {/* lista con flatlist react native */}
          <PlayerList />
          {/* fin lista con flatlist react native */}
        </SafeAreaView>
      </View>

      {/* Agregar Jugador */}
      <View
        style={{
          width: 380,
          paddingTop: 10,
          backgroundColor: "#11111120",
          top: 27,
        }}
      >
        <Input
          placeholder="Nombre"
          placeholderTextColor={"#111"}
          inputStyle={{ textAlign: "center" }}
          onChangeText={(text) => {setName(text)}}
        />
        <Input
          placeholder="# Dorso"
          placeholderTextColor={"#111"}
          inputStyle={{ textAlign: "center" }}
          onChangeText={(text) => {setDorso(text)}}
          keyboardType="number-pad"
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
      {/*Fin Agregar Jugador */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewcontainersetuplineups: {
    width: 380,
    marginTop: 10,
    alignItems: "center",
    height: 680,
  },
});
