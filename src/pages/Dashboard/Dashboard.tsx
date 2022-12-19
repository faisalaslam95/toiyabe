import React from 'react'
import { Grid } from '@mui/material'
import { DashboardItem } from './components/DashboardItem'
import { Wrapper } from '../../components/wrapper/Wrapper'
import { CustomList } from '../../components/list/CustomList'
import { CustomCard } from '../../components/card/CustomCard'

export function Dashboard() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomCard variant='rounded' />
        </Grid>
        <Grid item xs={12}>
          <Wrapper>{''}</Wrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Wrapper>
            <CustomList />
          </Wrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Wrapper>
            <CustomList />
          </Wrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Wrapper>
            <CustomList />
          </Wrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Wrapper>
            <CustomList />
          </Wrapper>
        </Grid>
      </Grid>
    </>
  )
}
