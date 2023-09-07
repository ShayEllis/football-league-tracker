import Button from '../../components/button/button'

const Modal = () => {
  return (
    <>
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#modal'>
        Launch modal
      </button>
      <div className='modal fade' id='modal' tabIndex='-1'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Modal title</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <p>Modal body text goes here.</p>
            </div>
            <div className='modal-footer'>
              <p>Footer</p>
              <Button buttonText='Save Changes' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
