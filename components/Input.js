import React from "react";
import { TextInput, StyleSheet, Platform } from "react-native";

const Input = ({ style, ...props }) => {
  return <TextInput style={[styles.input, style]} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    height: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
    ...Platform.select({
      web: {
        outlineWidth: 0,
      },
    }),
  },
});

export default Input;
