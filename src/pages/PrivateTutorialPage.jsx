import { useContext } from "react";
import { AuthContext } from "../contextData/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateTutorialPage = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return <div className="flex items-center min-h-[50vh]"> <span className="loading loading-spinner w-23 text-pink-500 mx-auto"></span>
        </div>
    }
    if (!user) {
        return <Navigate state={location} to="/auth/login"></Navigate>
    }
    return (
        <div>
            {
                children
            }
        </div>
    );
};
PrivateTutorialPage.propTypes = {
    children: PropTypes.element
}
export default PrivateTutorialPage;