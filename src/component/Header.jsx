import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-brand">
          <img src="/logo.png" alt="Logo" className="header-logo" />
          <h1 className="header-title">EarlyCaves Support</h1>
        </div>

        <nav className="header-nav">
          <a href="/">Home</a>
          <a href="/signin">Sign In</a>
        </nav>
      </div>

      <div className="header-search-row">
        <input
          type="text"
          placeholder="Search articles"
          className="header-search-input"
        />
      </div>

      <p className="header-kb-label">Knowledge Base</p>
    </header>
  );
}

export default Header;