import React from "react";
import Item from "./Item";

export default TasksList = ({ tasks, setTasks }) => {
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(({ id }) => id !== taskId));
  };
  return tasks.map(({ title, id }) => {
    return <Item title={title} key={id} id={id} deleteTask={deleteTask} />;
  });
};
