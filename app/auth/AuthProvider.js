import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: (email, password) => {
          let flag = false;
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCreds) => {
              setUser(userCreds.user);
              flag = true;
            })
            .catch((error) => {
              alert(error);
            });
          return flag;
        },
        register: (userInfo) => {
          let flag = false;
          firebase
            .auth()
            .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
            .then((userCreds) => {
              userCreds.user.updateProfile({ displayName: userInfo.name });
              flag = true;
            })
            .catch((error) => {
              alert("Error in creation of user!" + error);
            });
          return flag;
        },
        logout: () => {
          firebase
            .auth()
            .signOut()
            .then()
            .catch((error) => {
              alert("Error in Log Out!" + error);
            });
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
