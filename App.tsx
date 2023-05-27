import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	useFonts,
	IBMPlexMono_400Regular,
	IBMPlexMono_600SemiBold,
	IBMPlexMono_700Bold,
} from "@expo-google-fonts/ibm-plex-mono";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import globalStyles from "./styles/globalStyles";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import theme from "./styles/theme";
import HomePage from "./components/homepage";
import ProfilePage from "./components/profilepage";
import GroupPage from "./components/grouppage";
import ChoresPage from "./components/chorespage";
import AssignPage from "./components/assignpage";

const Stack = createStackNavigator();

type RootStackParamList = {
	Home: { loggedIn: boolean };
};

export default function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	const [fontsLoaded] = useFonts({
		IBMPlexMono_400Regular,
		IBMPlexMono_600SemiBold,
		IBMPlexMono_700Bold,
	});

	const handleLogin = () => {
		setLoggedIn(true);
	};

	const handleRegister = () => {
		setLoggedIn(true);
	};

	return (
		<PaperProvider theme={theme}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={HomePage}
						options={({ navigation }) => ({
							headerShown: false,
							title: "Home",
							// Pass the function as an option using navigation.setOptions
							// instead of including it in the params
							onLogin: () => navigation.setOptions({ loggedIn: true }),
							onRegister: () => navigation.setOptions({ loggedIn: true }),
						})}
					/>
					<Stack.Screen name="Profile" component={ProfilePage} />
					<Stack.Screen name="Group" component={GroupPage} />
					<Stack.Screen name="Chores" component={ChoresPage} />
					<Stack.Screen name="Assign" component={AssignPage} />
				</Stack.Navigator>
			</NavigationContainer>
			<View style={globalStyles.container}>
				<StatusBar style="auto" />
			</View>
		</PaperProvider>
	);
}
