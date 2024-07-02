import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../images/logo.png';

const pages = ['Home', 'About', 'Services', 'Contact'];

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  const navMenuOpen = Boolean(anchorEl);

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        background: '#F5F5DC', 
        textAlign: 'center', 
        padding: '0px 50px',
        boxShadow: '#3E2723 0px 0px 0px 0px 0px'
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src={Logo} alt="Cavanaugh Carpentry Logo" width="auto" height="100"/>

          <Box 
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex'}, 
               justifyContent: 'flex-end'
             }}>
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center" 
                  component="a" 
                  href={`#${page.toLowerCase()}`} 
                  sx={{
                    textDecoration: 'none', 
                    color: '#3E2723', 
                    margin: '0 10px',
                    fontFamily: 'Crimson Text',
                    fontWeight: '600',
                    fontSize: '1.5rem',
                  }}>
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
              flexGrow: 1,
              fontFamily: 'Lobster',
              fontWeight: 'bold',
              fontSize: '2rem',
              letterSpacing: '0.15rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
              color: '#3E2723',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box 
            sx={{ 
              flexGrow: 0, 
              display: { xs: 'flex', md: 'none' }, 
              justifyContent: 'flex-end',
            }}>
            <IconButton
            edge="start"
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            background="#3E2723"
            >
              <MenuIcon/>
            </IconButton >
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={navMenuOpen}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                backgroundColor: '#F5F5DC',
                '& .MuiPaper-root': {
                  backgroundColor: '#F5F5DC',
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center" 
                    component="a" 
                    href={`#${page.toLowerCase()}`} 
                    sx={{ 
                      textDecoration: 'none', 
                      color: '#3E2723', 
                      margin: '0 10px',
                      fontFamily: 'Crimson Text',
                      fontSize: '1.5rem',
                      fontWeight: '600',
                    }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
