import footballStadium from '../../assets/football-stadium.jpg'

const Card = () => {
  return (
    <div className='card'>
      <p className='card-header'>Header</p>
      <img className='' src={footballStadium} />
      <div className='card-body'>
        <h4 className='card-title'>Card Title</h4>
        <p className='card-text'>this is the card text</p>
      </div>
      <div className='card-footer'>Footer</div>
    </div>
  )
}

export default Card
