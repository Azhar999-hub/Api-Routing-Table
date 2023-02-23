import { Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

const Album = () => {

  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <Container>
        <h1 className="text-center text-success" >Album Api</h1>
        
        <Table bordered hover>
          <thead className='text-center bg-success'>
                 <tr>
                   <th>Id</th>
                   <th>Title</th>
                  
                   
                 </tr>
               </thead>
    
      {data.map((e, i) => {
        return (
         
               <tbody className='text-center'>
                 <tr key={i}>
                   <td>{e.id}</td>
                   <td>{e.title}</td>
                   
                 </tr>
               </tbody>
         );
        })}
        </Table>
      </Container>
  )
}

export default Album