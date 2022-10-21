import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { color } from "react-native-reanimated";
// import ProfileScreen from "../../features/user/screens/profile.screen";

const Tab = createBottomTabNavigator();

const darkMode = false;

export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, size, color }) => {
        let iconName;

        if (route.name === "Restaurants") {
          iconName = focused ? "ios-restaurant" : "ios-restaurant-outline";
        } else if (route.name === "Maps") {
          iconName = focused ? "ios-map" : "ios-map-outline";
        } else if (route.name === "Profile") {
          iconName = focused ? "ios-person" : "ios-person-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "#666",
      activeBackgroundColor: darkMode ? "#001" : "#fff",
      inactiveBackgroundColor: darkMode ? "#001" : "#fff",
    }}
  >
    <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
    <Tab.Screen name="Maps" component={MapScreen} />
  </Tab.Navigator>
);
