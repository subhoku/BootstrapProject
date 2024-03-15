// LoginComponent.js

import React, { useState } from "react";
import "./LoginComponent.css"; // Import the CSS file for styling

function LoginComponent() {
  const [theme, setTheme] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can validate the input fields and perform login actions
  };

  function handleThemeChange(e) {
    if (e.target.checked) {
      setTheme({
        backgroundColor: "black",
        color: "white",
        width: "350px",
      });
    } else {
      setTheme({
        backgroundColor: "white",
        color: "black",
      });
    }
  }

  // Simulated function to check if email is already taken
  function isEmailTaken(email) {
    // Replace with your actual logic (e.g., querying a database)
    const existingEmails = ["sudarshan@gmail.com", "sid@gmail.com"];
    return existingEmails.includes(email);
  }

  return (
    <div className="login-form" style={theme}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <div className="form-switch">
          For Dark Mode Click here
          <input
            type="checkbox"
            onClick={handleThemeChange}
            className="form-control"
          />
        </div>
        {/* Display error message if email is already taken */}
        {isEmailTaken("sudarshan@gmail.com") && (
          <p style={{ color: "red" }}>Email already taken</p>
        )}
      </form>
    </div>
  );
}

export default LoginComponent;
