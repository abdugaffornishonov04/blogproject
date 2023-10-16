import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";

const Header = () => {
  const {isAuthenticated} = useContext(AuthContext)
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-logo">
          {isAuthenticated ? (
            <Link to="myposts" className="header-logo-text">
              <p className="header-logo-text">My blogs</p>
            </Link>
          ) : (
            <Link to="/" className="header-logo-text">
              <img src="/header-logo.svg" alt="header logo" />
            </Link>
          )}
        </div>

        <nav className="header-navbar">
          <ul>
            <li>
              <NavLink className="header-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="header-link" to="allposts">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink className="header-link" to="about">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="header-link" to="register">
                Register
              </NavLink>
            </li>
          </ul>

          {isAuthenticated ? (
            <Link to="account" className="header-login-navigate">
              Account
            </Link>
          ) : (
            <Link to="login" className="header-login-navigate">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
