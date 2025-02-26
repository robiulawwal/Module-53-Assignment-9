import "animate.css";
import { useContext } from "react";
import { AuthContext } from "../contextData/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="my-6">
      {/* <img src={user.photoURL} alt="" /> */}
      {
       user && <div className="text-center p-2" >
       <h1 className="md:text-4xl text-2xl font-bold text-purple-700 animate__animated animate__backInUp"> Welcome back, {" "} <span className="text-pink-600 underline">{user?.displayName ?user?.displayName : user?.email}</span> !</h1>
     </div>
      }
    </div>
  );
};

export default Header;