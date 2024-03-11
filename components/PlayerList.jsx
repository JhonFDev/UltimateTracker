import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { playerData } from "../data/db";

export default function PlayerList() {
  return (
      <FlatList
       data={playerData}
       keyExtractor={(item) => item.id.toString()}
       renderItem={({item}) =><Text>{item.name}</Text>}
       />
  );
}

const styles = StyleSheet.create({});
