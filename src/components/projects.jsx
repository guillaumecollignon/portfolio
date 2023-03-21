import '../styles/projects.scss'
import Project from './project.jsx'
import guigui from "../assets/guigui.png"
import cesspool from "../assets/cesspool.png"



function Projects() {
    return (
        <div className='projects'>
            <Project img={guigui} title='Portfolio' date='Mars 2023' description='Création de mon portfolio sur une Single Page Application créée avec React.' />
            <Project img={cesspool} title='Cesspool' date='Octobre 2022' description='Création de mon premier jeu indépendant.' link='https://store.steampowered.com/app/1394030/' />
        </div>
    )
}

export default Projects
