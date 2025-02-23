import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-purple-200 text-gray-900">
        <h1 className="text-9xl font-bold text-purple-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-center text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist. You can always go back to the homepage.
      </p>
        <Link
          to="/"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg transition duration-300 shadow-md"
        >
          Go Back Home
        </Link>
      </div>
    );
};

export default ErrorPage;