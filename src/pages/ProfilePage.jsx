import { useContext } from "react";
import { AuthContext } from "../contextData/AuthProvider";
import { Link } from "react-router-dom";

const ProfilePage = () => {
    const { user } = useContext(AuthContext); // Access user data from AuthContext
    return (
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-10 mt-8">
            <div className="max-w-4xl mx-auto p-6">
                {/* Welcome Title with User Name */}
                <h1 className="text-5xl font-extrabold text-white text-center mb-10 animate-pulse">
                    Welcome to profile, {user?.displayName ? user?.displayName : user?.email}! 👋
                </h1>

                {/* Profile Information Card */}
                <div className="bg-white/80 rounded-3xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center p-8 space-y-6 md:space-y-0 md:space-x-8 ">
                        {/* User Image */}
                        <div className="relative w-32 h-32 md:w-48 md:h-48">
                            <img
                                src={user?.photoURL}
                                alt="User profile"
                                className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg transform transition-all hover:scale-105 duration-300"
                            />
                        </div>
                        {/* User Details */}
                        <div className="flex-1 text-center md:text-left">
                            {/* User Name */}
                            <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                                {user?.displayName || "UserName: N/A"}
                            </p>
                            {
                                !user.displayName && <span className="text-red-400/70 text-xs">Username Missing in Email.Click to update now.
                                </span>
                            }
                            {/* User Email */}
                            <p className="text-lg text-gray-600 mb-4">
                                📧 {user?.email || "N/A"}
                            </p>

                            {/* Update Button */}
                            <Link
                                to="/profile/update-profile"
                                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-110"
                            >
                                ✏️ Update Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;