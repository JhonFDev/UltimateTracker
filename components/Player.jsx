import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { DeletePlayerReducer } from "../redux/dbSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Player({ id, name, dorso, text }) {
  const dispatch = useDispatch();
  const db = useSelector((state) => state.db.db);

  const handleDeletePlayer = async () => {
    dispatch(DeletePlayerReducer(id));
    try {
      await AsyncStorage.setItem(
        "@DBs",
        JSON.stringify(db.filter((player) => player.id !== id))
      );
      console.log("player eliminate correctly");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <View style={styles.viewcontainer}>
        {/* jugador y dorso */}
        <View style={styles.viewcontainerplayer}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{text}</Text>
          <View>
            <Text style={styles.text}>{dorso}</Text>
          </View>
        </View>

        {/* Boton accion */}
        <View style={{ justifyContent: "center", height: 50 }}>
          <IconButton icon="delete" size={25} iconColor="red" onPress={handleDeletePlayer}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  viewcontainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    width: 300,
    marginVertical: 6,
    backgroundColor: "#d9a62740",
    alignItems: "center",
  },
  viewcontainerplayer: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#01214e",
  },
});
