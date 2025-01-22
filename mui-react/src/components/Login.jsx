import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <div id='s4'>
            <h1 style={{color:'red',backgroundColor:'yellow'}}>Login page</h1>
            <TextField id="a5" label="Username" variant="outlined" /><br></br><br></br>
    <TextField id="a6" label="Password" variant="outlined" /><br></br>
   <br></br> <Button  variant="contained">Login page</Button></div>
    </div>
  )
}

export default Login