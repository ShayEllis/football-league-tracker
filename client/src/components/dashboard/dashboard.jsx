import { useState, useEffect } from 'react'
import Card from '../../features/card/card'
import AddLeagueModal from '../../features/addLeagueModal/addLeagueModal'
import testData from '../../test/testData'
import server from '../../utils/server'

const Dashboard = () => {
  const [leagues, setLeagues] = useState([])

  const validateLeagueName = (input) => {
    // Check for duplicate league
    const isDuplicate = leagues?.every(
      (league) => league.leagueName !== input.value
    )
    // Change league name input class
    if (!isDuplicate) {
      input.classList.add('is-invalid')
    } else {
      input.classList.remove('is-invalid')
    }
  }

  const handleLeagueAddSubmit = async (
    event,
    state,
    exitModalRef,
    resetAddLeagueFrom
  ) => {
    event.preventDefault()
    // Remove empty input values
    const filteredInputValues = Object.keys(state).reduce((obj, val) => {
      if (state[val]) return { ...obj, [val]: state[val] }
      return { ...obj }
    }, {})
    // Check for duplicate league before submitting to server
    const isDuplicate = leagues?.every(
      (league) => league.leagueName !== filteredInputValues.leagueName
    )
    // Add legue to database
    if (isDuplicate) {
      try {
        const response = await server.addLeague(filteredInputValues)
        if (response === undefined) throw new Error('Could not add league')
        exitModalRef.current.click()
        setLeagues((previousState) => {
          return [...previousState, ...response.leagues]
        })
        resetAddLeagueFrom()
      } catch (err) {
        console.error(err)
      }
    }
  }

  const handleLeagueEditSubmit = async (event, formData, exitModalRef) => {
    event.preventDefault()
    // Remove empty input values
    const filteredInputValues = Object.keys(formData).reduce((obj, val) => {
      if (formData[val]) return { ...obj, [val]: formData[val] }
      return { ...obj, [val]: 'NULL' }
    }, {})
    // Update league in database
    try {
      const response = await server.updateLeague(filteredInputValues)
      if (response === undefined) throw new Error('Could not add league')
      exitModalRef.current.click()
      setLeagues((previousState) => {
        return previousState.map((league) => {
          if (league.id === filteredInputValues.id) {
            return response.leagues[0]
          }
          return league
        })
      })
    } catch (err) {
      console.error(err)
    }
  }

  const handleLeagueRemove = async (id) => {
    try {
      const response = await server.deleteLeague(id)
      setLeagues((previousState) => {
        return previousState.filter((league) => league.id !== id)
      })
    } catch (err) {
      console.log('Failed to delete league')
    }
  }

  useEffect(() => {
    server.fetchLeagues().then((leagues) => {
      setLeagues(leagues)
    })
  }, [])

  return (
    <div className='row justify-content-around'>
      {leagues?.map((cardData) => {
        return (
          <div className='col-auto mb-3' key={cardData.id}>
            <Card
              cardData={cardData}
              handleLeagueRemove={handleLeagueRemove}
              handleLeagueEditSubmit={handleLeagueEditSubmit}
            />
          </div>
        )
      })}
      <div className='col-auto mb-3' key='add'>
        <div className='card small'>
          <div className='card-header'>
            <div className='row'>
              <div className='col-9'>
              </div>
              <div className='d-grid ps-1 pe-1'>
                <AddLeagueModal
                  handleLeagueAddSubmit={handleLeagueAddSubmit}
                  validateLeagueName={validateLeagueName}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
