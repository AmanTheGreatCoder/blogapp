import { useState } from "react";
import { Navigate } from "react-router-dom";
import "../css/Form.css";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");

  async function register(event) {
    event.preventDefault();
    const response = await fetch("https://blog-api-3tml.onrender.com/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration Successfull");
    } else {
      alert("Registration Failed");
    }
  }

  function google() {
    window.open("https://blog-api-3tml.onrender.com/auth/google", "_self");
  }

  function github() {
    window.open("https://blog-api-3tml.onrender.com/auth/github", "_self");
  }

  if (redirect === "login") {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="Section">
      <div className="SectionCard">
        <form onSubmit={register}>
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
          <button className="SectionBtn">Register</button>
        </form>

        <div>
          <div className="SectionOr">
            <span>Or Register With</span>
          </div>
          <div className="SectionSocialLoginBtns">
            <button className="googleBtn" onClick={google}>
              <i className="fa-brands fa-google"></i>
              <p>Sign Up With Google</p>
            </button>
            <button className="githubBtn" onClick={github}>
              <i className="fa-brands fa-github"></i>
              <p>Sign Up With Github</p>
            </button>
          </div>
          <div className="SectionAccount">
            Already have an account?
            <button
              onClick={() => {
                setRedirect("login");
              }}
            >
              Log In Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
