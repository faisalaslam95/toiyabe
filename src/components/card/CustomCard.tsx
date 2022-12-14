import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { CustomAvatar } from '../avatar/CustomAvatar'
import icons from '../../assets/icons'
interface cardDataProps {
  name: string
  amount?: string | number
}
interface CustomCardProps {
  variant?: string
  cardData?: cardDataProps
}

export function CustomCard({ variant, cardData }: CustomCardProps) {
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
        width: '100%',
      }}
    >
      <CardMedia>
        <CustomAvatar
          img={variant === 'bordered' ? icons.medicineIcon : icons.medicineIcon}
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
          {cardData?.name}
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
          {cardData?.amount}
        </Typography>
      </CardContent>
    </Card>
  )
}
