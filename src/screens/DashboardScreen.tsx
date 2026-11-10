
import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../services/authService";

export default function DashboardScreen() {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch {
      console.log("Logout failed");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.logo}>HB+</Text>

        <Text style={styles.heading}>
          Welcome to Dashboard!
        </Text>

        <Text style={styles.subtitle}>
          You have successfully logged in.
        </Text>

        <View style={styles.profile}>
          <Text style={styles.label}>
            Name
          </Text>

          <Text style={styles.value}>
            {user?.displayName || "User"}
          </Text>

          <Text style={styles.label}>
            Official Email
          </Text>

          <Text style={styles.value}>
            {user?.email}
          </Text>

          <Text style={styles.label}>
            Account Status
          </Text>

          <Text style={styles.status}>
            Authorized
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  card: {
    width: "100%",
    maxWidth: 450,
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 18,
    elevation: 4
  },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2563EB",
    textAlign: "center"
  },
  heading: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#0F172A",
    textAlign: "center",
    marginTop: 20
  },
  subtitle: {
    color: "#64748B",
    textAlign: "center",
    marginTop: 8
  },
  profile: {
    backgroundColor: "#F8FAFC",
    padding: 20,
    borderRadius: 12,
    marginTop: 25
  },
  label: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 12
  },
  value: {
    fontSize: 16,
    color: "#0F172A",
    fontWeight: "600",
    marginTop: 5
  },
  status: {
    color: "#16A34A",
    fontWeight: "bold",
    marginTop: 5
  },
  button: {
    backgroundColor: "#DC2626",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 25
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  }
});
