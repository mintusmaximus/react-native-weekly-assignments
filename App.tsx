import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [input, setInput] = useState<string>("");
  const lowerLimit: number = input
    ? Math.floor((220 - Number(input)) * 0.65)
    : 0;
  const upperLimit: number = input
    ? Math.floor((220 - Number(input)) * 0.85)
    : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Heart rate limits calculator</Text>

      <Text style={styles.resultText}>Enter your age:</Text>
      <TextInput
        placeholder="Input age"
        inputMode="numeric"
        onChangeText={setInput}
        style={styles.input}
      />
      <Text style={styles.resultText}>Lower limit: {lowerLimit} bpm</Text>
      <Text style={styles.resultText}>Upper limit: {upperLimit} bpm</Text>

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
  header: {
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    height: 50,
    width: 100,
  },
  resultText: {
    fontSize: 20,
  },
});
