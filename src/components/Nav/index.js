import React from "react";

function Nav(props) {
  const {
    setCurrentTab
  } = props
  return (
    <header className="header">
      <h1>Juan Pablo Marin Higuita</h1>
      <nav className="navBar">
        <ul>
          <a href="#about" onClick={() => setCurrentTab('About')}>About Me</a>
        </ul>
        <ul>
          <a href="#portfolio" onClick={() => setCurrentTab('Portfolio')}>My Work</a>
        </ul>
        <ul>
          <a href="#contact" onClick={() => setCurrentTab('Contact')}>Contact Me</a>
        </ul>
        <ul>
          <a href="#resume" onClick={() => setCurrentTab('Resume')}>Resume</a>
        </ul>
      </nav>
    </header>
  )
}

export default Nav