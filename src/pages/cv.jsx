import '../styles/cv.scss'
import Projects from '../components/projects.jsx'
import { Link } from 'react-router-dom'

function Cv() {
  return (
    <div className='cv'>
      <aside className='cvAside'>
        <h2>Contact</h2>
        <div className='cvContent'>
          <span className='cvContact' ><i class="fa-solid fa-envelope"></i><Link to="mailto: guillaume.collignon@outlook.fr">guillaume.collignon@outlook.fr</Link></span>
          <span className='cvContact'><i class="fa-solid fa-phone"></i>06 76 12 80 40</span>
          <span className='cvContact'><i class="fa-brands fa-linkedin"></i><Link to="https://www.linkedin.com/in/guillaume-collignon-38321522b/">https://www.linkedin.com/in/guillaume-collignon-38321522b/</Link></span>
          <span className='cvContact'><i className="fa-brands fa-square-git"></i><Link to="https://github.com/guillaumecollignon">https://github.com/guillaumecollignon</Link></span>
        </div>

        <h2>Portfolio</h2>
        <div className='cvContent'>
          <span><i class="fa-solid fa-book"></i><Link to="https://guillaumecollignon.github.io/portfolio/">https://guillaumecollignon.github.io/portfolio/</Link></span>
        </div>

        <h2>Langues</h2>
        <div className='cvContent'>
          <p>Français</p>
          <p>Anglais</p>
        </div>

        <h2>Compétences</h2>
        <div className='cvContent'>
          <div className="cvSkills">
            <div className="cvSkill">
              <i className="fa-brands fa-html5"></i>
              <span className="skillName">HTML 5</span>
            </div>
            <div className="cvSkill">
              <i class="fa-brands fa-php"></i>
              <span className="skillName">PHP</span>
            </div>
            <div className="cvSkill">
              <i className="fa-brands fa-css3-alt"></i>
              <span className="skillName">CSS 3</span>
            </div>
            <div className="cvSkill">
              <i className="fa-brands fa-sass"></i>
              <span className="skillName">SASS</span>
            </div>
            <div className="cvSkill">
              <i className="fa-brands fa-square-js"></i>
              <span className="skillName">JavaScript</span>
            </div>
            <div className="cvSkill">
              <i className="fa-brands fa-react"></i>
              <span className="skillName">REACT</span>
            </div>
            <div className="cvSkill">
              <i className="fa-brands fa-node-js"></i>
              <span className="skillName">Node.Js</span>
            </div>
            <div className="cvSkill">
              <i className="fa-solid fa-database"></i>
              <span className="skillName">MongoDB</span>
            </div>
            <div className="cvSkill">
              <i className="fa-brands fa-python"></i>
              <span className="skillName">Python</span>
            </div>
            <div className="cvSkill">
              <i className="fa-brands fa-square-git"></i>
              <span className="skillName">Git / GitHub</span>
            </div>
          </div>
        </div>

        <h2>Hobbies</h2>
        <div className='cvContent'>
          <span className="skillName"><i className="fa-brands fa-square-git"></i>Philosophie</span>
          <span className="skillName"><i class="fa-solid fa-person-running"></i>Course à pied</span>
          <span className="skillName"><i class="fa-solid fa-gamepad"></i>Game design</span>
        </div>

      </aside>
      <article className="cvArticle">
        <header className="cvHeader">
          <p>
            Récemment diplômé d'une formation de développeur web (par OpenClassrooms) où j'ai pu travailler avec les langages HTML5/CSS3/Sass, Javascript et Typescript, SQL, mais également avec les frameworks React et Angular, je suis actuellement en recherche d'un poste de développeur web.
          </p>
          <p>
            J'ai réalisé, lors de ma formation, plusieurs projets professionnalisant qui , j'en suis convaincu, me permettront d'être opérationnel de suite. J'ai hâte de pouvoir apporter ma contribution au sein d'une équipe de développement et de mettre mes compétences au service d'une entreprise.
          </p>
        </header>
        <h2>Profil</h2>
        <div className='tags'>
          <span className='tag'>Minimaliste</span>
          <span className='tag'>Adaptatif</span>
          <span className='tag'>Organisé</span>
        </div>
        <h2>Projets</h2>
        <Projects />

      </article>
    </div>
  )
}

export default Cv
