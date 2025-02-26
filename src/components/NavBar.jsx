import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contextData/AuthProvider";


const NavBar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    return (

        <div className="bg-base-100">
            <nav className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li> <NavLink to="/">Home</NavLink>  </li>
                            <li> <NavLink to="/start-learning">Start-Learning</NavLink>  </li>
                            <li><NavLink to="/tutorials">Tutorials</NavLink></li>
                            {
                                user && <li><NavLink to="/profile">my-profile</NavLink></li>
                            }
                        </ul>
                    </div>


                    {/* Custom Logo */}
                    <div className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64"
                            className="h-12 w-12 text-purple-600"
                        >
                            {/* Gradient Background */}
                            <defs>
                                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: "#9333EA", stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: "#DB2777", stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>

                            {/* Circle */}
                            <circle cx="32" cy="32" r="30" fill="url(#logoGradient)" />

                            {/* Letter "L" */}
                            <path
                                d="M20 20v24h8V20h-8z"
                                fill="#FFFFFF"
                            />
                            {/* Letter "B" */}
                            <path
                                d="M36 20v24h8c4.418 0 8-3.582 8-8s-3.582-8-8-8h-8z"
                                fill="#FFFFFF"
                            />
                        </svg>

                        {/* Animated Gradient Text */}
                        <div className="text-xl md:flex hidden md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent animate-gradient">
                            Lingo Bingo
                        </div>
                    </div>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        <li> <NavLink className="px-4 py-2 rounded-lg text-xl text-gray-700" to="/">Home</NavLink>  </li>
                        <li> <NavLink className="px-4 py-2 rounded-lg text-xl text-gray-700" to="/start-learning">Start-Learning</NavLink>  </li>
                        <li><NavLink className="px-4 py-2 rounded-lg text-xl text-gray-700" to="/tutorials">Tutorials</NavLink></li>
                        {
                            user && <li><NavLink className="px-4 py-2 rounded-lg text-xl text-gray-700" to="/profile">my-profile</NavLink></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end text-xl">
                    {
                        user ? <button onClick={logOutUser} className="bg-gradient-to-t from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md">
                            Logout
                        </button> : <Link to="/auth/login"><button className="bg-gradient-to-b from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg transition duration-300">
                            Login
                        </button></Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default NavBar;