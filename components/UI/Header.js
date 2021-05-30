import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link'
import { Container } from '@material-ui/core'

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
    }
}));


export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Container maxWidth="lg">
                    <Toolbar>
                        <Typography variant="subtitle1" className={classes.title}>Shipping App</Typography>
                        <div className={classes.rightToolbar}>
                            <Button color="primary">Товари</Button>
                            <Button color="primary">Камиони</Button>
                            <Button color="primary">Акаунт</Button>
                            <Link href="/login"><Button color="primary">Вход</Button></Link>
                            <Link href="/signup"><Button className={classes.registrationButton}>Регистрация</Button></Link>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
