import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
}));

const tiers = [
  {
    title: "Пробен период",
    price: "0",
    description: ["1 потребител", "Неограничен достъп", "15 дни"],
    buttonText: "Избери",
    buttonVariant: "outlined",
  },
  {
    title: "Един месец",
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

export default function Pricing() {
  const classes = useStyles();

  return (
    <Box pt={20}>
      <CssBaseline />
      {/* Hero unit */}
      <Box pb={10}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom>
          Цени
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p">
          Изберете най-подходящият план за вас и вашата фирма.
        </Typography>
      </Box>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={2} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={6} md={3}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "Един месец" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Box>
                    <Typography>Това е стандартен план </Typography>
                  </Box>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
