import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { CustomAvatar } from '../avatar/CustomAvatar'
import icons from '../../icons'

interface CustomCardProps {
  variant: string
}

export function CustomCard({ variant }: CustomCardProps) {
  return (
    <Card
      sx={{
        display: 'flex',
        padding: '15px',
        alignItems: 'center',
        background: '#FFFFFF',
        boxShadow: variant === 'bordered' ? 'none' : '0px 6px 20px rgba(36, 41, 41, 0.1)',
        border: variant === 'bordered' ? '1px solid #DCDCDC' : 'none',
        borderRadius: '16px',
      }}
    >
      <CardMedia>
        <CustomAvatar
          img={icons.medicineIcon}
          name='abc'
          variant='rounded'
          styles={{
            width: variant === 'bordered' ? '54px' : '60px',
            height: variant === 'bordered' ? '57px' : '60px',
          }}
        />
      </CardMedia>
      <CardContent
        sx={{
          display: variant === 'bordered' ? 'flex' : 'block',
          justifyContent: variant === 'bordered' ? 'space-between' : '',
          width: '100%',
          padding: variant === '0px 16px' ? '100%' : '',
        }}
      >
        <Typography
          sx={{
            fontStyle: 'normal',
            fontWeight: variant === 'bordered' ? '700' : '500',
            fontSize: variant === 'bordered' ? '20px' : '12px',
            lineHeight: '16px',
            color: variant === 'bordered' ? '#000' : '#787878',
          }}
        >
          Scheduled Appointments
        </Typography>
        <Typography
          sx={{
            fontStyle: 'normal',
            fontWeight: variant === 'bordered' ? '400' : '700',
            fontSize: variant === 'bordered' ? '12px' : '20px',
            lineHeight: variant === 'bordered' ? '16px' : '26px',
            color: variant === 'bordered' ? '#000' : '#468D8D',
          }}
        >
          2,000
        </Typography>
      </CardContent>
    </Card>
  )
}
