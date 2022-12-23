import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Avatar, InputAdornment, TextField, Typography } from '@mui/material'
import NavItem from './NavItem'
import './sidebar.scss'
import { drawerWidth } from '../mocks/menuList'
import { NavBarProps, SideBarProps } from './types'
import { ReactComponent as BellImage } from '../assets/images/bell.svg'
import { ReactComponent as MenImage } from '../assets/images/men.svg'
import { ReactComponent as DropdownIcon } from '../assets/images/dropdown.svg'
import { ReactComponent as CalenderIcon } from '../assets/images/calender.svg'
import { ReactComponent as AppIcon } from '../assets/images/app.svg'
import { ReactComponent as BreadCrumIcon } from '../assets/icons/bread.svg'
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg'
import BottomNav from './BottomNav'

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }: any) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Navbar = ({ childData, handleDrawerToggle }: NavBarProps) => {
  return (
    <Box>
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          borderBottom: { sm: '1px solid #F1F1F1' },
          borderTopLeftRadius: { sm: '20px' },
          background: {
            xs: (theme) => theme.palette.primary.main,
            sm: '#fff',
          },
        }}
        elevation={0}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: '#fff', display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              textTransform: 'capitalize',
              color: '#000',
              flex: 1.5,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            {childData || 'Dashboard'}
          </Typography>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '30px',
                width: '30px',
              }}
            >
              <MenImage />
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '30px',
                width: '30px',
              }}
            >
              <MenImage />
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'flex' },
              justifyContent: 'space-between',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <Typography
              variant='body1'
              sx={{
                textTransform: 'capitalize',
                color: '#7B7B7B',
              }}
            >
              Date Range
            </Typography>
            <TextField
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='start'>
                    <Avatar
                      sx={{ background: '#468D8D', width: '24px', height: '24px' }}
                      variant='rounded'
                    >
                      <CalenderIcon />
                    </Avatar>
                  </InputAdornment>
                ),
              }}
              value={'16 July, 2022'}
            />
            <BellImage />
            <MenImage />
            <Typography variant='body1' color='#202020'>
              Alfonso Gouse
            </Typography>
            <DropdownIcon />
          </Box>
        </Toolbar>
        <Box
          sx={{
            display: { xs: 'block', sm: 'none' },
            // minHeight: '200px',
            background: (theme) => theme.palette.primary.main,
            borderBottomRightRadius: '20px',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <TextField
              placeholder='Search'
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position={'start'} sx={{ pl: 1 }}>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                flex: 1,
                background: `linear-gradient(92.12deg, rgba(255, 255, 255, 0.3) -8.66%, rgba(255, 255, 255, 0.15) 111.93%)`,
                borderRadius: '15px',
                m: 2,
                color: '#fff',
              }}
            />
          </Box>
        </Box>
      </AppBar>
    </Box>
  )
}
export default ({ children }: SideBarProps, props: { window: any }) => {
  const { window } = props
  const [childData, setChildData] = useState('')
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar childData={childData} handleDrawerToggle={handleDrawerToggle} />

      <CssBaseline />
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: '#fff',
              borderTopRightRadius: '20px',
              borderBottomRightRadius: '20px',
            },
          }}
        >
          <NavItem passChild={setChildData} handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          className='sidebar-class'
          open
        >
          <NavItem passChild={setChildData} />
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: (theme) => theme.palette.primary.main,
        }}
      >
        <Toolbar />
        <Box sx={{ p: 3, background: (theme) => theme.palette.primary.light }}>
          {children}
          <Box sx={{ display: { sx: 'block', sm: 'none' }, marginTop: '50px' }}>
            <BottomNav />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
