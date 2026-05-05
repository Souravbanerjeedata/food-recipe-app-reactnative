import { StyleSheet, Text, View } from "react-native";

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>{mealId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
