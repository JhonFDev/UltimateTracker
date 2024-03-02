import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Badge, Button, Icon, Input, ListItem } from "@rneui/themed";

export default function SetupLineUps() {
  return (
    <View style={styles.viewcontainersetuplineups}>
      <View style={{ display: "flex", flexDirection: "row",marginBottom:10 }}>
        <Text style={{ fontWeight: "700", fontSize: 22 }}># Jugadores: </Text>
        <Badge
          value="10"
          badgeStyle={{ width: 40, height: 35,backgroundColor:"#d9a627"}}
          textStyle={{ fontSize: 20, fontWeight: "bold", color:"#01214e" }}
        />
      </View>
      {/* Lista de jugadores */}
      <ScrollView style={{ width: 300 }}>
        <ListItem containerStyle={{borderWidth:1,}} topDivider={true} bottomDivider={true}>
          <ListItem.Content style={{alignItems:"center"}}>
            <ListItem.Title style={{fontSize:19, fontWeight:"600",}}>JhonF     17</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{borderWidth:1,marginTop:5}} topDivider={true} bottomDivider={true}>
          <ListItem.Content style={{alignItems:"center"}}>
            <ListItem.Title style={{fontSize:19, fontWeight:"600",}}>Nathalia     67</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{borderWidth:1,marginTop:5}} topDivider={true} bottomDivider={true}>
          <ListItem.Content style={{alignItems:"center"}}>
            <ListItem.Title style={{fontSize:19, fontWeight:"600",}}>Mayron     90</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{borderWidth:1, marginTop:5}} topDivider={true} bottomDivider={true}>
          <ListItem.Content style={{alignItems:"center"}}>
            <ListItem.Title style={{fontSize:19, fontWeight:"600",}}>Marisol  26</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{borderWidth:1, marginTop:5}} topDivider={true} bottomDivider={true}>
          <ListItem.Content style={{alignItems:"center"}}>
            <ListItem.Title style={{fontSize:19, fontWeight:"600",}}>Valentina  15</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{borderWidth:1,marginTop:5}} topDivider={true} bottomDivider={true}>
          <ListItem.Content style={{alignItems:"center"}}>
            <ListItem.Title style={{fontSize:19, fontWeight:"600",}}>Leoneider  96</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{borderWidth:1,marginTop:5}} topDivider={true} bottomDivider={true}>
          <ListItem.Content style={{alignItems:"center"}}>
            <ListItem.Title style={{fontSize:19, fontWeight:"600",}}>Katy  32</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{borderWidth:1,marginTop:5}} topDivider={true} bottomDivider={true}>
          <ListItem.Content style={{alignItems:"center"}}>
            <ListItem.Title style={{fontSize:19, fontWeight:"600",}}>Kimico  13</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{borderWidth:1,marginTop:5}} topDivider={true} bottomDivider={true}>
          <ListItem.Content style={{alignItems:"center"}}>
            <ListItem.Title style={{fontSize:19, fontWeight:"600",}}>Juancho  23</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem containerStyle={{borderWidth:1,marginTop:5}} topDivider={true} bottomDivider={true}>
          <ListItem.Content style={{alignItems:"center"}}>
            <ListItem.Title style={{fontSize:19, fontWeight:"600",}}>Juan Pablo Quintero  10</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </ScrollView>
      <View style={{ width: 300, paddingTop: 10, height: 200 }}>
        <Input
          placeholder="Nombre"
          placeholderTextColor={"#111"}
          inputStyle={{ textAlign: "center" }}
        />
        <Input
          placeholder="# Dorso"
          placeholderTextColor={"#111"}
          inputStyle={{ textAlign: "center" }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Button
            buttonStyle={{ width: 55, borderRadius: 20, height: 55,backgroundColor:"#01214e" }}
            icon={
              <Icon
                name="content-save-all"
                type="material-community"
                size={25}
                color={"#fff"}
              />
            }
          />
          <Button
            buttonStyle={{ width: 55, borderRadius: 40, height: 55,backgroundColor:"#01214e" }}
            icon={
              <Icon
                name="plus-thick"
                type="material-community"
                size={25}
                color={"#fff"}
              />
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewcontainersetuplineups: {
    width: 380,
    height: 680,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
