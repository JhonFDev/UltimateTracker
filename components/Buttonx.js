import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

export function Buttonx(props) {
  const { onpress, text, color, backgroundcolor, fontsize } = props;
  return (
    <TouchableOpacity
      style={{ ...styles.btnx, backgroundColor: backgroundcolor }}
      onPress={onpress}
    >
      <Text style={{ ...styles.txtbtnx, color: color, fontSize: fontsize }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
export function ArrowBackButton() {
  const navigation = useNavigation();
  return (
    <View style={styles.arrowleft}>
    <TouchableOpacity
      style={{ ...styles.btntoucharrowleft }}
      onPress={() => navigation.goBack()}
    >
    <Icon name="arrow-left" type="feather" color={"black"} size={35} />
      
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnx: {
    borderRadius: 20,
    paddingVertical: 10,
    borderWidth: 1,
    marginTop: 20,
  },
  txtbtnx: {
    textAlign: "center",
    fontWeight: "700",
  },
  arrowleft: {
    zIndex: 50,
  },
  btntoucharrowleft:{
    position: "absolute",
    top: 30,
    left: 13,
    borderRadius: 30,
    backgroundColor: "orange",
  }
});
