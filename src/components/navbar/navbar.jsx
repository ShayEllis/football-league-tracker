const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md'>
      <div className='container-fluid'>
        <a href='#' className='navbar-brand'>
          Brand (img?)
        </a>
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
              <a href='#' className='nav-link active' aria-current='page'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                One
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                Two
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
