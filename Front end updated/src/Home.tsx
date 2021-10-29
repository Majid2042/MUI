import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Typography from '@mui/material/Typography';
import AnnouncementIcon from '@mui/icons-material/Announcement';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            SLAT
          </Typography>
          <Button size = "large" color="inherit" variant="text" href="#" startIcon={<AssessmentIcon />}>Assessment</Button>
          <Button size = "large" color="inherit" variant="text" href="#" startIcon={<AnnouncementIcon />}>About Us</Button>
          <Button size = "large" color="inherit" variant="text" href="./signup" startIcon={<HowToRegIcon />}>Register</Button>
          <Button size = "large" color="inherit" variant="text" href="./login" startIcon={<LockOpenIcon />}>Login</Button>
        </Toolbar>
      </AppBar>
      <Toolbar>
      <img src="Watercolor2.jpg" alt="logo"/>
      </Toolbar>
    </Box>
  );
}