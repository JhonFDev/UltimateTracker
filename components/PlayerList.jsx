import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Player from "./Player";
import Emptylist from "./Emptylist";

export default function PlayerList( {playersData}) {
  return (
    <>

    <FlatList
      data={playersData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Player {...item} />}
      showsVerticalScrollIndicator={false}
      style={{width:300,}}
      contentContainerStyle={{alignItems:"center"}}
    />
    {playersData.length == 0 && <Emptylist />}
    </>
  );
}

const styles = StyleSheet.create({});
