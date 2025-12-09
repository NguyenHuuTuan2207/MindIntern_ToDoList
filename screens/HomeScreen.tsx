import React, { useState } from "react";
import { View, FlatList } from "react-native";
import AddToDo from "../components/AddToDo";
import SearchBar from "../components/SearchBar";
import TodoItem from "../components/TodoItem";
import EditModal from "../components/EditModal";
import { Todo } from "../types/Todo";
import { homeScreenStyles as styles } from "../styles/homeScreenStyles";

const HomeScreen = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [search, setSearch] = useState("");

    const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
    const [isEditVisible, setEditVisible] = useState(false);

    const filtered = todos.filter(t =>
        t.title.toLowerCase().includes(search.toLowerCase())
    );

    const addToDo = (title: string) => {
        setTodos([{ id: Date.now().toString(), title, completed: false }, ...todos]);
    };

    const toggleTodo = (id: string) => {
        setTodos(todos.map(t =>
            t.id === id ? { ...t, completed: !t.completed } : t
        ));
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(t => t.id !== id));
    };

    const openEdit = (todo: Todo) => {
        setEditingTodo(todo);
        setEditVisible(true);
    };

    const saveEdit = (newTitle: string) => {
        if (!editingTodo) return;

        setTodos(todos.map(t =>
            t.id === editingTodo.id ? { ...t, title: newTitle } : t
        ));

        setEditVisible(false);
        setEditingTodo(null);
    };

    return (
        <View style={styles.container}>
            <SearchBar value={search} onChange={setSearch} />
            <AddToDo onAdd={addToDo} />

            <FlatList
                data={filtered}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TodoItem
                        todo={item}
                        onToggle={() => toggleTodo(item.id)}
                        onDelete={() => deleteTodo(item.id)}
                        onEdit={() => openEdit(item)}
                    />
                )}
            />

            {/* Modal sửa */}
            <EditModal
                visible={isEditVisible}
                initialValue={editingTodo?.title || ""}
                onClose={() => setEditVisible(false)}
                onSave={saveEdit}
            />
        </View>
    );
};

export default HomeScreen;
