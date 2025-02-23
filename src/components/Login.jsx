import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [error, setLoginError] = useState("");
    const emailRef = useRef();
    const handleForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        if(!email){
            setLoginError("enter a valid email")
        }
        if(password.length<6){
            setLoginError("enter 6 digit password")
        }
        // reset the setSuccess everyTime
        // setSuccess(false);
        // setLoginError("");

    }
console.log(emailRef)
    return (
        <div className="my-18">
            <h1 className="text-3xl text-purple-600 font-bold text-center mb-6">Login now!</h1>
            <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 border-2 border-pink-200 shadow-pink-200 shadow-2xl">
                <form onSubmit={handleForm}>
                    <div className="card-body"> 
                        <label className="fieldset-label">Email</label>
                        <input type="email" ref={emailRef} name="email" className="input" placeholder="Email" />
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