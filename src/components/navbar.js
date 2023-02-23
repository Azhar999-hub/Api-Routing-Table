import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Router & Api
      </Typography>
      <Divider />
      <List>
        
        <Link to="/todos" className='link'>
          <ListItem>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={"Todos Api"} />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/posts" className='link'>
          <ListItem>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={"Posts Api"} />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/comments" className='link'>
          <ListItem>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={"Comments Api"} />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/album" className='link'>
          <ListItem>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={"Albums Api"} />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/photos" className='link'>
          <ListItem>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={"Photos Api"} />
            </ListItemButton>
          </ListItem>
          </Link>
        
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Router & Api
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block'}}}>
          <Link to="/todos" className='link'>
              <Button   sx={{ color: '#fff' }}>
                Todos Api
              </Button>
              </Link>
            
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link to="/posts" className='link'>
              <Button  sx={{ color: '#fff' }}>
                Posts Api
              </Button>
              </Link>
              
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
          <Link to="/comments" className='link'>
              <Button  sx={{ color: '#fff' }}>
                Comments Api
              </Button>
              </Link>
              
            
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
          <Link to="/album" className='link'> 
              <Button  sx={{ color: '#fff' }}>
                Album Api
              </Button>
              </Link>
              
            
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link to="/photos" className='link'> 
              <Button  sx={{ color: '#fff' }}>
                Photos Api
              </Button>
              </Link>
            
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}

export default DrawerAppBar;