import React from "react";

function Hero() {
  return(
    <section className="hero">
      <h2>Full Stack Developer</h2>
      <h3>Welcome to my portfolio!</h3>
      <img src={require("../../assets/images/photoIcon.png")} alt="head shot of the creator of the website"/>
    </section> 
  )
}

export default Hero