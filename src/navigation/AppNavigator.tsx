
import React from "react";

import {
  NavigationContainer
} from "@react-navigation/native";

import {
  createNativeStackNavigator
} from "@react-navigation/native-stack";

import { ActivityIndicator, View } from "react-native";

import { useAuth } from "../context/AuthContext";

import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {user ? (
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
