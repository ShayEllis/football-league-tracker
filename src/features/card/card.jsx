import footballStadium from '../../assets/football-stadium.jpg'

//custom team number - currently 10

const Card = ({
  cardData: { leagueName, teamName, ranking, buyIn, payout, platform },
}) => {
  return (
    <div className='card small'>
      <div className='card-header'>
        <h6 className='card-title'>{leagueName}</h6>
        <p className='card-subtitle'>{teamName}</p>
      </div>
      {/* <img src={footballStadium} /> */}
      <div className='card-body'>
        <p className='card-text'>10 - Team</p>
        <div className='table-responsive'>
          <table className='table table-striped table-sm table-hover'>
            <tbody>
              <tr>
                <th scope='row'>Platform:</th>
                <td>{platform}</td>
              </tr>
              <tr>
                <th scope='row'>Buy-In:</th>
                <td>{buyIn}</td>
              </tr>
              <tr>
                <th scope='row'>Payout:</th>
                <td>{payout}</td>
              </tr>
              <tr>
                <th scope='row'>Draft Rank:</th>
                <td>{ranking}</td>
              </tr>
              <tr>
                <th scope='row'>Rank:</th>
                <td>{ranking}</td>
              </tr>
              <tr>
                <th scope='row'>Playoff Teams:</th>
                <td>{ranking}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className='card-footer'>
        <p className='card-text'>{`Platform: ${platform}`}</p>
      </div> */}
    </div>
  )
}

export default Card
