import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import ReactSwitch from "react-switch";
import "../css/Navbar.css";

const Navbar = ({ user }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const logout = () => {
    window.open("https://blog-api-3tml.onrender.com/auth/logout", "_self");
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <header>
      <nav>
        <Link to={"/"} className="mainTitle">
          MyBlog
        </Link>

        {user === null && (
          <div className="navActions">
            <Link className="login" to={"/login"}>
              Login
            </Link>
            <Link to={"/register"}>Register</Link>
          </div>
        )}

        {user !== null && (
          <div className="currUserProfileDetails">
            <div className="currUserProfileImg">
              <img src={user.photos[0].value} alt="" />
            </div>
            <div className="currUserProfileName">
              {user.provider === "github" ? user.username : user.name.givenName}
            </div>

            <div onClick={logout} className="logout">
              Logout
            </div>
          </div>
        )}
        <label class="switch">
          <input onChange={toggleTheme} type="checkbox" />
          <span class="slider round"></span>
        </label>
      </nav>
    </header>
  );
};

export default Navbar;
