import footballStadium from '../../assets/football-stadium.jpg'
import EditLeagueModal from '../editLeagueModal/editLeagueModal'
import server from '../../utils/server'

//custom team number - currently 10

const Card = ({
  cardData: {
    id,
    leagueName,
    teamName,
    teamCount,
    platform,
    draftDate,
    buyIn,
    draftRank,
    teamRank,
    playoffTeams,
    payout1,
    payout2,
    payout3,
  },
}) => {
  const tableCollapseId = `collapse${leagueName.split(' ').join('-')}`
  const convertedDraftDate = new Date(draftDate).toLocaleDateString()

  const handleLeagueRemove = async ({ target }) => {
    try {
      const response = server.deleteLeague(id)
    } catch (err) {
      console.log('Failed to delete league')
    }
  }

  return (
    <div className='card small'>
      <div className='card-header'>
        <div className='row'>
          <div className='col-9'>
            <h6 className='card-title'>{leagueName}</h6>
          </div>
          <div className='col p-0 pe-1 d-flex justify-content-end'>
            <EditLeagueModal leagueName={leagueName} id={id} />
            <button
              type='button'
              className='btn btn-sm btn-outline-secondary p-1 pt-0 pb-0 ms-1'
              onClick={handleLeagueRemove}>
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </div>
        <p className='card-subtitle'>{teamName}</p>
      </div>
      {/* <img src={footballStadium} /> */}
      <div className='card-body pb-0 pt-0'>
        <p className='card-text text-center m-1'>{teamCount} - Team</p>
        <div className='table-responsive'>
          <table className='table table-striped table-sm table-hover table-borderless'>
            <tbody>
              <tr>
                <th scope='row'>Platform:</th>
                <td>{platform}</td>
              </tr>
              <tr>
                <th scope='row'>Draft Date:</th>
                <td>{convertedDraftDate}</td>
              </tr>

              <tr>
                <th scope='row'>Buy-In:</th>
                <td>{buyIn}</td>
              </tr>
              <tr>
                <th scope='row'>Draft Rank:</th>
                <td>{draftRank}</td>
              </tr>
              <tr>
                <th scope='row'>Team Rank:</th>
                <td>{teamRank}</td>
              </tr>
              <tr>
                <th scope='row'>Playoff Teams:</th>
                <td>{playoffTeams}</td>
              </tr>
              <tr
                className=''
                data-bs-toggle='collapse'
                data-bs-target={`#${tableCollapseId}`}
                aria-expanded='false'
                aria-controls={tableCollapseId}>
                <th scope='row'>Payout 1:</th>
                <td className='dropdown-toggle'>{payout1}</td>
              </tr>
              <tr>
                <th className='p-0' scope='row'>
                  <div className='collapse lh-lg ps-1' id={tableCollapseId}>
                    Payout 2:
                  </div>
                </th>
                <td className='p-0'>
                  <div className='collapse lh-lg ps-1' id={tableCollapseId}>
                    {payout2}
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
                    {payout3}
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
