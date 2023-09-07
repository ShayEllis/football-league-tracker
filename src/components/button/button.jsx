const Button = (props) => {
  return (
    <button className='btn btn-outline-secondary' data-bs-toggle={props.toggle ? 'button' : undefined}>{props.buttonText || 'Submit'}</button>
  )
}

export default Button