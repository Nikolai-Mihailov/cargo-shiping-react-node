import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    rightToolbar: {
        marginLeft: 'auto',
        marginRight: theme.spacing(2)
    },
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        fontSize: '20px',
        padding: '10px'
    },
    registrationButton: {
        color: '#fff',
        backgroundColor: '#3f51b5'
    },
    mobileMenuIcon: {
        height: "30px",
        width: "30px"
    }
}));


export default function ButtonAppBar() {

    const classes = useStyles();
    const theme = useTheme();
    const view = useMediaQuery(theme.breakpoints.down('md'));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);
    const desktopMenu = (
        <React.Fragment>
            <div className={classes.rightToolbar}>
                <Button color="primary">Товари</Button>
                <Button color="primary">Акаунт</Button>
                <Link href="/login"><Button color="primary">Вход</Button></Link>
                <Link href="/signup"><Button className={classes.registrationButton}>Регистрация</Button></Link>
            </div>
        </React.Fragment>
    );
    const mobileMenu = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
                <List disablePadding>
                    <Link href="/cargos" passHref>
                        <ListItem button divider component="a" onClick={() => setOpenDrawer(false)}>
                            <ListItemText>Товари</ListItemText>
                        </ListItem>
                    </Link>
                    <Link href="/account" passHref>
                        <ListItem button divider component="a" onClick={() => setOpenDrawer(false)}>
                            <ListItemText>Акаунт</ListItemText>
                        </ListItem>
                    </Link>
                    <Link href="/login" passHref >
                        <ListItem button divider component="a" onClick={() => setOpenDrawer(false)}>
                            <ListItemText>Вход</ListItemText>
                        </ListItem>
                    </Link>
                    <Link href="/signup" passHref >
                        <ListItem button divider component="a" onClick={() => setOpenDrawer(false)}>
                            <ListItemText>Регистрация</ListItemText>
                        </ListItem>
                    </Link>
                </List>
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} >
                <MenuIcon className={classes.mobileMenuIcon} />
            </IconButton>
        </React.Fragment>
    )


    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <React.Fragment>
                    <Container maxWidth="lg">
                        <Toolbar>
                            <Typography variant="subtitle1" className={classes.title}>Shipping App</Typography>
                            {view ? mobileMenu : desktopMenu}
                        </Toolbar>
                    </Container>
                </React.Fragment>
            </AppBar>
        </div >
    );
}
