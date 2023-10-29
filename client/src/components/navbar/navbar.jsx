import { Link, NavLink } from 'react-router-dom'
import footballIcon from '../../assets/football-icon.svg'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md'>
      <div className='container-fluid'>
        <Link to='dashboard' className='navbar-brand'>
          <img src={footballIcon}/>
        </Link>
        <button
          className='navbar-toggler'
          data-bs-toggle='collapse'
          data-bs-target='#nav'
          aria-controls='nav'
          aria-label='Expand Navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='nav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink to='dashboard' className='nav-link' aria-current='page'>
                Dashboard
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink href='#' className='nav-link'>
                Summary
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink href='#' className='nav-link'>
                Detail
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
