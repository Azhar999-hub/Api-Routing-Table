import { Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

const Comments = () => {

  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      
    <h1 className="text-center text-success" >Comments Api</h1>


          <Table bordered hover>
          <thead className='text-center bg-secondary'>
                 <tr>
                   <th scope='col'>Id</th>
                   <th scope='col'>Name</th>
                   <th scope='col'>Email</th>
                   <th scope='col'>Body</th>
                   
                 </tr>
               </thead>
    
      {data.map((e, i) => {
        return (
         
               <tbody>
                 <tr key={i}>
                   <td>{e.id}</td>
                   <td>{e.name}</td>
                   <td>{e.email}</td>
                   <td>{e.body}</td>
                 </tr>
               </tbody>
         );
        })}
        </Table>
 
  </Container>
  )
}

export default Comments