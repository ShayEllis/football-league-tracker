const Table = () => {
  return (
    <div className='table-responsive'>
      <table className='table table-sm table-striped table-hover'>
        <thead>
          <tr>
            <th scope='col'>first</th>
            <th scope='col'>second</th>
            <th scope='col'>third</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>3</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
