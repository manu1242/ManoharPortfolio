// Loading.js
import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="welcome-text">Welcome</p> {/* Add Welcome text here */}
      <p>Loading...</p> {/* Keep Loading text */}
    </div>
  );
};

export default Loading;

