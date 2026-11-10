
import {
  GoogleAuthProvider,
  signInWithCredential,
  signOut
} from "firebase/auth";

import { auth } from "../config/firebase";
import { isAllowedDomain } from "../utils/domainValidator";

export const loginWithGoogle = async (idToken: string) => {
  try {
    const credential = GoogleAuthProvider.credential(idToken);

    const result = await signInWithCredential(auth, credential);

    const user = result.user;

    if (!user.emailVerified || !isAllowedDomain(user.email)) {
      await signOut(auth);

      throw new Error(
        "Access restricted. Please login using your official domain email."
      );
    }

    return user;
  } catch (error: any) {
    if (error.message?.includes("Access restricted")) {
      throw error;
    }

    throw new Error(
      error.message || "Google authentication failed. Please try again."
    );
  }
};

export const logoutUser = async () => {
  await signOut(auth);
};
