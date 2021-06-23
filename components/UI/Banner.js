import React from "react";
import src from "/public/img/svg/undraw_Success_factors_re_ce93.svg";

import Image from "next/image";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const Banner = () => {
  return (
    <Box pt={15}>
      <Grid container direction="row">
        <Grid item>
          <Image src={src} alt="About us" layout="responsive" />
        </Grid>
        <Grid item sm>
          <Typography variant="h3">
            Място за описание на "Кои сме ние"
          </Typography>
          <Box pt={2}>
            <Typography variant="p">
              Get your tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever. Get your tests delivered at let home collect
              sample from the victory of the managements that supplies best
              design system guidelines ever.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
