import React from "react";

function Resume() {
  return (
    <div className="cv">
      <div className="downloadResume">
        <a
          href={require("../../assets/files/Juan_Pablo_Marin_CV.pdf")}
          download
        >
          Download Resume
        </a>
      </div>
      <div className="resume">
        
        <div className="container frontend">
          <h2>Front End</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Flexbox</li> 
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
          </ul>
        </div>

        <div className="container backend">
          <h2>Back End</h2>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQl</li> 
          </ul>
        </div>

        <div className="container otherSkills">
          <h2>Other Skills</h2>
          <ul>
            <li>Bilingual</li>
            <li>Methodical</li>
            <li>Team Player</li>
            <li>Hardworker</li>
            <li>Flexible</li>
            <li>Work Ethic</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume