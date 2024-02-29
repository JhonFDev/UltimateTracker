import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import SetupLineUps from "../../components/tournament/SetupLineUps";
import { Button, Input } from "@rneui/themed";

export default function LineUpsScreen() {
  return (
    <SafeAreaView style={styles.safearealineups}>
      <View style={styles.viewlineups}>
        <Text>LineUpsScreen</Text>
        <View style={{display:"flex", flexDirection:"row", borderWidth:1, justifyContent:"center", alignItems:"center", width:350, height:100,}}>
        <Input placeholder="Nombre del Equipo" containerStyle={{borderWidth:1, borderRadius:40, width:250}}/>
        <Button />
        </View>
        <SetupLineUps />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearealineups: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewlineups: {
    width: 380,
    height: 650,
    display:"flex",
    alignItems:"center"
  },
});
