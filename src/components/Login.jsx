import { useState } from "react";
import { Navigate } from "react-router-dom";
import "../css/Form.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");

  async function login(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (response.status === 200) {
      setRedirect("home");
    } else {
      alert("Wrong Credential");
    }
  }

  function google() {
    window.open("http://localhost:4000/auth/google", "_self");
  }

  function github() {
    window.open("http://localhost:4000/auth/github", "_self");
  }

  if (redirect === "home") {
    return <Navigate to={"/"} />;
  }

  if (redirect === "register") {
    return <Navigate to={"/register"} />;
  }

  return (
    <div className="Section">
      <div className="SectionCard">
        <form onSubmit={login}>
          <div className="SectionProfImgDiv">
            <img
              className="SectionProfImg"
              src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
              alt=""
            />
          </div>

          <div className="SectionInputIcons">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>

          <div className="SectionInputIcons">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="forgotPwd">Forgot Password?</div>
          <button className="SectionBtn">Login</button>
        </form>

        <div>
          <div className="SectionOr">
            <span>Or Login With</span>
          </div>
          <div className="SectionSocialLoginBtns">
            <button className="googleBtn" onClick={google}>
              <i className="fa-brands fa-google"></i>
              <p>Sign In With Google</p>
            </button>
            <button className="githubBtn" onClick={github}>
              <i className="fa-brands fa-github"></i>
              <p>Sign In With Github</p>
            </button>
          </div>
          <div className="SectionAccount">
            Don't have an account?
            <button
              onClick={() => {
                setRedirect("register");
              }}
            >
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
