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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   // createData('Eclair', 262, 16.0, 24, 6.0),
//   // createData('Cupcake', 305, 3.7, 67, 4.3),
//   // createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable() {
  const PF = "http://localhost:8800/images/";
  const [details, setDetails] = useState([]);

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
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
                      <Button>Block</Button>
                      <Button>Un block</Button>
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
