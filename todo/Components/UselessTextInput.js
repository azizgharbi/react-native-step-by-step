import React, { useState } from "react";
import { SafeAreaView, TextInput, Button } from "react-native";
import { styles } from "../styles";

export default UselessTextInput = ({ tasks, setTask }) => {
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
