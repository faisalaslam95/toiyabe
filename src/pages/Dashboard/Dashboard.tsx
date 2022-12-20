import React from 'react'
import { Grid, Typography } from '@mui/material'
import { DashboardItem } from './components/DashboardItem'
import { Wrapper } from '../../components/wrapper/Wrapper'
import { CustomList } from '../../components/list/CustomList'
import { CustomCard } from '../../components/card/CustomCard'

export function Dashboard() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            style={{
              marginBottom: '8px',
              fontFamily: 'DM Sans',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '23px',
              color: '#000000',
            }}
          >
            General
          </Typography>
          <Grid container xs={12} spacing={2}>
            <Grid item xs={3}>
              <CustomCard variant='rounded' />
            </Grid>
            <Grid item xs={3}>
              <CustomCard variant='rounded' />
            </Grid>
            <Grid item xs={3}>
              <CustomCard variant='rounded' />
            </Grid>
            <Grid item xs={3}>
              <CustomCard variant='rounded' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Wrapper>{''}</Wrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            style={{
              marginBottom: '8px',
              fontFamily: 'DM Sans',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '23px',
              color: '#000000',
            }}
          >
            Events
          </Typography>
          <Wrapper>
            <CustomList />
          </Wrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            style={{
              marginBottom: '8px',
              fontFamily: 'DM Sans',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '23px',
              color: '#000000',
            }}
          >
            Resources
          </Typography>
          <Wrapper>
            <CustomList />
          </Wrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            style={{
              marginBottom: '8px',
              fontFamily: 'DM Sans',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '23px',
              color: '#000000',
            }}
          >
            Geographic
          </Typography>
          <Wrapper>
            <CustomList />
          </Wrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            style={{
              marginBottom: '8px',
              fontFamily: 'DM Sans',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '23px',
              color: '#000000',
            }}
          >
            Surveys
          </Typography>
          <Wrapper>
            <CustomList />
          </Wrapper>
        </Grid>
      </Grid>
    </>
  )
}
