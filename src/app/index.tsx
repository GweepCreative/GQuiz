import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Main() {
  return (
    <SafeAreaView>
      <Stack>
        <Stack.Screen name="QuizScreen" />
      </Stack>
    </SafeAreaView>
  );
}
