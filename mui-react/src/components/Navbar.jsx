import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <> 
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
         
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Student-page
        </Typography>
        <Link to={'/'} ><Button color="inherit"style={{color:"white"}}>Home</Button></Link>
        <Link to={'/login'} > <Button color="inherit" style={{color:"white"}}>Login</Button></Link>
        <Link to={'/register'} > <Button color="inherit"style={{color:"white"}}>Register</Button></Link>
      </Toolbar>
    </AppBar>
  </Box></>
  )
}

export default Navbar