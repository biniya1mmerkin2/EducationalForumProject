import React from 'react';
import {Container,Button,TextField} from '@mui/material';
import {Link} from 'react-router-dom'


const Forum=()=>
{
    return(
        <Container maxWidth='md' style={{display:'flex' ,justifyContent:'space-between'}}>
            <div>
            <Link to='/'>Home</Link>
            <Button>Category</Button>
            <Button>All Posts</Button>
            <Button>My Posts</Button>
            </div>
            <TextField size='small' />
        </Container>

    )
}

export default Forum;