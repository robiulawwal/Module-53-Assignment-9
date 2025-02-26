import { useContext } from "react";
import { AuthContext } from "../contextData/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateProfile = ({ children }) => {
    const { user, loader } = useContext(AuthContext);

    if (loader) {
        return <div className="flex items-center min-h-[50vh]"> <span className="loading loading-spinner w-23 text-pink-500 mx-auto"></span>
        </div>
    }
    if (!user) {
        return <Navigate to="/"></Navigate>
    }
    return (
        <div>
            {
                children
            }
        </div>
    );
};
PrivateProfile.propTypes = {
    children: PropTypes.element
}
export default PrivateProfile;