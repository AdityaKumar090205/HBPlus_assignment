
import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Alert
} from "react-native";

import {
  useIdTokenAuthRequest
} from "expo-auth-session/providers/google";

import GoogleLoginButton from "../components/GoogleLoginButton";
import { loginWithGoogle } from "../services/authService";

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [request, response, promptAsync] =
    useIdTokenAuthRequest({
      webClientId:
        process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,

      androidClientId:
        process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,

      iosClientId:
        process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,

      scopes: ["openid", "profile", "email"]
    });

  useEffect(() => {
    const handleResponse = async () => {
      if (response?.type === "success") {
        const idToken =
          response.params?.id_token ||
          response.authentication?.idToken;

        if (!idToken) {
          setError("Unable to retrieve Google ID token.");
          setLoading(false);
          return;
        }

        try {
          await loginWithGoogle(idToken);
          setError("");
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }

      if (response?.type === "error") {
        setError("Google login failed. Please try again.");
        setLoading(false);
      }

      if (response?.type === "cancel") {
        setLoading(false);
      }
    };

    handleResponse();
  }, [response]);

  const handleLogin = async () => {
    try {
      setError("");
      setLoading(true);
      await promptAsync();
    } catch {
      setError("Unable to start Google login.");
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.logo}>HB+</Text>

        <Text style={styles.heading}>
          Welcome Back
        </Text>

        <Text style={styles.subtitle}>
          Sign in using your official HBPlus account.
        </Text>

        <GoogleLoginButton
          onPress={handleLogin}
          loading={loading || !request}
        />

        {error ? (
          <Text style={styles.error}>
            {error}
          </Text>
        ) : null}

        <Text style={styles.footer}>
          Authorized users only
        </Text>

        <Text style={styles.domain}>
          @hbplus.fit
        </Text>
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
    maxWidth: 420,
    backgroundColor: "#FFFFFF",
    padding: 32,
    borderRadius: 18,
    alignItems: "center",
    elevation: 4
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2563EB",
    marginBottom: 20
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0F172A"
  },
  subtitle: {
    fontSize: 15,
    color: "#64748B",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 23
  },
  error: {
    color: "#DC2626",
    marginTop: 16,
    textAlign: "center",
    lineHeight: 22
  },
  footer: {
    marginTop: 30,
    color: "#64748B",
    fontSize: 13
  },
  domain: {
    marginTop: 5,
    color: "#2563EB",
    fontWeight: "600"
  }
});
