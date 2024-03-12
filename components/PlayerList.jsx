import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { playerData } from "../data/db";
import Player from "./Player";

export default function PlayerList() {
  return (
    <FlatList
      data={playerData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Player {...item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({});
