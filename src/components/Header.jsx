import React from "react";
import "../index.css";

export default function Header() {
  return (
    <nav className="header">
      <div className="logo-container">
        <img className="logo-img" src="./images/troll-face.png" alt="" />
        <h2 className="logo-name">Meme Generator</h2>
      </div>
    </nav>
  );
}
