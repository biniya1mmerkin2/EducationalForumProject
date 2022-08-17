import React from "react";
import {AppBar,Typography,Button,Toolbar} from '@mui/material';

const NavBar=()=>
{
    return(
        <AppBar position="static" color="inherit">
           <Toolbar style={{
            display:'flex',
            justifyContent:'space-evenly'
           }}>
           <Typography variant="h5" gutterBottom>Educational Forum</Typography>
           <div>
           <Button > Home</Button>
           <Button> Forum</Button>
           <Button> Members</Button>
           <Button> Contact</Button>
           </div>

           </Toolbar>
        </AppBar>
        
    )
}

export default NavBar;