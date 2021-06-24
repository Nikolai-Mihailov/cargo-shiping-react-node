import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const useStyles = makeStyles((theme) => ({
  rightToolbar: {
    marginLeft: "auto",
    marginRight: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontSize: "20px",
    padding: "10px",
  },
  registrationButton: {
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    margin: "5px",
  },
  mobileMenuIcon: {
    height: "30px",
    width: "30px",
  },
  navBarColor: {
    backgroundColor: "#fafafa",
    color: "black",
  },
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function ButtonAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const view = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  const desktopMenu = (
    <React.Fragment>
      <div className={classes.rightToolbar} color="inherit">
        <Link href="/" passHref>
          <Button color="inherit">Начало</Button>
        </Link>
        <Button color="inherit" passHref>
          Товари
        </Button>
        <Link href="/account" passHref>
          <Button color="inherit">Акаунт</Button>
        </Link>
        <Link href="/pricing" passHref>
          <Button color="inherit">Цени</Button>
        </Link>
        <Link href="/login" passHref>
          <Button color="inherit" className={classes.registrationButton}>
            Вход
          </Button>
        </Link>
        <Link href="/signup2" passHref>
          <Button className={classes.registrationButton}>Регистрация</Button>
        </Link>
      </div>
    </React.Fragment>
  );
  const mobileMenu = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}>
        <List disablePadding>
          <Link href="/" passHref>
            <ListItem
              button
              divider
              component="a"
              onClick={() => setOpenDrawer(false)}>
              <ListItemText>Начало</ListItemText>
            </ListItem>
          </Link>
          <Link href="/cargos" passHref>
            <ListItem
              button
              divider
              component="a"
              onClick={() => setOpenDrawer(false)}>
              <ListItemText>Товари</ListItemText>
            </ListItem>
          </Link>
          <Link href="/account" passHref>
            <ListItem
              button
              divider
              component="a"
              onClick={() => setOpenDrawer(false)}>
              <ListItemText>Акаунт</ListItemText>
            </ListItem>
          </Link>
          <Link href="/pricing" passHref>
            <ListItem
              button
              divider
              component="a"
              onClick={() => setOpenDrawer(false)}>
              <ListItemText>Цени</ListItemText>
            </ListItem>
          </Link>
          <Link href="/login" passHref>
            <ListItem
              button
              divider
              component="a"
              onClick={() => setOpenDrawer(false)}>
              <ListItemText>Вход</ListItemText>
            </ListItem>
          </Link>
          <Link href="/signup2" passHref>
            <ListItem
              button
              divider
              component="a"
              onClick={() => setOpenDrawer(false)}>
              <ListItemText>Регистрация</ListItemText>
            </ListItem>
          </Link>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className={classes.mobileMenuIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.navBarColor}>
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="subtitle1" className={classes.title}>
                Shipping App
              </Typography>
              {view ? mobileMenu : desktopMenu}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}
