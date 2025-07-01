import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function AddGoals({ addGoalHandler }) {
  const [text, setText] = useState("");

  const onAdd = () => {
    addGoalHandler(text);
    setText("");
  };

  return (
    <View style={styles.add}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 5,
          flex: 1,
          marginRight: 5,
        }}
        placeholder="Ajouter un objectif"
        onChangeText={setText}
        value={text}
      />
      <Button title="Ajouter" onPress={onAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
    add: {
      flexDirection: "row",
      margin: 10,
      justifyContent: "space-between",
      alignItems: 'center',
      width: '80%',
      position: 'absolute',
      bottom: 20,
    },
  });