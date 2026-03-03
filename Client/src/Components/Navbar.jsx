import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="" alt="logo" />
        <Link to="/">Fabricino</Link>
      </div>
      <div className="links">
        <Link to="/menu">Menu</Link>
        <a href="#About">About us</a>
        <a href="#Contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
