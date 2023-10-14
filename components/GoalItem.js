import { StyleSheet, Text, View } from "react-native";

const GoalItem = ({ itemData }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText} onPress={() => removeGoal(itemData.item)}>
        {itemData.item.text}
      </Text>
    </View>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#06B6D4",
  },
  goalText: {
    color: "white",
  },
});
