import {  useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const ForgotPassword = () => {
    const [error, setError] = useState("");
    const location = useLocation();
console.log(location)


    const handleResetPassword = (e) => {
        const email = e.target.email.value;
        e.preventDefault();
        if (!email) {
            setError("Please enter your email address.");
            return;
        }

        // Send a password reset email
        sendPasswordResetEmail(auth, email)
            .then(() => {
                window.location.href = "https://mail.google.com";
            })
            .catch((error) => {
                setError(error.message?.split('(')[1].split(')')[0]);
            });
    };

    return (
        <div className="my-18">
            <h1 className="text-3xl text-purple-500 font-bold text-center mb-6">Forgot Password</h1>
            <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 border-2 border-pink-200 shadow-pink-200 shadow-2xl">
                <form onSubmit={handleResetPassword}>
                    <div className="card-body">
                        <label className="fieldset-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="Email"
                          defaultValue={location?.state && location.state}
                            required
                        />
                        {error && <p className="text-red-600">{error}</p>}
                        <button type="submit" className="btn btn-soft btn-secondary mt-4">
                            Reset Password
                        </button>
                    </div>
                </form>

                <p className="text-center mb-4">
                    Remember your password?{" "}
                    <Link to="/auth/login" className="text-blue-500 font-bold">
                        Login Now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;