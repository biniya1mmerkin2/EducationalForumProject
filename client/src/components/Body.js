import React from 'react'
import UserCard from './UserCard'
import Chyn from '../UsersImage/chyn.jpg'
import Simon from '../UsersImage/simon.jpg'
import Roger from '../UsersImage/roger.jpg'
import Julia from '../UsersImage/julia.jpg'
import Smith from '../UsersImage/smith.jpg'
import Box from '@mui/material/Box'
import BodyHeader from './BodyHeader'
import { Container } from '@mui/system'


export default function Body(){
    return(
        <Container sx={{display:'flex', flexDirection:'column',flexWrap:'wrap',paddingBottom:'60px'}}>
                <BodyHeader/>
            <Box sx={{display:'flex',flexWrap:'Wrap',gap:3,justifyContent:'center'}}>
                <UserCard
                    image={Chyn}
                    name='Chyn Guang'
                    role='sd'
                    noOfFollowers='2'
                    followersText='r'
                    noOfFollowing='32'
                    followingText='kj'
                />
                <UserCard
                    image={Simon}
                    name='Simon Drake'
                    role='sd'
                    noOfFollowers='2'
                    followersText=''
                    noOfFollowing='32'
                    followingText='kj'
                />
                <UserCard
                    image={Julia}
                    name='Julia Steve'
                    role='sd'
                    noOfFollowers='2'
                    followersText=''
                    noOfFollowing='32'
                    followingText='kj'
                />
                <UserCard
                    image={Roger}
                    name='Roger Simpson'
                    role='sd'
                    noOfFollowers='2'
                    followersText=''
                    noOfFollowing='32'
                    followingText='kj'
                />
                <UserCard
                    image={Smith}
                    name='Smith David'
                    role='sd'
                    noOfFollowers='2'
                    followersText=''
                    noOfFollowing='32'
                    followingText='kj'
                />
            </Box>
            
        </Container>
    )
}