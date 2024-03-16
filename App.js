import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/HomeScreen";
import Analyzer from "./screens/Analyzer";
import Result from "./screens/Result";
import Scanner from "./screens/Scanner";

export default function App() {
  return (
    <View style={styles.container}>
      <Scanner/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
