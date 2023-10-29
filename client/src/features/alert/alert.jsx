// Can use javascript to generate alerts - see bootstrap docs

const Alert = () => {
  return (
    <div className='alert alert-success alert-dismissible fade show' role='alert'>
      <h4 className='alert-heading'>Alert!</h4>
      <a href='#' className='alert-link'>More information</a>
      <button className='btn-close' aria-label='close' data-bs-dismiss='alert'></button>
    </div>
  )
}

export default Alert