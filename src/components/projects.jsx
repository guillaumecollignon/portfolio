import '../styles/projects.scss'
import Project from './project.jsx'



function Projects() {
    return (
        <div className='projects'>
            <Project img='guigui.png' title='Portfolio' date='Mars 2023' description='Création de mon portfolio sur une Single Page Application créée avec React.' />
            <Project img='cesspool.png' title='Cesspool' date='Octobre 2022' description='Création de mon premier jeu indépendant.' link='https://store.steampowered.com/app/1394030/' />
        </div>
    )
}

export default Projects
