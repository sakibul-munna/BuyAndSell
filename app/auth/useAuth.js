import { useContext } from "react";
import AuthContext from "./context";
import jwtDecode from "jwt-decode";
import storage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    storage.removeToken();
  };

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    storage.storeToken(authToken);
  };

  return { user, logIn, logOut };
};
