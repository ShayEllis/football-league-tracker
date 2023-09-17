import useForm from "../../customHooks/useForm"

const AddLeagueModal = () => {
  const { handleFormSubmit } = useForm()

  return(
    <>
    <button
      type='button'
      className='btn btn-sm btn-outline-secondary p-1 pt-0 pb-0'
      data-bs-toggle='modal'
      data-bs-target='#modal-add'>
      <i className="bi bi-plus-square"></i>
    </button>
    <div className='modal fade' id='modal-add' tabIndex='-1'>
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Add New League</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <form className='w-75 m-auto' onSubmit={handleFormSubmit}>
            <div className='input-group'>
                <label
                  htmlFor='league-name'
                  className='input-group-text ps-2 col-4'
                  aria-label='league name'>
                  League Name
                </label>
                <input
                  type='text'
                  id='league-name'
                  name='league-name'
                  className='form-control'></input>
              </div>
              <div className='input-group'>
                <label
                  htmlFor='team-name'
                  className='input-group-text ps-2 col-4'
                  aria-label='team name'>
                  Team Name
                </label>
                <input
                  type='text'
                  id='team-name'
                  name='team-name'
                  className='form-control'></input>
              </div>
              <div className='input-group'>
                <label
                  htmlFor='team-count'
                  className='input-group-text ps-2 col-4'
                  aria-label='team count'>
                  Team Count
                </label>
                <input
                  type='number'
                  min='0'
                  step='any'
                  id='team-count'
                  name='team-count'
                  className='form-control'></input>
              </div>
              <div className='input-group'>
                <label
                  htmlFor='platform'
                  className='input-group-text ps-2 col-4'
                  aria-label='platform'>
                  Platform
                </label>
                <input
                  type='text'
                  id='platform'
                  name='platform'
                  className='form-control'></input>
              </div>
              <div className='input-group'>
                <label
                  htmlFor='draft-date'
                  className='input-group-text ps-2 col-4'
                  aria-label='draft date'>
                  Draft Date
                </label>
                <input
                  type='date'
                  id='draft-date'
                  name='draft-date'
                  className='form-control'></input>
              </div>
              <div className='input-group'>
                <label
                  htmlFor='buy-in'
                  className='input-group-text ps-2 col-4'
                  aria-label='buy in'>
                  Buy-In
                </label>
                <input
                  type='number'
                  min='0'
                  step='any'
                  id='buy-in'
                  name='buy-in'
                  className='form-control'></input>
              </div>
              <div className='input-group'>
                <label
                  htmlFor='draft-rank'
                  className='input-group-text ps-2 col-4'
                  aria-label='draft rank'>
                  Draft Rank
                </label>
                <input
                  type='number'
                  min='0'
                  step='any'
                  id='draft-rank'
                  name='draft-rank'
                  className='form-control'></input>
              </div>
              <div className='input-group'>
                <label
                  htmlFor='team-rank'
                  className='input-group-text ps-2 col-4'
                  aria-label='team rank'>
                  Team Rank
                </label>
                <input
                  type='number'
                  min='1'
                  step='1'
                  id='team-rank'
                  name='team-rank'
                  className='form-control'></input>
              </div>
              <div className='input-group'>
                <label
                  htmlFor='playoff-teams'
                  className='input-group-text ps-2 col-4'
                  aria-label='playoff teams'>
                  Playoff Teams
                </label>
                <input
                  type='number'
                  min='0'
                  step='1'
                  id='playoff-teams'
                  name='playoff-teams'
                  className='form-control'></input>
              </div>
              <div className='input-group'>
                <label
                  htmlFor='payout-1'
                  className='input-group-text ps-2 col-4'
                  aria-label='payout 1'>
                  Payout 1
                </label>
                <input
                  type='number'
                  min='0'
                  step='any'
                  id='payout-1'
                  name='payout-1'
                  className='form-control'></input>
              </div>
              <div className='input-group'>
                <label
                  htmlFor='payout-2'
                  className='input-group-text ps-2 col-4'
                  aria-label='payout 2'>
                  Payout 2
                </label>
                <input
                  type='number'
                  min='0'
                  stpe='any'
                  id='payout-2'
                  name='payout-2'
                  className='form-control'></input>
              </div>
              <div className='input-group'>
                <label
                  htmlFor='payout-3'
                  className='input-group-text ps-2 col-4'
                  aria-label='payout 3'>
                  Payout 3
                </label>
                <input
                  type='number'
                  min='0'
                  step='any'
                  id='payout-3'
                  name='payout-3'
                  className='form-control'></input>
              </div>
              <div className='row justify-content-center align-items-center'>
                <div className='col-auto'>
                  <button
                    type='submit'
                    className='btn btn-outline-secondary mt-3 col-auto'>
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

export default AddLeagueModal