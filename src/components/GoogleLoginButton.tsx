
import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet
} from "react-native";

interface Props {
  onPress: () => void;
  loading: boolean;
}

export default function GoogleLoginButton({
  onPress,
  loading
}: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <Text style={styles.text}>
          G   Continue with Google
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2563EB",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 20
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  }
});
