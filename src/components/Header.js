import React from "react";
import troll from "../images/Troll Face.png";
import "./style.css";
export default function Header() {
  return (
    <div className="header">
      <img src={troll} alt="" className="header--image"></img>
      <h2 className="header--tit">Meme Generator</h2>
    </div>
  );
}
