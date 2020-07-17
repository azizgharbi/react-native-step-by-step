import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
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
