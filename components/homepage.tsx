import React, { useState } from "react";
import { View, Text } from "react-native";
import { Appbar, Button, useTheme } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import globalStyles from "../styles/globalStyles";
import theme from "../styles/theme";

interface HomeProps {
	loggedIn: boolean;
	navigation: StackNavigationProp<any>;
}

const HomePage: React.FC<HomeProps> = ({ loggedIn, navigation }) => {
	const [showWelcomePage, setShowWelcomePage] = useState(false);

	const handleProfilePress = () => {
		navigation.navigate("Profile");
	};

	const handleGroupPress = () => {
		navigation.navigate("Group");
	};

	const handleChoresPress = () => {
		navigation.navigate("Chores");
	};

	const handleAssignPress = () => {
		navigation.navigate("Assign");
	};

	const handleLogin = () => {
		setShowWelcomePage(true);
	};

	const handleRegister = () => {
		setShowWelcomePage(true);
	};

	const handleLogout = () => {
		setShowWelcomePage(false);
	};

	return (
		<View style={{ flex: 1 }}>
			{showWelcomePage ? (
				<View style={[globalStyles.container, { backgroundColor: theme.colors.primary }]}>
					<Text style={globalStyles.welcomeText}>Become a Home Hero!</Text>
					<Appbar style={globalStyles.appbar}>
						<Appbar.Action icon="account" onPress={handleProfilePress} />
						<Appbar.Action icon="account-group" onPress={handleGroupPress} />
						<Appbar.Action icon="format-list-bulleted" onPress={handleChoresPress} />
						<Appbar.Action icon="clipboard-text" onPress={handleAssignPress} />
					</Appbar>
				</View>
			) : (
				<View style={[globalStyles.loginContainer, { backgroundColor: theme.colors.secondary }]}>
					<Text style={globalStyles.loginText}>Please log in or register.</Text>
					<Button onPress={handleLogin} color={theme.colors.primary}>
						Login
					</Button>
					<Button onPress={handleRegister} color={theme.colors.primary}>
						Register
					</Button>
				</View>
			)}
		</View>
	);
};

export default HomePage;
