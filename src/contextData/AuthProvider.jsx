import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={"name"}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default AuthProvider;