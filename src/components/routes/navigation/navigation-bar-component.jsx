// import icon
import { Link, Outlet } from 'react-router-dom'
import NavList from './navigation-list-component'
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg'
import './styles/nav-bar.css'

const NavBar = () => {
  return (
      <div className = 'nav-bar-div'>
        <nav className='nav-bar'>

          <Link className="nav-icon" to='/'>
            <CrownLogo className= 'logo'/>
          </Link>

          <NavList/>

        </nav>
        <Outlet/>
      </div> 
  )
}

export default NavBar