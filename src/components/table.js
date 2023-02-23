import React from 'react'
import { Table } from 'react-bootstrap';

const SmTable = (props) => {

  let {id, title,body} = props;

  return (
    <Table striped bordered hover>
 <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{body}</td>
        </tr>
      </tbody>


    </Table>


  )
}

export default SmTable