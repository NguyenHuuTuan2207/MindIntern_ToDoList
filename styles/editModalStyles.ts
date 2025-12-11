import { StyleSheet } from "react-native";

export const editModalStyles = StyleSheet.create({
  
  overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 15,
        padding: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "600",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 10,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 15,
    },
    btnCancel: {
        marginRight: 20,
    },
    btnSave: {
        backgroundColor: "#4caf50",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
});
