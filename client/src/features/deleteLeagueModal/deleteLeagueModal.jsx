import server from '../../utils/server'

const DeleteLeagueModal = ({id, leagueName, handleLeagueRemove}) => {

  return (
    <>
      <button
        type='button'
        className='btn btn-sm btn-outline-secondary p-1 pt-0 pb-0 ms-1'
        data-bs-toggle='modal'
        data-bs-target={`#modal-delete-${id}`}>
        <i className='bi bi-trash3'></i>
      </button>
      <div
        className='modal fade'
        id={`modal-delete-${id}`}
        tabIndex='-1'
        aria-labelledby='deleteLeagueModal'
        aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>{`Delete ${leagueName}?`}</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-auto'>
                  <button type='submit' className='btn btn-outline-danger' data-bs-dismiss='modal' onClick={() => handleLeagueRemove(id)}>
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteLeagueModal
