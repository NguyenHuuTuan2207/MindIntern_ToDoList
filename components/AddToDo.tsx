import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { addTodoStyles as styles } from "../styles/addTodoStyles";
interface Props {
    onAdd: (title: string) => void;
}

const AddToDo: React.FC<Props> = ({ onAdd }) => {
    const [text, setText] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Add new work that need to do"
                value={text}
                onChangeText={setText}
                style={styles.input}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (!text.trim()) return;
                    onAdd(text.trim());
                    setText("");
                }}
            >
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
        </View>
    );
};
export default AddToDo;
