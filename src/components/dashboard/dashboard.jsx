import Card from '../../features/card/card'
import testData from '../../test/testData'

const Dashboard = () => {
  return (
    <div className='row justify-content-around'>
      {testData.cards.map((cardData) => {
        return (
          <div className='col-auto mb-3' key={cardData.teamName}>
            <Card cardData={cardData} />
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard
