import Button from '../../components/button/button'

const Modal = () => {
  return (
    <>
      <button
        type='button'
        className='btn btn-sm btn-outline-secondary p-1 pt-0 pb-0'
        data-bs-toggle='modal'
        data-bs-target='#modal'>
        <i className='bi bi-pencil-square'></i>
      </button>
      <div className='modal fade' id='modal' tabIndex='-1'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Edit League Information</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='input-group'>
                  <label
                    htmlFor='platform'
                    className='input-group-text col-4'
                    aria-label='platform'>
                    Platform
                  </label>
                  <input
                    type='text'
                    id='platform'
                    className='form-control'></input>
                </div>
                <div className='input-group'>
                  <label
                    htmlFor='buy-in'
                    className='input-group-text col-4'
                    aria-label='buy in'>
                    Buy-In
                  </label>
                  <input
                    type='number'
                    min='0'
                    step='any'
                    id='buy-in'
                    className='form-control'></input>
                </div>
                <div className='input-group'>
                  <label
                    htmlFor='draft-rank'
                    className='input-group-text col-4'
                    aria-label='draft rank'>
                    Draft Rank
                  </label>
                  <input
                    type='number'
                    min='0'
                    step='any'
                    id='draft-rank'
                    className='form-control'></input>
                </div>
                <div className='input-group'>
                  <label
                    htmlFor='rank'
                    className='input-group-text col-4'
                    aria-label='rank'>
                    Rank
                  </label>
                  <input
                    type='number'
                    min='1'
                    step='1'
                    id='rank'
                    className='form-control'></input>
                </div>
                <div className='input-group'>
                  <label
                    htmlFor='playoff-teams'
                    className='input-group-text col-4'
                    aria-label='playoff teams'>
                    Playoff Teams
                  </label>
                  <input
                    type='number'
                    min='0'
                    step='1'
                    id='playoff-tems'
                    className='form-control'></input>
                </div>
                <div className='input-group'>
                  <label
                    htmlFor='payout-1'
                    className='input-group-text col-4'
                    aria-label='payout 1'>
                    Payout 1
                  </label>
                  <input
                    type='number'
                    min='0'
                    step='any'
                    id='payout-1'
                    className='form-control'></input>
                </div>
                <div className='input-group'>
                  <label
                    htmlFor='payout-2'
                    className='input-group-text col-4'
                    aria-label='payout 2'>
                    Payout 2
                  </label>
                  <input
                    type='number'
                    min='0'
                    stpe='any'
                    id='payout-2'
                    className='form-control'></input>
                </div>
                <div className='input-group'>
                  <label
                    htmlFor='payout-3'
                    className='input-group-text col-4'
                    aria-label='payout 3'>
                    Payout 3
                  </label>
                  <input
                    type='number'
                    min='0'
                    step='any'
                    id='payout-3'
                    className='form-control'></input>
                </div>
                <div className='row justify-content-center'> //alksdjf;laskjdf;l//
                                  <div className='col'>
                  <button
                    type='submit'
                    className='btn btn-outline-secondary mt-3 col-4'>
                    Save
                  </button>
                </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
