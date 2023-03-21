import '../styles/projects.scss'
import { Link } from 'react-router-dom'

function Project(props) {

    let link = props.link

    return (
        <Link className='project' to={link} >
            <div className='projectImg'>
                <img src={props.img} alt=''></img>
            </div>
            <div className='projectContent'>
                <h4>{props.title}</h4>
                <h5>{props.date}</h5>
                <p>{props.description}</p>
            </div>

        </Link>
    )
}

export default Project
