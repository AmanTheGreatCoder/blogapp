import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./Layout/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");
  console.log("Theme in App JSX " + theme);
  useEffect(() => {
    fetch("http://localhost:4000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then(async (response) => {
        if (response.status === 200) {
          const jsonData = await response.json();
          console.log("JSON DATA IN APP JSX " + JSON.stringify(jsonData.user));
          setUser(jsonData.user);
        } else if (response.status === 401) {
          // return response.json("Not Authorized");
          console.log("NOT AUTHORIZED");
        }
      })
      .catch((err) => {
        throw new Error("Error No Response Recieved");
      });
  }, [user]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
