import { Stack } from '@mui/material'
import React from 'react'
import Admindashboard from '../components/Admindashboard/Admindashboard'
import Usertable from "../components/Usertable/Usertable"
import Adminnavbar from "../components/Adminnavbar/Adminnavbar"
const Adminhome = () => {
  return (
    <div>
      <Adminnavbar/>
      <Stack direction="row" justifyContent="space-between" >
      <Admindashboard />
      <Usertable/>
      </Stack>
    </div>
  )
}

export default Adminhome