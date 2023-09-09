import footballStadium from '../../assets/football-stadium.jpg'

//custom team number - currently 10

const Card = ({
  cardData: { leagueName, teamName, ranking, buyIn, payout, platform },
}) => {
  const tableCollapseId = `collapse${leagueName.split(' ').join('-')}`

  return (
    <div className='card small'>
      <div className='card-header'>
        <h6 className='card-title'>{leagueName}</h6>
        <p className='card-subtitle'>{teamName}</p>
      </div>
      {/* <img src={footballStadium} /> */}
      <div className='card-body pb-0'>
        <p className='card-text text-center'>10 - Team</p>
        <div className='table-responsive'>
          <table className='table table-striped table-sm table-hover table-borderless'>
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
              <tr
                className=''
                data-bs-toggle='collapse'
                data-bs-target={`#${tableCollapseId}`}
                aria-expanded='false'
                aria-controls={tableCollapseId}>
                <th scope='row'>Payout 1:</th>
                <td className='dropdown-toggle'>{payout}</td>
              </tr>
              <tr>
                <th className='p-0' scope='row'>
                  <div className='collapse lh-lg ps-1' id={tableCollapseId}>
                    Payout 2:
                  </div>
                </th>
                <td className='p-0'>
                  <div className='collapse lh-lg ps-1' id={tableCollapseId}>
                    {payout}
                  </div>
                </td>
              </tr>
              <tr>
                <th className='p-0' scope='row'>
                  <div className='collapse lh-lg ps-1' id={tableCollapseId}>
                    Payout 3:
                  </div>
                </th>
                <td className='p-0'>
                  <div className='collapse lh-lg ps-1' id={tableCollapseId}>
                    {payout}
                  </div>
                </td>
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
