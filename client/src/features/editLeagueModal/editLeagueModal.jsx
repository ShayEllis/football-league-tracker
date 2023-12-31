import { useReducer, useRef } from 'react'
import {
  editLeagueModalReducer,
  stateInitializer,
} from './editLeagueModalReducer'

const EditLeagueModal = ({ cardData, handleLeagueEditSubmit }) => {
  const exitModalRef = useRef()
  const [state, dispatch] = useReducer(
    editLeagueModalReducer,
    cardData,
    stateInitializer
  )

  const handleInputChange = (event) => {
    dispatch({
      type: 'input-change',
      payload: { inputName: event.target.name, value: event.target.value },
    })
  }

  return (
    <>
      <button
        type='button'
        className='btn btn-sm btn-outline-secondary p-1 pt-0 pb-0'
        data-bs-toggle='modal'
        data-bs-target={`#modal-edit-${state.id}`}>
        <i className='bi bi-pencil-square'></i>
      </button>
      <div className='modal fade' id={`modal-edit-${state.id}`} tabIndex='-1'>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>{`Edit ${state.leagueName}`}</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                ref={exitModalRef}
                aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <form className='w-75 m-auto' onSubmit={(event) => handleLeagueEditSubmit(event, state, exitModalRef)}>
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
                    className='form-control'
                    value={state.teamName}
                    onChange={handleInputChange}
                    required></input>
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
                    className='form-control'
                    value={state.teamCount}
                    onChange={handleInputChange}
                    required></input>
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
                    value={state.platform}
                    onChange={handleInputChange}
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
                    value={state.draftDate}
                    onChange={handleInputChange}
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
                    value={state.buyIn}
                    onChange={handleInputChange}
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
                    step='1'
                    id='draft-rank'
                    name='draft-rank'
                    value={state.draftRank}
                    onChange={handleInputChange}
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
                    value={state.teamRank}
                    onChange={handleInputChange}
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
                    value={state.playoffTeams}
                    onChange={handleInputChange}
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
                    value={state.payout1}
                    onChange={handleInputChange}
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
                    step='any'
                    id='payout-2'
                    name='payout-2'
                    value={state.payout2}
                    onChange={handleInputChange}
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
                    value={state.payout3}
                    onChange={handleInputChange}
                    className='form-control'></input>
                </div>
                <div className='row justify-content-center align-items-center'>
                  <div className='col-auto'>
                    <button
                      type='submit'
                      className='btn btn-outline-secondary mt-3'>
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

export default EditLeagueModal
