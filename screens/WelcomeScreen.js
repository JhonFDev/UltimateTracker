import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Image } from "@rneui/themed";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("home");
    }, 5000);
  }, []);
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.viewcontainerwelcome}>
        <Text style={styles.textwelcome}>Ultimate Tracker</Text>
        <View style={styles.viewimg}>
          <Image
            source={require("../assets/BurgamaBlue.png")}
            style={styles.imagewelcome}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
    justifyContent: "center",
  },
  viewcontainerwelcome: {
    justifyContent: "center",
    flex: 1,
  },
  imagewelcome: {
    width: 270,
    height: 250,
  },
  viewimg: {
    alignItems: "center",
    maxWidth: 400,
    maxHeight: 300,
  },
  textwelcome: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  
});
