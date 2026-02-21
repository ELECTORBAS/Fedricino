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
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
