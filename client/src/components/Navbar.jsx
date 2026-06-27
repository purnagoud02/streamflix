import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        🎬 <span>StreamFlix</span>
      </div>

      <nav className="nav-links">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>

        <NavLink to="/subscription" className="nav-item">
          Subscription 👑
        </NavLink>

        <NavLink to="/watchlist" className="nav-item">
          Watchlist
        </NavLink>

        <NavLink to="/profile" className="nav-item">
          Profile
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;