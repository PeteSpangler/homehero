import { StyleSheet } from "react-native";
import theme from "./theme";

const globalStyles = StyleSheet.create({
	appbar: {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
	},
	container: {
		flex: 1,
		backgroundColor: theme.colors.primary,
		alignItems: "center",
		justifyContent: "center",
	},

	welcomeText: {
		fontSize: 24,
		color: "#FFF",
	},
	loginContainer: {
		flex: 1,
		backgroundColor: theme.colors.secondary,
		alignItems: "center",
		justifyContent: "center",
	},
	loginText: {
		fontSize: 18,
	},
});

export default globalStyles;
