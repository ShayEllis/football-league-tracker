import { useState, useEffect } from 'react'
import Card from '../../features/card/card'
import AddLeagueModal from '../../features/addLeagueModal/addLeagueModal'
import testData from '../../test/testData'
import server from '../../utils/server'

const Dashboard = () => {
  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    server.fetchLeagues().then((leagues) => {
      console.log('Fetching leagues from server')
      setLeagues(leagues)
    })
  }, [])

  useEffect(() => {
    console.log(leagues)
  }, [leagues])

  return (
    <div className='row justify-content-around'>
      {leagues.map((cardData) => {
        return (
          <div className='col-auto mb-3' key={cardData.id}>
            <Card cardData={cardData} />
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
