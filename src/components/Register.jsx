import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contextData/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
    const {user,setUser,createNewUser,} = useContext(AuthContext);
    console.log(user)
    const [errorMessage, setErrorMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(true);
const navigate = useNavigate()

    const handleSignup = (e) => {
        let regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        setErrorMessage(null)
        if (!email) {
            setErrorMessage("enter valid email");
            return;
        }
        if (!regex.test(password)) {
            setErrorMessage("Use Uppercase lowercase and 6 digit")
            return;
        }
        createNewUser(email,password)
        .then((result) => {
            // Signed up 
            console.log(result)
            setUser(result.user);
            navigate("/")
            // ...
          })
          .catch((error) => {
            console.log(error.message)
            toast.error(error.message.replace("Firebase: ", ""))
            // ..
          });

    }

    return (
        // <div className="flex flex-col items-center my-20 border-2 py-16 border-pink-200 shadow-pink-200 shadow-2xl max-w-xl mx-auto">
        //     <h1 className="text-3xl text-blue-500 font-bold text-center mb-6">Register now!</h1>
        //     <form onSubmit={handleSignup} className="space-y-5">
        //         <label className="input validator my-5">
        //             <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
        //             <input name="email" type="email" placeholder="email" required />
        //         </label>
        //         <div className="validator-hint hidden">Enter valid email address</div>

        //         {
        //             errorMessage && <p className="mt-3 text-red-500/70 text-xs w-1/2">{errorMessage}</p>

        //         }
        //         <label className="fieldset-label">
        //             <input type="checkbox" name="terms" className="checkbox input-info" />
        //             accept terms and conditions
        //         </label>

        //         <button className="w-[20rem] btn btn-info btn-soft">Signup</button>
        //     </form>

        //     <p className="mt-4">Already have an account? <Link to="/auth/login" className="text-blue-500 font-bold m-3">Login here</Link> </p>
        // </div>
        <div className="my-18">
            <h1 className="text-3xl text-blue-600 font-bold text-center mb-6">Register now!</h1>
            <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 border-2 border-blue-200 shadow-blue-200 shadow-2xl">
                <form onSubmit={handleSignup}>
                    <div className="card-body">
                        <label className="fieldset-label">UserName</label>
                        <input type="text" name="name" className="input" placeholder="user name" />
                        <label className="fieldset-label">Photo url</label>
                        <input type="text" name="photo" className="input" placeholder="user photo" />
                        <label className="fieldset-label">Email</label>
                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                            <input name="email" type="email" placeholder="email" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                        <label className="fieldset-label">Password</label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input name="password" placeholder="password" type={showPassword ? "password" : "text"} className="grow" />
                            {
                                showPassword ?
                                    <FaRegEyeSlash className="text-lg hover:text-gray-300 cursor-pointer" onClick={() => setShowPassword(!showPassword)}></FaRegEyeSlash>
                                    :
                                    <FaRegEye className="text-lg hover:text-gray-300 cursor-pointer" onClick={() => setShowPassword(!showPassword)}></FaRegEye>
                            }
                        </label>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {
                            errorMessage && <p className="text-red-600">{errorMessage}</p>
                        }
                        <button className="btn btn-soft btn-info mt-4">Register</button>

                    </div>
                </form>
                <p className="text-center mb-8">New to this site ? <Link to="/auth/Login" className="text-pink-500 font-bold">Login Now</Link></p>
            </div>
        </div>
    );
};

export default Register;