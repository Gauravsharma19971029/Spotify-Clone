import {
  Ionicons,
  Entypo,
  EvilIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Home from "../screens/HomeScreen";
import Search from "../screens/SearchScreen";
import Library from "../screens/LibraryScreen";
import Premium from "../screens/PremiumScreen";
import AlbumScreen from '../screens/AlbumScreen'
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              name="home"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons
              name="search"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Your Library"
        component={LibrayNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="library-music-outline"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={PremiumNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="spotify"
              size={30}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={Home}
        options={{ headerTitle: "Home" }}
      />
      <TabOneStack.Screen
        name="Album"
        component={AlbumScreen}
        options={{ headerTitle: "Album" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={Search}
        options={{ headerTitle: "Search" }}
      />
    </TabTwoStack.Navigator>
  );
}

function LibrayNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Library"
        component={Library}
        options={{ headerTitle: "Library" }}
      />
    </TabTwoStack.Navigator>
  );
}

function PremiumNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Premium"
        component={Premium}
        options={{ headerTitle: "Premium" }}
      />
    </TabTwoStack.Navigator>
  );
}
