import React from "react";
import HeaderHome from "./HeaderHome/HeaderHome";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <HeaderHome/>
      <div className="lander">
        <h1 className="title-font">Next Action App</h1>
        <p className="text-muted">A GTD-based productivity app.</p>
      </div>
    </div>
  );
}