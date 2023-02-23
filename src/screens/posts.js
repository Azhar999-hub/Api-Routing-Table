import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';


const Posts = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
    <h1 className="text-center text-success" >Posts Api</h1>


          <Table  bordered hover>
          <thead className='text-center bg-warning'>
                 <tr>
                   <th>Id</th>
                   <th>Title</th>
                   <th>Body</th>
                   
                 </tr>
               </thead>
    
      {data.map((e, i) => {
        return (
         
               <tbody className='text-center'>
                 <tr key={i}>
                   <td>{e.id}</td>
                   <td>{e.title}</td>
                   <td>{e.body}</td>
                 </tr>
               </tbody>
         );
        })}
        </Table>
 
  </Container>
  )
}

export default Posts