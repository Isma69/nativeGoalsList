import {
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import SampleGoals from "./components/SampleGoals";
import AddGoals from "./components/AddGoals";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import CustomModal from "./components/CustomModal";
import UpdateGoals from "./components/updateGoals";

const sampleGoalsData = [
  { id: 1, goal: "Faire les courses" },
  { id: 2, goal: "Aller à la salle de sport 3 fois par semaine" },
  { id: 3, goal: "Monter à plus de 5000m d altitude" },
  { id: 4, goal: "Acheter mon premier appartement" },
  { id: 5, goal: "Perdre 5 kgs" },
  { id: 6, goal: "Gagner en productivité" },
  { id: 7, goal: "Apprendre un nouveau langage" },
  { id: 8, goal: "Faire une mission en freelance" },
  { id: 9, goal: "Organiser un meetup autour de la tech" },
  { id: 10, goal: "Faire un triathlon" },
];

export default function App() {
  const [goals, setGoals] = useState(sampleGoalsData);
  const [editingGoalId, setEditingGoalId] = useState(null);
  const [editingGoalText, setEditingGoalText] = useState("");

  const addGoalHandler = (text) => {
    if (text.length === 0) {
      return;
    }
    setGoals((currentGoals) => {
      const maxId = currentGoals.reduce(
        (maxId, goal) => Math.max(maxId, goal.id),
        0
      );
      return [...currentGoals, { id: maxId + 1, goal: text }];
    });
  };

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  const startEditGoal = (id, text) => {
    setEditingGoalId(id);
    setEditingGoalText(text);
  };

  const saveEditGoal = () => {
    setGoals((currentGoals) =>
      currentGoals.map((goal) =>
        goal.id === editingGoalId ? { ...goal, goal: editingGoalText } : goal
      )
    );
    setEditingGoalId(null);
    setEditingGoalText("");
  };

  const cancelEditGoal = () => {
    setEditingGoalId(null);
    setEditingGoalText("");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/photos-premium/resume-19-fond-clair-fond-ecran-degrade-colore-flou-doux-mouvement-fluide-eclat-brillant_792836-72898.jpg",
          }}
          style={styles.container}
        >
          <CustomModal
            modalVisible={true}
            setModalVisible={() => {}}
            style={styles.modalView}
          ></CustomModal>

          <Text style={styles.title}>Mes Objectifs</Text>
          {editingGoalId ? (
            <UpdateGoals
              editingGoalText={editingGoalText}
              setEditingGoalText={setEditingGoalText}
              saveEditGoal={saveEditGoal}
              cancelEditGoal={cancelEditGoal}
            />
          ) : (
            <SampleGoals
              goals={goals}
              deleteGoalHandler={deleteGoalHandler}
              onEdit={startEditGoal}
            />
          )}
          {!editingGoalId && <AddGoals addGoalHandler={addGoalHandler} />}
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  title: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 50,
    marginTop: 20,
  },
  centeredView: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 30,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  smallButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
    minWidth: 90,
    alignItems: "center",
    marginHorizontal: 5,
  },
  smallButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  buttonCancel: {
    backgroundColor: "#888",
  },
  buttonSave: {
    backgroundColor: "#2196F3",
  },
});
