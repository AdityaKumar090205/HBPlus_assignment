
import React from "react";

import { AuthProvider } from "./hbplus-auth-app/assets/src/context/AuthContext";
import AppNavigator from "./hbplus-auth-app/assets/src/navigation/AppNavigator";

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
