import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Avatar,
  Divider,
} from '@mui/material'
import { CustomAvatar } from '../avatar/CustomAvatar'
import image from '../../assets/images/image.png'

export function CustomList() {
  return (
    <List sx={{ width: '100%' }}>
      {[1, 2, 3].map((value) => (
        <>
          <ListItem sx={{ padding: '16px' }}>
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
              secondary='secondary'
            />
          </ListItem>
          <Divider
            sx={{
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor:
                'linear-gradient( 270deg, rgba(255, 255, 255, 0) 0.62%, rgba(59, 125, 125, 0.5) 51.61%, rgba(255, 255, 255, 0) 98.92%',
            }}
          />
        </>
      ))}
    </List>
  )
}
