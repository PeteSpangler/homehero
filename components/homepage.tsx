import React, { useState } from "react";
import { View, Text } from "react-native";
import { Appbar, Button, useTheme } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import globalStyles from "../styles/globalStyles";

interface HomeProps {
	loggedIn: boolean;
	onLogin: () => void;
	onRegister: () => void;
	navigation: StackNavigationProp<any>;
}

const HomePage: React.FC<HomeProps> = ({ loggedIn, onLogin, onRegister, navigation }) => {
	const [showWelcomePage, setShowWelcomePage] = useState(false);
	const [showProfilePage, setShowProfilePage] = useState(false);
	const [showGroupPage, setShowGroupPage] = useState(false);
	const [showChoresPage, setShowChoresPage] = useState(false);
	const [showAssignPage, setShowAssignPage] = useState(false);

	const theme = useTheme();

	const handleProfilePress = () => {
		setShowProfilePage(!showProfilePage);
		navigation.navigate("Profile");
	};

	const handleGroupPress = () => {
		setShowGroupPage(!showGroupPage);
		navigation.navigate("Group");
	};

	const handleChoresPress = () => {
		setShowChoresPage(!showChoresPage);
		navigation.navigate("Chores");
	};

	const handleAssignPress = () => {
		setShowAssignPage(!showAssignPage);
		navigation.navigate("Assign");
	};

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
			{/* {showProfilePage && <ProfilePage />}
			{showGroupPage && <GroupPage />}
			{showChoresPage && <ChoresPage />}
			{showAssignPage && <AssignPage />} */}
		</View>
	);
};

export default HomePage;
