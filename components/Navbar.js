import React from 'react'
import {AppBar, Toolbar, Stack, Typography} from '@mui/material'

const NavBar = () => {
  return (
    <AppBar elevation={0} position='sticky'>
        <Toolbar sx={{justifyContent:'center'}}>
            <Stack my={3} alignItems='center'>
                <Typography variant='h2' sx={{color:"#708238", fontZize:60}}><strong>My Travel Blog</strong></Typography>
                <Typography variant='subtitle1' sx={{color:"#708238", letterSpacing:10}}>EAT SLEEP TRAVEL</Typography>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar