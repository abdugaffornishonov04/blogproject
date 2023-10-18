import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { Fragment, useContext } from "react";
import Cookies from "js-cookie";
import { TOKEN } from "../../../constants";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  const LogOutFunc = () => {
    Cookies.remove(TOKEN);
    navigate("/");
    location.reload();
  };

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
            <Fragment>
              <Link to="account" className="header-login-navigate">
                Account
              </Link>
              <button className="header-logout-btn" onClick={LogOutFunc}>
                Log out{" "}
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <Link to="login" className="header-login-navigate">
                Login
              </Link>
            </Fragment>
          )}
        </nav>
        <button className="header-hamburger">
          <img src="/public/header-hamburger.png" alt="menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;

// doing the resposnive 1 2 3 4 5 6

// adding log out button

// done with logout
