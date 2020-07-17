import React, { useState, useCallback } from "react";
import { RefreshControl, ScrollView } from "react-native";

import { styles } from "./styles";

import UselessTextInput from "./Components/UselessTextInput";
import TasksList from "./Components/TasksList";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const App = () => {
  const [tasks, setTask] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      setRefreshing(false);
      setTask([]);
    });
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={styles.container}
    >
      <UselessTextInput tasks={tasks} setTask={setTask}></UselessTextInput>
      <TasksList items={tasks}></TasksList>
    </ScrollView>
  );
};

export default App;
