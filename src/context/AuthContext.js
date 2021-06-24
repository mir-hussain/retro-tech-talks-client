import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../configs/Firebase.config";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
  };

  const signIn = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        const currentUser = user;
      })
      .catch((error) => {
        alert("error");
      });
  };

  const signOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
