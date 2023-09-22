import { useState, useEffect } from 'react'
import Card from '../../features/card/card'
import AddLeagueModal from '../../features/addLeagueModal/addLeagueModal'
import testData from '../../test/testData'
import server from '../../utils/server'

const Dashboard = () => {
  const [leagues, setLeagues] = useState([])

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

  const handleEditFormSubmit = (event) => {
    event.preventDefault()
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
              handleEditFormSubmit={handleEditFormSubmit}
            />
          </div>
        )
      })}
      <div className='col-auto mb-3' key='add'>
        <div className='card small'>
          <div className='card-header'>
            <div className='row'>
              <div className='col-9'>
                <h6 className='card-title'>Add New League</h6>
              </div>
              <div className='col p-0 pe-1 d-flex justify-content-end'>
                <AddLeagueModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
