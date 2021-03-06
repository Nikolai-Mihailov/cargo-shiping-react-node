import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { InputLabel, Select, FormControl } from "@material-ui/core";

import { RegistrationContext } from "../context/RegistrationContext";
import { useEffect, useContext } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    width: "50%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  container: {
    paddingTop: "20px",
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [user, setUser] = useContext(RegistrationContext);

  const [subscription, setSubscription] = useState("");

  function handleSubscriptionChange(event) {
    setSubscription(event.target.value);
  }

  const submitForm = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <Container component="main">
      <Box mt={20}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ??????????????????????
          </Typography>
          <form className={classes.form} noValidate onSubmit={submitForm}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="??????"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="??????????????"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="??????????"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="??????????????"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="????????????"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="companyName"
                  label="?????? ???? ????????????????"
                  id="companyName"
                  autoComplete="cName"
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  variant="outlined"
                  required
                  name="bulstat"
                  label="??????????????"
                  id="bulstat"
                  autoComplete="bulstat"
                />
              </Grid>
              <Grid item xs={7}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth
                  required>
                  <InputLabel label="?????????????????????? ????????">
                    ?????????????????????? ????????
                  </InputLabel>
                  <Select
                    native
                    value={subscription}
                    onChange={handleSubscriptionChange}
                    label="?????????????????????? ????????"
                    variant="outlined">
                    <option aria-label="" value="" />
                    <option value={1}>???????? ??????????</option>
                    <option value={3}>?????? ????????????</option>
                    <option value={12}>???????? ????????????</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="country"
                  label="??????????????"
                  name="country"
                  autoComplete="country"
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="????????"
                  name="city"
                  autoComplete="city"
                />
              </Grid>
              <Grid item xs={8} sm={8}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  label="??????????"
                  name="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="postcode"
                  label="???????????????? ??????"
                  name="postcode"
                  autoComplete="postcode"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              ??????????????????????
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  ???????? ?????????? ????????????? ????????
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Box>
    </Container>
  );
}
