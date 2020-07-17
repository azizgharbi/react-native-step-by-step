import Item from "./Item";

export default TasksList = ({ items }) =>
  items.map((item) => <Item title={item.title} key={item.id} />);
