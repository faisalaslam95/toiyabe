import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined'
import { sidebarTabsList } from '../../mocks/menuList'
import { NavItemProps } from '../types'
const NavItem = (props) => {
  const [activeTab, setActiveTab] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    highlightActiveTab()
  }, [])

  const highlightActiveTab = () => {
    let pathname = location.pathname.split('/')
    let activeTab = pathname[pathname.length - 1]
    if (activeTab) {
      setActiveTab(activeTab)
    }
  }

  const onTabHandler = (e, tab) => {
    e.preventDefault()
    let tabKey = tab.key.toLowerCase()
    if (tabKey !== activeTab) {
      if (tabKey === 'login') {
        navigate('/login')
      }
      if (tabKey === 'dashboard') {
        navigate('/dashboard')
      } else {
        navigate(`/${tabKey}`)
      }
      setActiveTab(tabKey)
      props.passChild(tabKey)
    } else {
      navigate(`/${tabKey}`)
    }
  }

  return (
    <List>
      <ListItemIcon className='app-logo'>
        {/* <img src={Applogo} alt="app-logo" width={"70%"} /> */}
        Hello world
      </ListItemIcon>
      {sidebarTabsList.map((menu, index) => {
        let [textClass, iconColor] = ['sidebar-tab-text', 'black_icon']
        ;[textClass, iconColor] =
          activeTab === menu.key.toLowerCase()
            ? ['active-tab', 'white_icon']
            : ['sidebar-tab-text', 'black_icon']

        const Icon = menu.icon
        const itemIcon = menu?.icon ? (
          <Icon stroke={1.5} size='1.3rem' />
        ) : (
          <FiberManualRecordOutlinedIcon />
        )
        return (
          <ListItem
            button
            key={menu.key}
            onClick={(e) => onTabHandler(e, menu)}
            className={textClass}
            sx={{ my: 1 }}
          >
            <ListItemIcon className={iconColor} sx={{ minWidth: '40px' }}>
              {itemIcon}
            </ListItemIcon>
            <ListItemText primary={menu.text} />
          </ListItem>
        )
      })}
    </List>
  )
}

export default NavItem
