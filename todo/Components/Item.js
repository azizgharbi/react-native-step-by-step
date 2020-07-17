import React from "react";

import { styles } from "../styles";

import { View, Text } from "react-native";

export default Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
