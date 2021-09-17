import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [loading, setloading] = useState(true);
  const [currentUser, setcurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
      setloading(false);
    });
    return unsubscribe;
  }, []);

  //signup user
  async function signup(email, password, name) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    //update profile..
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    const user = auth.currentUser;
    setcurrentUser({
      ...user,
    });
  }
  //login user
  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }
  //logout function
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
