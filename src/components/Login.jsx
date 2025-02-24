import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contextData/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    const {setUser,loginUser, } = useContext(AuthContext);
    const [error, setLoginError] = useState("");
    const handleForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        if(!email){
            setLoginError("enter a valid email")
            return
        }
        if(password.length<6){
            setLoginError("enter 6 digit password")
            return
        }
        loginUser(email,password)
        .then((result) => {
            // Signed in 
            console.log(result.user)
            // ...
          })
          .catch((error) => {
            console.log(error.message)
            toast.error(error.message.replace("Firebase: ", ""))
          });
        // reset the setSuccess everyTime
        // setSuccess(false);
        // setLoginError("");

    }

    return (
        <div className="my-18">
            <h1 className="text-3xl text-purple-600 font-bold text-center mb-6">Login now!</h1>
            <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 border-2 border-pink-200 shadow-pink-200 shadow-2xl">
                <form onSubmit={handleForm}>
                    <div className="card-body"> 
                        <label className="fieldset-label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {
                            error && <p className="text-red-600">{error}</p>
                        }
                        <button className="btn btn-soft btn-secondary mt-4">Login</button>

                    </div>
                </form>
                <p className="text-center mb-8">New to this site ? <Link to="/auth/register" className="text-blue-500 font-bold">Register Now</Link></p>
            </div>
        </div>
    );
};

export default Login;