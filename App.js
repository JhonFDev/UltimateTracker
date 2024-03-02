// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import MatchScreen from "./screens/match/MatchScreen";
import SetupMatchScreen from "./screens/match/SetupMachscreen";
import LineUpsScreen from "./screens/match/LineUpsScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="match" component={MatchScreen} />
        <Stack.Screen name="setupmatch" component={SetupMatchScreen} />
        <Stack.Screen name="lineups" component={LineUpsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
