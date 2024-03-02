import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Button, Icon, Input } from "@rneui/themed";
import SetupLineUps from "../../components/tournament/setupmatchlineups/SetupLineUps";
import { ArrowBackButton } from "../../components/Buttonx";

export default function LineUpsScreen() {
  return (
    <>
      <ArrowBackButton />

      <SafeAreaView style={styles.safearealineups}>
        <View style={styles.viewlineups}>
          <Text style={{ fontSize: 19 }}>Alineaciones</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderWidth: 1,
              justifyContent: "space-around",
              alignItems: "center",
              width: 350,
              height: 80,
              borderRadius: 40,
            }}
          >
            <Input
              placeholder="Nombre del Equipo"
              placeholderTextColor={"#111"}
              containerStyle={{ width: 200, paddingTop: 20 }}
              inputStyle={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "700",
                width: 250,
              }}
              textContentType="name"
              style={{ alignItems: "center", justifyContent: "center" }}
              inputContainerStyle={{ borderColor: "transparent" }}
            />

            <Button
              icon={
                <Icon
                  name="check-decagram-outline"
                  type="material-community"
                  size={25}
                  color={"white"}
                />
              }
              buttonStyle={{ backgroundColor: "#01214e", borderRadius: 20 }}
            />
          </View>
          <SetupLineUps />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safearealineups: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  viewlineups: {
    width: 380,
    height: 650,
    display: "flex",
    alignItems: "center",
  },
});
