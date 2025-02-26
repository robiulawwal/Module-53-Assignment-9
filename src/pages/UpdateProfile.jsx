import { useContext, useState } from "react";
import { AuthContext } from "../contextData/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
const navigate = useNavigate();
    const { user, loader, updateUser } = useContext(AuthContext); // Access user data and update function from AuthContext
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUser(profile)
        .then(() => {
            navigate("/profile")
            // ...
          }).catch((error) => {
            console.log(error.message)
          });
        console.log(name, photo)
    };

    if (loader) {
        return <div className="flex items-center min-h-[50vh]"> <span className="loading loading-spinner w-23 text-pink-500 mx-auto"></span>
        </div>
    }
    if (!user) {
        return <Navigate to="/"></Navigate>
    }
    return (
        <div className="py-10 mt-8 bg-gradient-to-r from-purple-200 via-pink-100 to-red-200 ">
            <div className="max-w-2xl mx-auto p-6">
                {/* Update Profile Title */}
                <h1 className="text-5xl font-extrabold text-indigo-600 text-center mb-10 animate-pulse">
                    Update Your Profile !
                </h1>

                {/* Update Profile Card */}
                <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-red-50  rounded-3xl shadow-2xl overflow-hidden">
                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-lg font-semibold text-gray-800">Name</label>
                            <input
                                name="name"
                                type="text"
                                defaultValue={user?.displayName}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                                placeholder="Enter your new name"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-lg font-semibold text-gray-800">Profile Photo URL</label>
                            <input
                                name="photo"
                                type="text"
                                defaultValue={user?.photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
                                placeholder="Enter a new profile photo URL"
                            />
                            {photoURL && (
                                <div className="mt-2">
                                    <img
                                        src={photoURL}
                                        alt="Preview"
                                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Error and Success Messages */}
                        {/* {error && (
                            <div className="text-red-500 text-center font-semibold">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="text-green-500 text-center font-semibold">
                                {success}
                            </div>
                        )} */}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Update Profile
                        </button>

                        {/* Back to Profile Link */}
                        <div className="text-center">
                            <Link
                                to="/profile"
                                className="text-purple-600 hover:text-purple-800 transition duration-300"
                            >
                                ← Back to Profile
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default UpdateProfile;