import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";


// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }



export default function BasicTable() {
  const PF = "http://localhost:8800/images/";
  const [details, setDetails] = useState([]);
  const [userDetails, setuserDetails] = useState([])
  const [block,setBlock]=useState(false)


  useEffect(() => {
    (async function () {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.get("/admin/adminhome", config);
        console.log("bfvbvb", data);
        setDetails(data);
        setBlock(false)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [block]);

  const blockuser = async (userId) => {
    console.log(userId, "khyaifnjfn");

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log("userrrid", userId);
      await axios
        .patch(`/admin/blockuser/${userId}`, {
          config,
        })
        .then((result) => {
          setBlock(true)
    
          const newData = userDetails.map((item) => {
            if (item._id == result.data._id) {
              return result.data;

            } else {
              return item;
            }
          });
         
          setuserDetails(newData);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const unblockuser = async (userId) => {
    

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log("userrrid", userId);
      await axios
        .patch(`/admin/unblockuser/${userId}`, {
          config,
        })
        .then((result) => {
          setBlock(true)
         
          const newData = userDetails.map((item) => {
            if (item._id == result.data._id) {
              return result.data;
            } else {
              return item;
            }
          });
         
          setuserDetails(newData);
        });
    } catch (error) {
      console.log(error);
    }
   
  };

  return (
    <div
      className="tableuser"
      style={{ marginTop: "100px", marginRight: "300px" }}
    >
      <div className="container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Username </TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Proifile picture</TableCell>
                <TableCell align="right">Options</TableCell>
                {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {details.map((row) => (
                <TableRow key={details._id}>
                  <TableCell component="th" scope="row">
                    {row.username}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">
                    <img src={PF + row.profilePicture} style={{height:"50px", width:"50px"}} />
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      
                    { row.isBlock ? <Button
                      onClick={()=> unblockuser(row._id)}
                      >UnBlock</Button>
                     : <Button
                      onClick={()=> blockuser(row._id)}
                      >Block</Button>}
                    </ButtonGroup>
                  </TableCell>
                  {/* <TableCell align="right">{row.protein}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
