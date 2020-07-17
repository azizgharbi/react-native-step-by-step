import React, { useState } from "react";
import { SafeAreaView, TextInput, Button, StyleSheet } from "react-native";

export default TaskInput = ({ tasks, setTask }) => {
  const [value, onChangeText] = useState("");

  function addTask() {
    setTask([
      ...tasks,
      {
        id: new Date(),
        title: value,
      },
    ]);
  }

  return (
    <SafeAreaView style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your task"
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <Button color="#f9c2ff" title="add task" onPress={addTask}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    margin: 30,
  },
  input: {
    marginBottom: 4,
    marginRight: 4,
    borderColor: "#f9c2ff",
    borderWidth: 5,
    padding: 10,
  },
});
