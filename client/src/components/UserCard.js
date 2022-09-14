import React from 'react'
import Paper from '@mui/material/Paper'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import {faMessage} from '@fortawesome/free-solid-svg-icons'
import Box from '@mui/material/Box'
import { Typography, useThemeProps } from '@mui/material'
import Button from '@mui/material/Button'
import Chyn  from '../UsersImage/chyn.jpg'
import Julia from '../UsersImage/julia.jpg'
import Roger from '../UsersImage/roger.jpg'
import Simon from '../UsersImage/simon.jpg'
import Smith from '../UsersImage/smith.jpg'
import { fontFamily } from '@mui/system'
import axios from '../axios'
import { object } from 'prop-types'

export default function UserCard(props){
    const [users,setUsers]=React.useState([]);
    React.useEffect(()=>{
        async function fetchData(){
            const req=await axios.get('/members/card')
            setUsers(req.data)
            
        
        }

        fetchData();
    },[])
   

    return(
                <Paper   sx={{padding:'10px', marginTop:3, color:'white', backgroundColor:'black', border:'1px solid rgba(240, 248, 255, 0.715)'}}>
                    <Box sx={{float:'right'}}>
                    <a href="www.google.com" target='blank'>
                    <FontAwesomeIcon icon={faEllipsisVertical} className='option'/>
                    </a>
                    </Box>
                    <Box id='user--card'>
                    <img src={props.image} 
                    alt='userimage'
                    className='user-image'
                    />
                
                        <Typography variant='subtitle' component='h2' sx={{textAlign:'center', marginRight:'10px'}}>
                           {props.name}
                        </Typography>

                        <Typography variant='body' component='h4' sx={{textAlign:'center'}}>
                          {props.role}
                        </Typography>
                        <Box sx={{display:'flex',flexDirection:'row', gap:2, marginX:3, alignItems:'center'}}>
                            <Box>
                                <Box>
                                    <Typography sx={{textAlign:'center'}}>
                                        {props.noOfFollowers}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography marginX={1}>
                                        Followers
                                    </Typography>
                                </Box>
                            </Box>
                            <Box borderLeft={1} borderColor='white'>
                                    <Box>
                                    <Typography  sx={{textAlign:'center'}}>
                                        {props.noOfFollowing}
                                    </Typography>
                                    </Box>
                                    <Box>
                                    <Typography marginX={1} >
                                        Following
                                    </Typography>
                                    </Box>
                            </Box>
                        </Box>
                        <Box paddingX={3} padding={1} sx={{display:'flex', gap:'5px'}}>
                        <Button variant="contained" size='small'sx={{backgroundColor:'#ec5218', width:'30px', borderRadius:'0px', width:'75%', color:'black', fontSize:'large', fontWeight:'400'}} >{users.followstatus?'Unfollow':'Follow'}{console.log(users.followstatus)}</Button>
                        <Button variant="contained" size='small' sx={{backgroundColor:'#ec5218', width:'30px', borderRadius:'0px', width:'50px', fontSize:'25px', color:'black'}}><FontAwesomeIcon icon={faMessage} /></Button>
                        </Box>
                        
                    </Box>
                    
                    
                </Paper>

        
    )
}