import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from "./components/Dashboard.component"
export default function App() {
  return (
    <Dashboard/>
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
