import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

export default function SampleGoals({ goals, deleteGoalHandler, onEdit }) {
  return (
    <FlatList
      style={styles.container}
      data={goals}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.text}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: "red" }}>
              {item.id} - {item.goal}
            </Text>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.smallButton}
              onPress={() => onEdit(item.id, item.goal)}
            >
              <Text style={styles.smallButtonText}>Modifier</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.smallButton, styles.deleteButton]}
              onPress={() => deleteGoalHandler(item.id)}
            >
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  text: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
  },
  updateBtn: {

  },
  smallButton: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    marginRight: 6,
    minWidth: 40,
    height: 28,
    justifyContent: 'center',
  },
  smallButtonText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'white',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    marginRight: 0,
    marginLeft: 2,
  },
  deleteButtonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 100,
    justifyContent: 'flex-end',
  },
});