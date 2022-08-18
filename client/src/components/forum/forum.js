import React from 'react';
import {Container,Button,TextField,InputAdornment} from '@mui/material';
import {Link} from 'react-router-dom'
import {Search} from '@mui/icons-material'


const Forum=()=>
{
    return(
        <Container maxWidth='md' style={{display:'flex' ,justifyContent:'space-between' }}>
            <div style={{margin:10}}>
         
            <Button color='secondary' >Category</Button >
            <Button color='secondary'>All Posts</Button >
            <Button color='secondary'>My Posts</Button>
            </div>
            <TextField  style={{margin:10}} size='small'
             variant='standard' 
             label='Search'
            
            />
        </Container>

    )
}

export default Forum;