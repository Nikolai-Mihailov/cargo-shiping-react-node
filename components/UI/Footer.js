import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    //   paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    backgroundColor: theme.palette.primary.main,
  },
}));

const footers = [
  {
    title: "За нас",
    description: ["Кои сме ние", "Контакти"],
  },
  {
    title: "Някви неща",
    description: ["бля бля", "бля бля", "бля бля", "бля бля", "бля бля"],
  },
  {
    title: "Други неща",
    description: ["Ресулрси", "бля бля", "бля бля", "Fбля бля"],
  },
  {
    title: "Правни",
    description: ["Политика за поверителност", "Условия за ползване"],
  },
];

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md" component="footer">
        <Grid container spacing={4} justify="space-evenly">
          <Divider />
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </footer>
  );
}
