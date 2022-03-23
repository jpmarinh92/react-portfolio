import React, { useState } from "react";

function Portfolio() {
  const mainProject = useState(
    {
      name: 'talkie-box',
      repo: 'https://github.com/wcastellan/talkie-box',
      deploy: 'https://protected-forest-66303.herokuapp.com/',
      photo: 'main.PNG'
    }
  )
  
  const [projectsTop] = useState([
    {
      name: 'carbnb',
      repo: 'https://github.com/jpmarinh92/carbnb',
      deploy: 'https://guarded-reaches-67644.herokuapp.com/',
      photo: 'carbnb.PNG'
    },
    {
      name: 'LyricLover',
      repo: 'https://github.com/Osamadahnoun/LyricLover',
      deploy: 'https://osamadahnoun.github.io/LyricLover/',
      photo: 'lyriclover.PNG'
    },
    {
      name: 'Deep Thoughts',
      repo: 'https://github.com/jpmarinh92/deep-thoughts',
      deploy: 'https://limitless-gorge-64250.herokuapp.com/',
      photo: 'deepthoughts.PNG'
    },
  ])

  const [projectsBottom] = useState([
    {
      name: 'Git It Done',
      repo: 'https://github.com/jpmarinh92/git-it-done',
      deploy: 'https://jpmarinh92.github.io/git-it-done/',
      photo: 'gitItDone.PNG'
    },
    {
      name: 'Budget Tracker',
      repo: 'https://github.com/jpmarinh92/budget-tracker-paw',
      deploy: 'https://floating-citadel-44320.herokuapp.com/',
      photo: 'budgettracker.PNG'
    },
    {
      name: 'Tech Blog',
      repo: 'https://github.com/jpmarinh92/tech-blog',
      deploy: 'https://floating-journey-56402.herokuapp.com/',
      photo: 'techblog.PNG'
    },
  ])

  return (
    
    <section id="my-work" className="my-work">
      <h2>MY WORK</h2>
      <div className="main card">
        <div style={{height: "100%"}}>
          <img 
            src={require(`../../assets/images/${mainProject[0].photo}`)}
            alt={mainProject[0].name} 
            key={mainProject[0].name}
            style={{height: "100%", position: "absolute"} }/>
          <h4>{mainProject[0].name}</h4>
        </div>
        
        <div className="links">
          <a href={`${mainProject[0].deploy}`}>
            <h4>{mainProject[0].name} deployment</h4>
          </a>
                
          <a href={`${mainProject[0].repo}`} className="bottomLink">
            <h4 className="bottomLink">{mainProject[0].name} repository</h4>
          </a>
        </div>
      </div>
      
      <div className="cards">
        {projectsTop.map((project, i) => (
          <div className={`card card${i+1}`}>
            <div style={{height: "100%"}}>
              <img 
                src={require(`../../assets/images/${project.photo}`)} 
                alt={project.name} 
                key={project.name}
                style={{height: "100%", position: "absolute"} }/>
              <div className="links">
                <a href={`${project.deploy}`}>
                  <h4>{project.name} deployment</h4>
                </a>
                
                <a href={`${project.repo}`} className="bottomLink">
                  <h4 className="bottomLink">{project.name} repository</h4>
                </a>
            </div>
            </div>
          </div>
        ))} 
      </div>
      
      <div className="cards">
        {projectsBottom.map((project, i) => (
          <div className={`card card${i+4}`}>
            <div style={{height: "100%"}}>
              <img 
                src={require(`../../assets/images/${project.photo}`)} 
                alt={project.name} 
                key={project.name}
                style={{height: "100%", position: "absolute"} }/>
              <div className="links">
                <a href={`${project.deploy}`}>
                  <h4>{project.name} deployment</h4>
                </a>
                
                <a href={`${project.repo}`} className="bottomLink">
                  <h4 className="bottomLink">{project.name} repository</h4>
                </a>
            </div>
            </div>
          </div>
        ))} 
      </div>
    </section>
  )
}

export default Portfolio