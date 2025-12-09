import React from "react";
import { View, TextInput } from "react-native";
import { searchBarStyles as styles } from "../styles/searchBarStyles";

interface Props {
    value: string;
    onChange: (text: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search"
                style={styles.input}
                value={value}
                onChangeText={onChange}
            />
        </View>
    );
};
export default SearchBar;
