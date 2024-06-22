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
        background: 'rgba(20, 93, 160, 0.8)', 
        textAlign: 'center', 
        padding: '5px 20px' 
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Lobster',
              fontWeight: 'bold',
              fontSize: '2rem',
              letterSpacing: '0.15rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Cavanaugh Carpentry
          </Typography>

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
                    color: 'inherit', 
                    margin: '0 10px', 
                    fontFamily: 'inherit',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    transition: 'text-shadow 1s ease-in-out',
                    '&:hover': {
                      animation: 'glow 1s ease-in-out infinite alternate',
                    },
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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Cavanaugh Carpentry
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
            color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
                backgroundColor: '#2E8BC0',
                '& .MuiPaper-root': {
                  backgroundColor: '#2E8BC0',
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
                      color: 'white',
                      textDecoration: 'none',
                      fontFamily: 'inherit',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
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
