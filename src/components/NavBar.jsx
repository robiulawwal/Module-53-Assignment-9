import { Link, NavLink } from "react-router-dom";


const NavBar = () => {

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
                            <li><NavLink to="register">Register</NavLink></li>
                            <li><NavLink to="signup">Signup</NavLink></li>
                        </ul>
                    </div>
                    <div className="text-xl md:text-4xl font-bold text-pink-600 hover:text-purple-600 transition duration-300 cursor-pointer">
                        Lingo Bingo
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        <li> <NavLink className="px-4 py-2 rounded-lg text-xl text-gray-700" to="/">Home</NavLink>  </li>
                        <li> <NavLink className="px-4 py-2 rounded-lg text-xl text-gray-700" to="/start-learning">Start-Learning</NavLink>  </li>
                        <li><NavLink className="px-4 py-2 rounded-lg text-xl text-gray-700" to="register">Register</NavLink></li>
                        <li><NavLink className="px-4 py-2 rounded-lg text-xl text-gray-700" to="signup">Signup</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                <Link to="/auth/login"><button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md">
                        Login
                    </button></Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;