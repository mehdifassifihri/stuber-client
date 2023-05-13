import React, { useState } from "react";
import "../css/login.css";
import Bus from "../assets/school-bus.png";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [eroor, setError] = useState("");
  const users = [
    {
      id: 1,
      username: "stuber@stuber.com",
      password: "123456",
      role: "PARCOWNER",
    },
    {
      id: 1,
      username: "elearaki@stuber.com",
      password: "123456",
      role: "SCHOOLOWNER",
    },
  ];
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    for (const user of users) {
      if (user.username == username && user.password == password) {
        setSuccess("Loged in");
        if (user.role == "PARCOWNER") {
          navigate("../parcowner");
        } else {
          navigate("../school");
        }
      } else {
        setError("Wrong Username or mdp !");
      }
    }
  };
  return (
    <div className="Loginpage">
      <div className="Loginbox">
        <img className="Bus" src={Bus} alt="Bus" />
        <p>StubeR</p>
        <div className="inputs">
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Username"
            type="text"
            id="fname"
            name="fname"
            className="outline-none"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            type="text"
            id="fname"
            name="fname"
            className="outline-none"
          />
          <button onClick={handleSubmit}>Log In</button>
          <a>
            <p>New user? Sign up</p>
            <br />
            <p>{eroor}</p>
            <p>{success}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
