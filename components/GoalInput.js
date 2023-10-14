import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoalHandler }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [inputBorderColor, setInputBorderColor] = useState("#cccccc");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
    setInputBorderColor("#cccccc");
  };

  const addGoal = () => {
    if (!enteredGoal || enteredGoal.length < 2) {
      setInputBorderColor("red");
      return;
    }
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.textInput, { borderColor: inputBorderColor }]}
        placeholder="Your Goal!"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add Goal" onPress={addGoal} />
    </View>
  );
};
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
