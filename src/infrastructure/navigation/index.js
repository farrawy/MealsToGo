import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppNavigator } from "./app.navigator";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
