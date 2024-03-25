import React from "react";
import "./App.css";
import IronMan from "./ironman.jpg";
import Integration from "./integration";
import { Checkbox, Input } from "antd";
const MyWebsite = () => {
  const HandlePassword = () => {
    const password = document.getElementById("passwd");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src={IronMan} alt="IronMan" />
          </div>
          <div class="card-back">
            <p>
              Iron Man is one of the marvel Characters which is loved by most
              people around the globe.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div style={{ width: "20%" }}>
        <Input type="password" id="passwd" />
        <Checkbox onClick={HandlePassword}>Show Password</Checkbox>
      </div>
      <Integration />
    </div>
  );
};

export default MyWebsite;
