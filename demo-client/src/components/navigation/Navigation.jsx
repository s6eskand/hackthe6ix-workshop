import React, {useState} from 'react';

// custom components
import AuthDialog from "../auth/AuthDialog";

import {useHistory} from 'react-router-dom';

// material components
import {
    AppBar,
    Button,
    Typography,
    Toolbar,
    makeStyles,
    useMediaQuery
} from "@material-ui/core";

// routing
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#8cbbd4'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navigation(props) {
    let history = useHistory();
    const classes = useStyles();
    const [state, setState] = useState({
        dialogOpen: false,
        isLogin: false
    });

    const openDialog = (isLogin) => {
        setState({
            ...state,
            dialogOpen: true,
            isLogin,
        })
    };

    const handleDialogClose = () => {
        setState({
            ...state,
            dialogOpen: false
        })
    };

    const switchView = () => {
        setState({
            ...state,
            isLogin: !state.isLogin
        })
    };

    return(
        <AppBar className={classes.root}>
            <AuthDialog
                open={state.dialogOpen}
                isLogin={state.isLogin}
                handleClose={handleDialogClose}
                authLogin={props.authLogin}
                authRegister={props.authRegister}
                switchView={switchView}
                loading={props.loading}
                error={props.error}
                message={props.message}
            />
            <Toolbar>
                {props.isAuthenticated ?
                    <>
                        <Typography className={classes.title} variant="h6">
                            <Link to="/">Hack The 6ix Demo</Link>
                        </Typography>
                        <Button className={classes.menuButton} onClick={() => props.authLogout(history)} color="inherit" variant="outlined">Logout</Button>
                    </>
                    :
                    <>
                        <Typography className={classes.title} variant="h6">
                            <Link to="/">Hack The 6ix Demo</Link>
                        </Typography>
                        <Button onClick={() => openDialog(true)} className={classes.menuButton} color="inherit">Login</Button>
                        <Button onClick={() => openDialog(false)} className={classes.menuButton} color="inherit" variant="outlined">Register</Button>
                    </>
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;