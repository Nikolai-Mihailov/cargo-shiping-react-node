import Head from 'next/head'
import React from 'react'
import { Button, Grid, Typography,Container } from '@material-ui/core'
import Image from 'next/image';


export default function Home() {


  return (
    <React.Fragment>
      <Grid>
        <Image src="/static/assets/img/lastnav.jpg" layout="responsive" height={100} width={400} priority />
      </Grid>
      <Grid container direction="column">
    <Grid item>
      <Container>
          тест
      </Container>
    </Grid> 
        <Grid item>
          <Grid container justify="space-evenly" alignItems="center" direction="row">
            <Grid item>
              <Image src="/static/assets/img/nav3.png" height="500" width="700" quality="100" />
            </Grid>
            <Grid item>
              <Typography variant="h2">text area</Typography>
              <Grid item>
                <Button variant="contained">First Button</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Second Button</Button>
              </Grid> 
            </Grid>
          </Grid>
        </Grid>
 
        <Grid item>
          <Grid container justify="space-evenly" alignItems="center" direction="row">
            <Grid item>
              <Typography variant="h2">text area</Typography>
              <Grid container >
                <Typography>lorem </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Image src="/static/assets/img/nav3.png" height="500" width="700" quality="100" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
