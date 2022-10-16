import React from 'react'
import UserCard from './UserCard'
import Box from '@mui/material/Box'
import { Container } from '@mui/system'
import axios from '../axios'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {faGrip} from '@fortawesome/free-solid-svg-icons'
import {faList} from '@fortawesome/free-solid-svg-icons'
import { Typography } from '@mui/material'





const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '16ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default function Body(){

    //dynamic style for grid view and list view

    const [view,setView]=React.useState({
        type:true
    })

    const paperstyle=view.type?{}:{width:'100%'}
    const cardsStyles=view.type?{
        padding:'10px', 
        marginTop:3, 
        color:'white', 
        backgroundColor:'black'
    }:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }







    //handel view
    function handelGrid(){
      setView(older=>({...older,type:true}))
      console.log("grid")
  }
  function handelList(){
      setView(older=>({...older,type:false}))
      console.log("list")
  }





    //fetching user data from the dataBase
    const [users,setUsers]=React.useState([]);
    React.useEffect(()=>{
        async function fetchData(){
            const req=await axios.get('/members/card')
            setUsers(req.data)
        }

        fetchData();
    },[])



    //handel Search

    const[searchTerm,setSearchTerm]=React.useState('')

    function handelSearch(event){
        setSearchTerm(event.target.value)
    }

     function handelFollow(id){
        setUsers(prevState=>{
            return prevState.map(mapped=>{
                return mapped.name===id?{...mapped,followstatus:!mapped.followstatus}:mapped
                
            })
        })
        
    }
//handel display

    const [display,setDisplay]=React.useState({
      role:'all-members',
      sort:'default'
    })

    function handelDisplay(event){
        setDisplay(prev=>{
          return {
            ...prev,
            [event.target.name]:event.target.value
          }
        })
    }
    console.log(display)
    
    return(
        <Container  sx={{display:'flex', flexDirection:'column' ,flexWrap:'wrap',paddingBottom:'60px'}}>
               <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',color:'white',justifyContent:'space-around'}}>
                <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{display:'flex', justifyContent:'space-around', backgroundColor:'black'}}>
          <Box sx={{gap: 3,display:'flex'}}>
          <Box>
            <select className="drop-down" name="role" onChange={handelDisplay} value={display.role}>
                <option value='all-members'>All-members</option>
                <option value='admin'>Admins</option>
                <option value='user'>Moderators</option>
            </select>
          </Box>

            <Box>
            <label>
            
            <span>Sort by:</span>
            <select className="drop-down two" name="sort" value={display.sort} onChange={handelDisplay}>
                <option value='default'>Default</option>
                <option value='No of followers'>No of followers</option>
                <option value='newest to old'>newest to old</option>
                <option value='Oldest to new'>Oldest to new</option>
                <option value='No of forums posted'>No of forums posted</option>
            </select>

            </label>
            
            </Box>

            

          </Box>
          <Box sx={{display:'flex',
          alignItems:'center',
          gap:'40px'
          }}>
          <Box sx={{display:'flex',fontSize:'30px', gap:'25px'}}>
           <Box paddingX={1} onClick={handelGrid}>
            <FontAwesomeIcon icon={faGrip} />
           </Box> 
           <Box onClick={handelList}>
            <FontAwesomeIcon icon={faList} />
           </Box>
            
          </Box>
            
          </Box>
          
          
        </Toolbar>
      </AppBar>
    </Box>
                <form onChange={handelSearch}>
                    <Search>
          
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Find a member"
            inputProps={{ 'aria-label': 'search' }}
            value={searchTerm}
            onChange={(event)=>{
                setSearchTerm(event.target.value)
            }}
          />
        </Search>
                </form>
                
               </Box> 
            <Box id='body--container' sx={{display:'flex',flexWrap:'Wrap',gap:3,justifyContent:'center'}}>
            {users.filter((val)=>{
                if(searchTerm===''){
                    return val
                }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).filter((val)=>{
              if (display.role==="all-members"){
                return val
              } else if(val.role.toLowerCase().includes(display.role)){
                return val
              }
            }).map((elements,key)=>{
              console.log(elements)
      return <UserCard
      id={elements.name}
        key={elements.name}
        image={elements.image}
        name={elements.name}
        role={elements.role}
        noOfFollowers={elements.noOfFollowers}
        noOfFollowing={elements.noOfFollowing}
        followstatus={elements.followstatus}
        handleClick={handelFollow}
        styles={cardsStyles}
        pstyle={paperstyle}
    />
    }
    )}
            </Box>
            
        </Container>
    )
}