import { Box, TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <>
    <Box
    component="form"
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
    <h2 style ={{backgroundColor:'yellow', color:'red'}}>REGISTER PAGE</h2>
    <div>
      <TextField
        required
        id="outlined-required"
        label="NAME"
        
      />
      <TextField
        label='ADRRESS'
        id="outlined-disabled"
        
        
      /></div>
      <div>
      <TextField
        id="outlined-password-input"
        label="PASSWORD"
        
        
      />
      <TextField
        id="outlined-read-only-input"
        label="REGISTRAION NO"
        
      /></div>
     <div> <TextField
        id="outlined-number"
        label="PHONE NO"
       
        
      />
      <TextField
        id="outlined-helperText"
        label="QUALIFICATION"
       
      />
    </div>
    
  </Box>
  </>
  )
}

export default Register