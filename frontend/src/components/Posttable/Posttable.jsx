import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';





export default function Posttable() {
   const PF = "http://localhost:8800/images/";
  const [details, setDetails] = useState([]);
  const [userdetails, setUserdetails] = useState([]);

// post
  useEffect(() => {
    (async function () {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.get("/admin/posttable", config);

        console.log("bfvbvb", data);
        setDetails(data);
       
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // user
  useEffect(() => {
    (async function () {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const  {data}  = await axios.get("/admin/getAlluser", config);
        console.log("rrrrr", data);
        setUserdetails(data);
       
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const deleteuser = async (postId) => {
    console.log("postid",postId);
    if (window.confirm(`Sure to Delete?`)) {
        var index=0
        details.map((obj) => {
            console.log("fsdf", obj);
            if (obj._id == postId) {
               index = details.indexOf(obj);      
            }
          });
        const test = [...details];
    
        test.splice(index, 1);
        setDetails(test);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        await axios.delete("/admin/deletepost/"+postId);
      
        
      } catch (error) {
        // throw new error(error.response.data.message);
      }
    }
  };

  return (
    <div className='Container' style={{marginTop:"50px",marginLeft: "50px",marginRight:"50px" }}>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 950 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="center">Post Image</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="right">Options</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {details.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                 {userdetails.map((obj)=>{
                    if(obj._id==row.userId){
                      return(
                       
              <TableCell component="th" scope="row">
              {obj.username}
              </TableCell>
                      )
                  }
                })}
              <TableCell align="center">
              <img src={PF + row.img} style={{height:"50px", width:"50px"}} />
              </TableCell>
              <TableCell align="center">{row.desc}</TableCell>
              <TableCell align="right">
              <Button  variant="contained"
               onClick={() => {
                deleteuser(row._id);
              }}
              >Delete</Button>
              </TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}