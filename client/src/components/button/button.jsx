const Button = (props) => {
  return (
    <button
      type='button'
      className='btn btn-outline-secondary'
      data-bs-toggle={props.toggle ? 'button' : undefined}
      data-bs-dismiss={props.dismiss || undefined}
      data-bs-target={props.target || undefined}>
      {props.buttonText || 'Submit'}
    </button>
  )
}

export default Button
