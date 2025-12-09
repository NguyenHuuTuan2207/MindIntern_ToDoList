import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { todoItemStyles as styles } from "../styles/todoItemStyles";
import { Todo } from "../types/Todo";

interface Props {
    todo: Todo;
    onToggle: () => void;
    onDelete: () => void;
    onEdit: () => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete, onEdit }) => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={onToggle}>
                    <Text style={styles.checkbox}>{todo.completed ? "✔️" : "⬜"}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>{todo.title}</Text>
                <Text style={styles.done}>{todo.completed ? "DONE" : ""}</Text>
            </View>

            <TouchableOpacity onPress={onEdit}>
                <Text style={styles.edit}>edit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.delete}>delete</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TodoItem;
