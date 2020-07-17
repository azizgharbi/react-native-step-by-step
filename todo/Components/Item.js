import React, { useRef } from "react";
import {
  Animated,
  View,
  Text,
  StyleSheet,
  PanResponder,
  TouchableOpacity,
} from "react-native";

export default Item = ({ title }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: 0,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: -60, y: 0 } } // Back to zero
      ).start();
    },
  });

  function resetPosition() {
    pan.setValue(0);
  }

  return (
    <View style={styles.backgroundItem}>
      <Animated.View {...panResponder.panHandlers} style={[pan.getLayout()]}>
        <View style={styles.item} onPress={resetPosition}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Animated.View>
      <TouchableOpacity
        style={styles.delete}
        onPress={() => {
          console.log("does not work");
        }}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    zIndex: 99999,
  },
  backgroundItem: {
    backgroundColor: "#e8e9eb",
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
  },
  delete: {
    backgroundColor: "#f66",
    width: 50,
    color: "white",
    position: "absolute",
    right: 0,
    top: 20,
    marginRight: 20,
    padding: 2,
  },
  deleteText: {
    fontSize: 16,
    color: "white",
  },
});
