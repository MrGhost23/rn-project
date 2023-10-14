import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoalHandler, closeModal, visible }) => {
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
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
