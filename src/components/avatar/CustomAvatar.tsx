import { Avatar } from '@mui/material'

interface CustomAvatarProps {
  img: any
  name: string
  variant: any
  styles: Object
}

export function CustomAvatar({ img, name, variant, styles }: CustomAvatarProps) {
  return (
    <Avatar sx={{ bgcolor: '#F26A4714', borderRadius: '10px', ...styles }} variant={variant}>
      <img src={img} alt={name} />
    </Avatar>
  )
}
