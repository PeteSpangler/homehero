import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Appbar } from "react-native-paper";

interface HomeProps {
	loggedIn: boolean;
	onLogin: () => void;
	onRegister: () => void;
}

const HomePage: React.FC<HomeProps> = ({ loggedIn, onLogin, onRegister }) => {
	const [showWelcomePage, setShowWelcomePage] = useState(false);

	const handleLogin = () => {
		// Perform login logic here
		// Assuming login is successful, set loggedIn to true
		onLogin();
		setShowWelcomePage(true);
	};

	const handleRegister = () => {
		// Perform register logic here
		// Assuming registration is successful, set loggedIn to true
		onRegister();
		setShowWelcomePage(true);
	};

	const handleLogout = () => {
		// Perform logout logic here
		// Set loggedIn to false
		setShowWelcomePage(false);
	};

	return (
		<View style={{ flex: 1 }}>
			<Appbar.Header>
				<Appbar.Content title="My App" />
				{loggedIn && <Appbar.Action icon="logout" onPress={handleLogout} />}
			</Appbar.Header>

			{!loggedIn && (
				<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
					<Text>Please login or register</Text>
					<Button title="Login" onPress={handleLogin} />
					<Button title="Register" onPress={handleRegister} />
				</View>
			)}

			{loggedIn && showWelcomePage && (
				<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
					<Text>Welcome to the app!</Text>
					<Button title="My Profile" onPress={() => console.log("Navigate to My Profile")} />
					<Button title="My Group" onPress={() => console.log("Navigate to My Group")} />
					<Button title="My Chores" onPress={() => console.log("Navigate to My Chores")} />
					<Button title="Assign Chore" onPress={() => console.log("Navigate to Assign Chore")} />
				</View>
			)}
		</View>
	);
};

export default HomePage;
