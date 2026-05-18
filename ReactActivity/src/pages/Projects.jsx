import "../styles/Projects.css"

const Projects = () => {
  return (
    <div className="projects-div">
      <h1>
        Projects
      </h1>

      <div className="project-card">
        <div className="project-content">
          <h3>ClubNav</h3>
          <p>Platform for navigating SJSU campus clubs</p>
          <a className="github-link" href="http://google.com" target="_blank">Github ↗</a>
        </div>
        <img className="project-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s" />
      </div>

      <div className="project-card">
        <div className="project-content">
          <h3>StudentBase</h3>
          <p>Helps faculty manage student profiles</p>
          <a className="github-link" href="http://google.com" target="_blank">Github ↗</a>
        </div>
        <img className="project-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s" />
      </div>

      <div className="project-card">
        <div className="project-content">
          <h3>Startup Success Predictor</h3>
          <p>Based on random forest model</p>
          <a className="github-link" href="http://google.com" target="_blank">Github ↗</a>
        </div>
        <img className="project-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s" />
      </div>
    </div>
  )
}

export default Projects;