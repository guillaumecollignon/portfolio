import "../styles/home.scss"

function Home() {
  return (
    <div className="home">
      <div className="skills">
        <div className="skill">
          <i className="fa-brands fa-html5"></i>
          <span className="skillName">HTML 5</span>
        </div>
        <div className="skill">
          <i class="fa-brands fa-php"></i>
          <span className="skillName">PHP</span>
        </div>
        <div className="skill">
          <i className="fa-brands fa-css3-alt"></i>
          <span className="skillName">CSS 3</span>
        </div>
        <div className="skill">
          <i className="fa-brands fa-sass"></i>
          <span className="skillName">Sass</span>
        </div>
        <div className="skill">
          <i className="fa-brands fa-react"></i>
          <span className="skillName">React</span>
        </div>
        <div className="skill">
          <i className="fa-brands fa-square-js"></i>
          <span className="skillName">JavaScript</span>
        </div>
        <div className="skill">
          <i className="fa-brands fa-node-js"></i>
          <span className="skillName">Node.Js</span>
        </div>
        <div className="skill">
          <i className="fa-solid fa-database"></i>
          <span className="skillName">MongoDB</span>
        </div>
        <div className="skill">
          <i className="fa-brands fa-python"></i>
          <span className="skillName">Python</span>
        </div>
        <div className="skill">
          <i className="fa-brands fa-square-git"></i>
          <span className="skillName">Git / GitHub</span>
        </div>
      </div>
    </div >
  )
}

export default Home
