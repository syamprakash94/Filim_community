import React from "react";
import Posttable from "../components/Posttable/Posttable";
import Adminnavbar from "../components/Adminnavbar/Adminnavbar";
import Admindashboard from "../components/Admindashboard/Admindashboard";
import { Stack } from "@mui/material";

const Adminposttable = () => {
  return (
    <div>
      <Adminnavbar />
      <Stack direction="row" justifyContent="space-between">
        <Admindashboard />
        <Posttable/>
      </Stack>
    </div>
  );
};

export default Adminposttable;
