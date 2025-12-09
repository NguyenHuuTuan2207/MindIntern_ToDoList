import React, { useState, useEffect } from "react";
import { Modal, View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
    visible: boolean;
    initialValue: string;
    onClose: () => void;
    onSave: (newTitle: string) => void;
}

const EditModal: React.FC<Props> = ({ visible, initialValue, onClose, onSave }) => {
    const [text, setText] = useState(initialValue);

    useEffect(() => {
        setText(initialValue);        // load lại text khi mở modal
    }, [initialValue]);

    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.title}>Edit task</Text>

                    <TextInput
                        style={styles.input}
                        value={text}
                        onChangeText={setText}
                    />

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.btnCancel} onPress={onClose}>
                            <Text style={{ color: "#333" }}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btnSave}
                            onPress={() => {
                                if (text.trim()) onSave(text);
                            }}
                        >
                            <Text style={{ color: "white" }}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
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

export default EditModal;
