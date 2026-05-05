import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
  },
});
