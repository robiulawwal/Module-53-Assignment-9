import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contextData/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    const { loginWIthGoogle, loginUser, } = useContext(AuthContext);
    const [error, setLoginError] = useState("");
    const [email, setEmail] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const handleForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email) {
            setLoginError("enter a valid email")
            return
        }
        if (password.length < 6) {
            setLoginError("enter 6 digit password")
            return
        }
        loginUser(email, password)
            .then(() => {
                // Signed in 
                navigate(location?.state ? location.state : "/")
                // ...
            })
            .catch((error) => {
                toast.error(error.message.replace("Firebase: ", ""));
                setLoginError("invalid username or password")
            });
    }

    const loginGoogle = () => {
        loginWIthGoogle()
            .then(() => {
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                toast.error(error.message.split('(')[1].split(')')[0])
            });
    }
    return (
        <div className="my-18">
            <h1 className="text-3xl text-purple-500 font-bold text-center mb-6">Login now!</h1>
            <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 border-2 border-pink-200 shadow-pink-200 shadow-2xl">
                <form onSubmit={handleForm}>
                    <div className="card-body">
                        <label className="fieldset-label">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div><Link state={email} to="/auth/forgot-password"><p className="hover:underline">Forgot password?</p></Link></div>
                        {
                            error && <p className="text-red-600">{error}</p>
                        }
                        <button className="btn btn-soft btn-secondary mt-4">Login</button>


                    </div>
                </form>

                <p className="text-center mb-4">New to this site ? <Link to="/auth/register" className="text-blue-500 font-bold">Register Now</Link></p>

                <button onClick={loginGoogle} className="btn w-fit mx-auto mb-4 bg-white text-gray-500 border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Login;