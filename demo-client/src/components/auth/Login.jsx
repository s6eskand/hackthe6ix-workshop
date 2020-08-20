import React, {useEffect, useState} from 'react';

import {useHistory} from 'react-router-dom';

// material components
import {
    Button,
    TextField,
    DialogActions,
    makeStyles,
    CircularProgress
} from "@material-ui/core";
import ErrorDialog from "./ErrorDialog";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    marginRight: '10%',
  },
}));

function Login(props) {
    const classes = useStyles();
    let history = useHistory();
    const [state, setState] = useState({
        username: '',
        password: '',
    });

    useEffect(() => {
        setState({...state})
    }, [props.loading]);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };

    const handleLogin = () => {
        const data = {
          username: state.username,
          password: state.password,
        };
        props.login(data, history, props.handleClose);
    };

    console.log(props.error);
    return(
        <>
        <ErrorDialog
            open={props.error}
            message={props.message}
            severity={'error'}
        />
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <TextField
                autoFocus
                margin="dense"
                name="username"
                label="Username"
                value={state.username}
                onChange={handleChange}
                variant="outlined"
            />
            <TextField
                margin="dense"
                name="password"
                label="Password"
                type="password"
                value={state.password}
                onChange={handleChange}
                variant="outlined"
            />
        </div>
        <DialogActions className={classes.wrapper}>
            <Button onClick={props.handleClose} variant="outlined" color="secondary">Cancel</Button>
            <Button onClick={handleLogin} disabled={props.loading} variant="contained" color="primary">Login</Button>
            {props.loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </DialogActions>
        </>
    )

}

export default Login;