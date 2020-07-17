import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";

export default Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
