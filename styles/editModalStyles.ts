import { StyleSheet } from "react-native";

export const editModalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 15,
    marginRight: 10,
  },
  button: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    fontSize: 26,
    fontWeight: "bold",
  },
});
