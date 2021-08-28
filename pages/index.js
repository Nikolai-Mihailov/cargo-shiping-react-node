import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import {
  Grid,
  Typography,
  Paper,
  Container,
  MenuItem,
  Box,
  Button,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DoneIcon from "@material-ui/icons/Done";

// SVG's
import banner from "/public/img/svg/undraw_world_9iqb.svg";
import PricesCardComponent from "../components/PricesCardComponent";
import whoAreWeImage from "/public/img/svg/undraw_about_me_wa29.svg";
import informationImage from "/public/img/svg/undraw_customer_survey_f9ur.svg";
import line from "/public/img/svg/line.svg";

const useStyles = makeStyles((theme) => ({
  heroBlock: {
    height: "94vh",
    minHeight: "860px",
  },
  textCenter: {
    textAlign: "center",
  },
  gridItems: {
    padding: theme.spacing(4),
  },
  bold: {
    fontWeight: 600,
  },
  doneColor: {
    color: "#69f0ae",
  },
}));

const tiers = [
  {
    title: "Пробен период",
    freeText:
      "Get started with Material-UI – the most popular library for building interfaces with React. MIT licensed.",
    price: "0",
    description: ["1 потребител", "Неограничен достъп", "15 дни"],
    buttonText: "Избери",
    buttonVariant: "outlined",
  },
  {
    title: "Един месец",
    freeText:
      "Best for professional developers building data-rich enterprise applications.",
    subheader: "Най-популярен избор",
    price: "15",
    description: [
      "Неограничен брой потребители",
      "Неограничен достъп",
      "30 дни",
    ],
    buttonText: "Избери",
    buttonVariant: "contained",
  },
  {
    title: "Три месеца",
    freeText:
      "The community edition lets you get going right away. Switch to a commercial plan for more components & premium support.",
    price: "90",
    description: [
      "Неограничен брой потребители",
      "Неограничен достъп",
      "60 дни",
    ],
    buttonText: "Избери",
    buttonVariant: "outlined",
  },
  {
    title: "Една година",
    freeText:
      "Get started with Material-UI – the most popular library for building interfaces with React. MIT licensed.",
    price: "150",
    description: [
      "Неограничен брой потребители",
      "3еограничен достъп",
      "365 дни",
    ],
    buttonText: "Избери",
    buttonVariant: "outlined",
  },
];

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container direction="row">
        <Container disableGutters>
          <Box>
            <Grid
              container
              direction="row"
              alignItems="center"
              className={classes.heroBlock}>
              <Grid item xs className={classes.gridItems}>
                <Image src={banner} alt="About us" layout="responsive" />
              </Grid>
              <Grid item sm className={classes.gridItems}>
                <Typography variant="h3" className={classes.bold}>
                  Заглавен текст с някакво описание или нещо подобно
                </Typography>
                <Box pt={2}>
                  <Grid container direction="row" spacing={3}>
                    <Grid item>
                      <Button variant="contained" color="primary">
                        Пробвай сега
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="secondary" spacing={12}>
                        Научи повече
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Container maxWidth="xl">
          <Image src={line} alt="Line" layout="" />
        </Container>
        <Container>
          <Box pt={5}>
            <Grid
              container
              direction="row"
              alignItems="center"
              className={classes.grid}>
              <Grid item sm className={classes.gridItems}>
                <Typography variant="h3" className={classes.bold}>
                  Място за описание на Кои сме ние
                </Typography>
                <Box pt={2}>
                  <Typography variant="subtitle1">
                    Get your tests delivered at let home collect sample from the
                    victory of the managements that supplies best design system
                    guidelines ever. Get your tests delivered at let home
                    collect sample from the victory of the managements that
                    supplies best design system guidelines ever.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs className={classes.gridItems}>
                <Image src={whoAreWeImage} alt="About us" layout="responsive" />
              </Grid>
            </Grid>
          </Box>
          <Box pt={20} className={classes.textCenter}>
            <Grid item xs={12} className={classes.gridItems}>
              <Box pb={5}>
                <Typography variant="h3">Цени</Typography>
                <Typography variant="h5">
                  Изберете един от най-предпочитаните планове...
                </Typography>
              </Box>
              <Grid container spacing={2} alignItems="flex-end">
                {tiers.map((tier) => (
                  <Grid item key={tier.title} xs={12} sm={6} md={3}>
                    <PricesCardComponent tier={tier} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Container maxWidth="xl">
          <Image src={line} alt="reversedLine" layout="" />
        </Container>
        <Container>
          <Box>
            <Grid
              container
              direction="row"
              alignItems="center"
              className={classes.grid}>
              <Grid item xs className={classes.gridItems}>
                <Image
                  src={informationImage}
                  alt="About us"
                  layout="responsive"
                />
              </Grid>

              <Grid item sm className={classes.gridItems}>
                <Typography variant="h3" className={classes.bold}>
                  Някаква информация
                </Typography>
                <Box pt={2}>
                  <Typography variant="subtitle1">
                    <List>
                      <ListItem>
                        <ListItemIcon className={classes.doneColor}>
                          <DoneIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="  victory of the managements that supplies best design system
                    guidelines ever. Get your tests delivered at let home"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon className={classes.doneColor}>
                          <DoneIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="  victory of the managements that supplies best design system
                    guidelines ever. Get your tests delivered at let home"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon className={classes.doneColor}>
                          <DoneIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="  victory of the managements that supplies best design system
                    guidelines ever. Get your tests delivered at let home"
                        />
                      </ListItem>
                    </List>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Grid>
    </React.Fragment>
  );
}
