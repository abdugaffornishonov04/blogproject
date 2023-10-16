import { createContext, useState } from "react";
import PropTypes from "prop-types"
import { TOKEN } from "../constants";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(Cookies.get(TOKEN) ? true : false);
  const state = {
    isAuthenticated,
    setIsAuthenticated,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node

}

export default AuthContextProvider;
