import React from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function UpdateGoals({
  editingGoalText,
  setEditingGoalText,
  saveEditGoal,
  cancelEditGoal,
}) {
  return (
    <View style={{ width: "80%", alignSelf: "center", marginBottom: 20 }}>
      <TextInput
        value={editingGoalText}
        onChangeText={setEditingGoalText}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
          borderRadius: 8,
          backgroundColor: "#fff",
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={[styles.smallButton, styles.buttonCancel]}
          onPress={cancelEditGoal}
        >
          <Text style={styles.smallButtonText}>Annuler</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.smallButton, styles.buttonSave]}
          onPress={saveEditGoal}
        >
          <Text style={styles.smallButtonText}>Sauvegarder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
