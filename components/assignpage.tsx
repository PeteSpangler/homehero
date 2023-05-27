import React from "react";
import { View, Text, Button } from "react-native";

const AssignPage = () => {
	const handleAssignChore = () => {
		// Logic to assign chore to another user
		console.log("Chore assigned to another user");
	};

	return (
		<View>
			<Text>Assign Page</Text>
			{/* Add your assign content here */}
			<Button title="Assign Chore" onPress={handleAssignChore} />
		</View>
	);
};

export default AssignPage;
