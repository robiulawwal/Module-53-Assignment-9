import "animate.css";

const Header = ({ user }) => {
  return (
    <div
      className="text-center p-6"
    >
      {user ? (
        <h1 className="text-3xl font-bold text-purple-700 animate__animated animate__backInUp">
          Welcome back,{" "}
          <span className="text-pink-600 underline">{user.name}</span>!
        </h1>
      ) : (
        <h1 className="text-3xl font-bold text-purple-700 animate__animated animate__backInUp">
          Welcome to <span className="text-pink-600">Lingo Bingo</span>!
        </h1>
      )}
    </div>
  );
};

export default Header;