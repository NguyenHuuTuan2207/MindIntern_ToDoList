import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaView } from "react-native";

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaView style={{ flex: 1 }}>
                <HomeScreen />
            </SafeAreaView>
        </Provider>
    );
}
