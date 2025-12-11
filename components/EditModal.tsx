import React, { useState, useEffect } from "react";
import { editModalStyles as styles } from "../styles/editModalStyles";
import { Modal, View, TextInput, TouchableOpacity, Text } from "react-native";

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

export default EditModal;
