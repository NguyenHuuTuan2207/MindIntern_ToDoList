import React, { useState } from "react";
import { View, FlatList } from "react-native";
import AddToDo from "../components/AddToDo";
import SearchBar from "../components/SearchBar";
import TodoItem from "../components/TodoItem";
import EditModal from "../components/EditModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../src/redux/store";
import { addTodo, toggleTodo, deleteTodo, editTodo } from "../src/redux/slices/toDoSlice";
import { homeScreenStyles as styles } from "../styles/homeScreenStyles";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const todos = useSelector((state: RootState) => state.todos.todos);

    const [search, setSearch] = useState("");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [isEditVisible, setEditVisible] = useState(false);

    const filtered = todos.filter(t =>
        t.title.toLowerCase().includes(search.toLowerCase())
    );

    const openEdit = (id: string) => {
        setEditingId(id);
        setEditVisible(true);
    };

    const saveEdit = (newTitle: string) => {
        if (!editingId) return;
        dispatch(editTodo({ id: editingId, newTitle }));
        setEditVisible(false);
        setEditingId(null);
    };

    return (
        <View style={styles.container}>
            <SearchBar value={search} onChange={setSearch} />

            <AddToDo onAdd={(title) => dispatch(addTodo(title))} />

            <FlatList
                data={filtered}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TodoItem
                        todo={item}
                        onToggle={() => dispatch(toggleTodo(item.id))}
                        onDelete={() => dispatch(deleteTodo(item.id))}
                        onEdit={() => openEdit(item.id)}
                    />
                )}
            />

            <EditModal
                visible={isEditVisible}
                initialValue={
                    todos.find(t => t.id === editingId)?.title || ""
                }
                onClose={() => setEditVisible(false)}
                onSave={saveEdit}
            />
        </View>
    );
};

export default HomeScreen;
