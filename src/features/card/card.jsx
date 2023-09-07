import footballStadium from '../../assets/football-stadium.jpg'
import Table from '../table/table'

const Card = () => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h4 className='card-title'>League Name</h4>
        <p className='card-subtitle'>Team Name</p>
      </div>
      <img src={footballStadium} />
      <div className='card-body'>
        {/* <p className='card-text mb-1'>Ranking: 56</p>
        <p className='card-text mb-1'>Buy-In: $50.00</p>
        <p className='card-text'>Payout: $158.47</p> */}
        <div className='table-responsive'>
          <table className='table table-sm'>
            <tbody>
              <tr>
                <th scope='row'>Ranking:</th>
                <td>56</td>
              </tr>
              <tr>
                <th scope='row'>Buy-In:</th>
                <td>$50.00</td>
              </tr>
              <tr>
                <th scope='row'>Payout:</th>
                <td>158.47</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className='card-footer'>Footer</div> */}
      <div className='card-footer'>
        <p className='card-text'>Platform: Sleeper</p>
      </div>
    </div>
  )
}

export default Card
