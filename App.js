import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const openModal = () => {
    setModalIsVisible(true);
  };

  const closeModal = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    closeModal();
  };

  const removeGoal = (id) => {
    const updatedGoals = goals.filter((goal) => goal !== id);
    setGoals(updatedGoals);
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#06B6D4" onPress={openModal} />
      <GoalInput
        addGoalHandler={addGoalHandler}
        visible={modalIsVisible}
        closeModal={closeModal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem itemData={itemData} removeGoal={removeGoal} />
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    padding: 16,
  },
  goalsContainer: {
    marginTop: 20,
    flex: 6,
  },
});
