import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'


const Photos = () => {

  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
   
    <Container>
    <h1 className="text-center text-success" >Photos Api</h1>


          <Table responsive="lg" bordered hover >
          <thead className='text-center bg-primary'>
                 <tr>
                   <th>Id</th>
                   <th>Title</th>
                   <th>Url</th>
                   <th>Thumbnail</th>
                   
                 </tr>
               </thead>
    
      {data.map((e, i) => {
        return (
         
               <tbody className='text-center'>
                 <tr key={i}>
                   <td>{e.id}</td>
                   <td>{e.title}</td>
                   <td><Button variant="outline-primary" target='blank'  href={e.url}>Go to Image</Button></td>
                   <td><Button variant="outline-primary" target='blank'  href={e.thumbnailUrl}>Go to Thumbnail</Button></td>
                 </tr>
               </tbody>
         );
        })}
        </Table>
 
  </Container>

  )
}

export default Photos