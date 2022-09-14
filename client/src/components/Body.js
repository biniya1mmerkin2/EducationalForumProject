import React, { useEffect } from 'react'
import UserCard from './UserCard'
import Chyn from '../UsersImage/chyn.jpg'
import Simon from '../UsersImage/simon.jpg'
import Roger from '../UsersImage/roger.jpg'
import Julia from '../UsersImage/julia.jpg'
import Smith from '../UsersImage/smith.jpg'
import Box from '@mui/material/Box'
import BodyHeader from './BodyHeader'
import { Container } from '@mui/system'
import axios from '../axios'


export default function Body(){

    const [users,setUsers]=React.useState([]);
    React.useEffect(()=>{
        async function fetchData(){
            const req=await axios.get('/members/card')
            setUsers(req.data)
        }

        fetchData();
    },[])

    const user=users.map(elements=>
      <UserCard
        key={elements.name}
        image={elements.image}
        name={elements.name}
        role={elements.role}
        noOfFollowers={elements.noOfFollowers}
        noOfFollowing={elements.noOfFollowing}
    />
    )
    return(
        <Container  sx={{display:'flex', flexDirection:'column',flexWrap:'wrap',paddingBottom:'60px'}}>
                <BodyHeader/>
            <Box id='body--container' sx={{display:'flex',flexWrap:'Wrap',gap:3,justifyContent:'center'}}>
                {user}
            </Box>
            
        </Container>
    )
}