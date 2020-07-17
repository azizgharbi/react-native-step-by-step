import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Button,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "task one",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "task two",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "task three",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const UselessTextInput = ({ tasks, setTask }) => {
  const [value, onChangeText] = useState("");

  function addTask() {
    setTask([
      ...tasks,
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba".concat(new Date()),
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

const App = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  const [tasks, setTask] = useState(DATA);
  return (
    <SafeAreaView style={styles.container}>
      <UselessTextInput tasks={tasks} setTask={setTask}></UselessTextInput>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  inputContainer: {
    display: "flex",
    margin: 40,
  },
  input: {
    marginBottom: 4,
    height: 70,
    borderColor: "#f9c2ff",
    borderWidth: 5,
    padding: 10,
  },
});

export default App;
