import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Constants } from "react-native-unimodules";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>App de démo Expo</Text>
      <Text>
        Release channel:
        {Constants.manifest.releaseChannel || "dev"}
      </Text>
      <Text>
        Numéro de version Expo:
        {Constants.manifest.version}
      </Text>
      <Text>
        Numéro de version Android:
        {Constants.platform.android?.versionCode || "null"}
      </Text>
      <Text>
        Numéro de build iOS: {Constants.platform.ios?.buildNumber || "null"}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
