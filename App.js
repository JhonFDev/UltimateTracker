// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";

import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import MatchScreen from "./screens/match/MatchScreen";
import SetupMatchScreen from "./screens/match/SetupMachscreen";
import LineUpsScreen from "./screens/match/LineUpsScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>
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
    </PaperProvider>
  );
}

export default App;
