import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        {/* to not send req to the server */}
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
