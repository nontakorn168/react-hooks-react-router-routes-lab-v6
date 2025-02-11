import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className="nav-link"
        href="/"
        >
        Home
      </NavLink>
      <NavLink
        to="/directors"
        className="nav-link"
        href="/directors"
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        className="nav-link"
        href="/actors"
      >
        Actors
      </NavLink>
    </nav>
    );
};

export default NavBar;
