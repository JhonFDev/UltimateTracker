import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Player from "./Player";

export default function PlayerList( {playersData}) {
  return (
    <FlatList
      data={playersData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Player {...item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({});
