import { Grid } from '@mui/material'
import { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
  noShadow?: boolean
}

export function Wrapper({ children, noShadow }: WrapperProps) {
  return (
    <Grid
      container
      sx={{
        background: '#FFFFFF',
        boxShadow: noShadow ? 'none' : '0px 6px 20px rgba(36, 41, 41, 0.1)',
        borderRadius: '16px',
      }}
    >
      {children}
    </Grid>
  )
}
