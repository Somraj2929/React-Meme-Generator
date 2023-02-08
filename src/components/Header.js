import React from "react";
export default function Header() {
  return (
    <header className="header-main">
      <img
        src={require("../components/Trollface.png")}
        alt="troll-face"
        className="Trollface"
      />
      <h2 className="meme-heading-main">Meme Generator</h2>
      <p className="meme-para-project">React - Project 3</p>
    </header>
  );
}
