import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../assets/logo.png"
import {Link,useLocation} from "react-router-dom"
import UndoIcon from '@mui/icons-material/Undo';
import "./Navbar.css"
export default function ButtonAppBar() {

  const location = useLocation();
  const showBackButton = location.pathname !== '/';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='navbar'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="dark"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={Logo} alt="" />
          </Typography>
          {showBackButton && (
            <Button component={Link} to="/" className='loginbtn'>
              <UndoIcon/>
            </Button>
          )}
          <Button className='loginbtn'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
