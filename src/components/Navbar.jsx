import "./Navbar.css";
import { NavLink } from "react-router-dom";
import burger from "../assets/burger.jpg";

const Navbar = ({ logout, user }) => {
  return (
    <div className="app-header">
      <nav className="navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="navbar-brand">
              <img src={burger} alt="burgers" width="60" height="45"></img>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Burger Builder
                </NavLink>
              </li>
              <li className="nav-item">
                {
                  user ? <div onClick={logout} className="nav-link" >
                    Logout
                  </div> : <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                }

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
