import "animate.css";
import { useContext } from "react";
import { AuthContext } from "../contextData/AuthProvider";
import { div } from "framer-motion/client";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="my-6">
      {
        user && <div className="text-center p-6" >
          <h1 className="text-3xl font-bold text-purple-700 animate__animated animate__backInUp"> Welcome back, {" "} <span className="text-pink-600 underline">{user.email}</span> !</h1>
        </div>
      }
    </div>
  );
};

export default Header;