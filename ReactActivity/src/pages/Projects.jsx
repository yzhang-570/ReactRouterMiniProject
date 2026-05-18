import "../styles/Projects.css"

const Projects = () => {
  return (
    <div className="projects-div">
      <h1>
        Projects
      </h1>
      <div className="project-card">
        <div className="project-content">
          <h3>Project name</h3>
          <p>desc</p>
          <a href="google.com" target="_blank">Link</a>
        </div>
        <img className="project-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s" />
      </div>
            <div className="project-card">
        <div className="project-content">
          <h3>Project name</h3>
          <p>desc</p>
          <a href="google.com" target="_blank">Link</a>
        </div>
        <img className="project-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s" />
      </div>
            <div className="project-card">
        <div className="project-content">
          <h3>Project name</h3>
          <p>desc</p>
          <a href="google.com" target="_blank">Link</a>
        </div>
        <img className="project-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s" />
      </div>
    </div>
  )
}

export default Projects;