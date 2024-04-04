import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bissfull Bytes
          </Typography>
          <LoginIcon />
          <Button color="inherit">Login</Button>
          <LogoutIcon sx={{marginLeft : "1rem"}} />
          <Button color="inherit">LogOut</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;