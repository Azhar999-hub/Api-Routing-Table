import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';


const Todos = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      
      
      <Container>
        <h1 className="text-center text-success" >Todos Api</h1>
        
        <Table bordered hover>
          <thead className='text-center bg-black text-white'>
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
      
    </div>
  );
};

export default Todos;
