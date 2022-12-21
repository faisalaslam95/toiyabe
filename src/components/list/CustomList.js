import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Avatar,
  Divider,
  Typography,
} from '@mui/material'
import { CustomAvatar } from '../avatar/CustomAvatar'
import image from '../../assets/images/image.png'

export function CustomList() {
  return (
    <List sx={{ width: '100%' , p:3}} >
      {[1, 2, 3].map((value) => (
        <>
          <ListItem sx={{  p: {xs: 0, sm:2 } }}>
            <ListItemAvatar>
              <CustomAvatar
                img={image}
                name='image'
                variant='rounded'
                styles={{ width: '46px', height: '46px' }}
              />
            </ListItemAvatar>
            <ListItemText
              sx={{ display: 'flex', justifyContent: 'space-between' }}
              primary='Single-line item'
              secondary={<Typography color={(theme) => theme.palette.primary.main} fontSize={16}>1234 Clicks</Typography>}
            />
          </ListItem>
          {value !== 3 && <div className='itemDivider'/> }
        </>
      ))}
    </List>
  )
}
