import { Link } from 'react-router-dom'
import "../styles/header.scss"

function Header() {
  return (
    <header className='header'>
      <Link to="/" className='headerLeft'>
        <div className='headerPic'>
          <img src="../assets/guigui.png" alt='eafefaf'></img>
        </div>
        <div className='headerName'>
          <h1>Guillaume Collignon</h1>
          <p>Développeur</p>
        </div>
      </Link>

      <nav className='headerLinks'>
        <Link className='headerLink' to="/portfolio">Portefolio</Link>
        <Link className='headerLink' to="/cv">CV</Link>
        <Link className='headerLink' to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
