import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import SetupLineUps from "../../components/tournament/SetupLineUps";
import { Button, Icon, Input } from "@rneui/themed";

export default function LineUpsScreen() {
  return (
    <SafeAreaView style={styles.safearealineups}>
      <View style={styles.viewlineups}>
        <Text>LineUpsScreen</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            width: 350,
            height: 100,
            borderRadius: 40,
            gap: 15,
          }}
        >
          <Input
            placeholder="Nombre del Equipo"
            placeholderTextColor={"#111"}
            containerStyle={{ width: 250 }}
            inputStyle={{
              borderColor: "red",
              borderBottomColor: "white",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "700",
            }}
            textContentType="name"
          />
          <Button
            icon={
              <Icon
                name="check-decagram-outline"
                type="material-community"
                size={30}
                color={"white"}
              />
            }
            buttonStyle={{ backgroundColor: "#517fa4", borderRadius: 20 }}
          />
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
    display: "flex",
    alignItems: "center",
  },
});
