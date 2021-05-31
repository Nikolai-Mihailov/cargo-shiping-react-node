import Head from 'next/head'
import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import Image from 'next/image';


export default function Home() {


  return (
    <React.Fragment>
      <Grid container direction="column">
        <Grid item>
          <Grid container justify="space-evenly" alignItems="center" direction="row">

            <Grid item>
              <div>
                <Image src="/static/assets/img/navImage.jpg" height="300px" width="1000px" quality="100" />
                <Typography variant="h2">
                  Безплатен тестов период
                </Typography>
              </div>
              <Grid container>
                <Grid item>
                  <Button variant="contained" color="primary">Регистрация</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>{/* Services Block */}
          <Grid container direction="row">
            <Grid item>
              <Typography variant="h4">Услуги</Typography>
            </Grid>
            <Grid item>
              <Image src="/static/assets/img/favpng_logistics-management-inventory-business.png" width="300px" height="300px" quality="100" />

            </Grid>
          </Grid>
        </Grid>
      </Grid> {/*  Main Grid */}

    </React.Fragment>
  )
}
