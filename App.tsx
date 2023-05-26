import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import HomePage from "./components/homepage";

export default function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	const handleLogin = () => {
		setLoggedIn(true);
	};

	const handleRegister = () => {
		setLoggedIn(true);
	};

	return (
		<PaperProvider>
			<View style={styles.container}>
				<HomePage loggedIn={loggedIn} onLogin={handleLogin} onRegister={handleRegister} />
				<StatusBar style="auto" />
			</View>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
