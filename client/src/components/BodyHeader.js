import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import IconButton from '@mui/material/IconButton';
//import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
//import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGrip} from '@fortawesome/free-solid-svg-icons'
import {faList} from '@fortawesome/free-solid-svg-icons'

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

export default function SearchAppBar() {
  return (
        <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{display:'flex', justifyContent:'space-between', backgroundColor:'black'}}>
          <Box sx={{gap: 3,display:'flex'}}>
          <Box>
            <select className="drop-down">
                <option value='all-members'>All-members</option>
                <option value='admin'>Admins</option>
                <option value='moderator'>Moderators</option>
            </select>
          </Box>

            <Box>
            <label>
            
            <span>Sort by:</span>
            <select className="drop-down two">
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
           <Box paddingX={1}>
            <FontAwesomeIcon icon={faGrip} />
           </Box> 
           <Box>
            <FontAwesomeIcon icon={faList} />
           </Box>
            
          </Box>
            <Search>
          
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Find a member"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>
          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}