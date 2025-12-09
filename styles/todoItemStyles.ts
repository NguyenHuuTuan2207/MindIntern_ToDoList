import { StyleSheet } from "react-native";

export const todoItemStyles = StyleSheet.create({
  container: {
    backgroundColor: "#8fc56c",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  checkbox: {
    fontSize: 24,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  done: {
    color: "#fff",
    fontSize: 14,
  },
  edit: {
    marginHorizontal: 10,
    color: "blue",
  },
  delete: {
    color: "red",
  },
});
