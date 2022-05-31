import './styles/nav-list.css'
import { Link } from 'react-router-dom'

const NavList = () => {
  return (
    <div className='list-wrapper'>
        <ul className="nav-list">

          <li className="nav-link-list">
            <Link className = 'nav-link' to = '/shop'>Shop</Link>
          </li>

          <li className="nav-link-list">
            <Link className = 'nav-link' to = '/sign-in'>Sign In </Link>
          </li>

          <li className="nav-link-list">
            <Link className = 'nav-link' to = '/'>Shop</Link>
          </li>

        </ul>
        <div className="cart" />
    </div>
  )
}

export default NavList